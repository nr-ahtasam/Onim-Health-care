import { useEffect, useState } from "react";
import { getStoredPatient } from "@/lib/storage";

export default function RateDoctorModal({ appointment, onClose }) {
  const patient = getStoredPatient();

  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  // Reset state when a new appointment is selected
  useEffect(() => {
    if (appointment) {
      setRating(0);
      setDescription("");
    }
  }, [appointment]);

  if (!appointment) {
    return null;
  }

  const handleRatingClick = (starIndex) => {
    setRating(starIndex + 1);
  };

  const handleSubmit = async () => {
    console.log(
      "Submitting Rating:",
      rating,
      "Description:",
      description,
      "for Appointment:",
      appointment
    );
    
    
    await fetch("/api/rating", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "publish",
        acf: {
          rating: rating,
          description: description,
          patient: patient?.user_id,
          doctor: appointment?.doctorId,
        },
      }),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="relative p-8 border w-full max-w-md md:max-w-lg shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">
            Appointment Number #{appointment.appointmentNumber || "001"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-semibold"
          >
            &times;
          </button>
        </div>
        <div className="mb-4 text-sm text-gray-700">
          <p>
            <strong>Type:</strong>{" "}
            <span className="text-green-500">{appointment.type}</span>
          </p>
          <p>
            <strong>Date & Time:</strong> {appointment.date} &rarr;{" "}
            {appointment.time}
          </p>
          <p>
            <strong>Doctor:</strong> Dr. {appointment.doctor}
          </p>
        </div>

        <div className="mb-4 flex">
          <p className="font-semibold mr-2 text-gray-700 mb-2">
            Rate(out of 5) :
          </p>
          <div className="flex space-x-1 gap-3">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-6 h-6 cursor-pointer text-yellow-400 ${
                  index < rating
                    ? "fill-current stroke-none"
                    : "stroke-current fill-none stroke-1"
                }`}
                viewBox="0 0 20 20"
                onClick={() => handleRatingClick(index)}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.546 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.791.565-1.842-.197-1.546-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block font-semibold text-gray-700 mb-2"
          >
            Why this rating? :
          </label>
          <textarea
            id="description"
            rows="4"
            className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="description box"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
