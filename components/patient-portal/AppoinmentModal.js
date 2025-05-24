"use client";

export default function AppointmentModal({
  appointment,
  onClose,
  showFileActions = false,
}) {
  if (!appointment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10">
      <div
        className="bg-white rounded-xl border border-sky-300 shadow-lg p-8 w-full max-w-2xl relative"
        style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.04)" }}
      >
        <div className="font-bold text-xl mb-2">
          Appointment Number #00{appointment.id || "1"}
        </div>
        <div>
          <span className="font-semibold">Type :</span>{" "}
          <span
            className={
              appointment.type === "Online" ? "text-green-600" : "text-gray-700"
            }
          >
            {appointment.type}
          </span>
        </div>
        <div className="mt-2">
          <span className="font-semibold">Date & Time :</span>{" "}
          {appointment.date} &rarr; {appointment.time}
        </div>
        <div className="mt-2">
          <span className="font-semibold">Doctor :</span> {appointment.doctor}
        </div>
        <div className="mt-2">
          <span className="font-semibold">Location :</span>{" "}
          {appointment.location}, {appointment.city}
        </div>
        <div className="mt-2">
          <span className="font-semibold">Status :</span>{" "}
          <span className="text-green-600">{appointment.status}</span>
        </div>

        {/* Only show these rows if showFileActions is true */}
        {showFileActions && (
          <>
            {/* Download File Row */}
            <div className="mt-4 flex items-center">
              <span className="font-semibold mr-2">Download File :</span>
              <a
                href={appointment.downloadLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5DC7FF] hover:bg-sky-500 text-white text-xs font-medium rounded-full px-4 py-1 ml-2 transition"
              >
                Click Here
              </a>
            </div>
            {/* Upload File Row */}
            <div className="mt-4 flex items-center">
              <span className="font-semibold mr-2">Upload File :</span>
              <button
                className="bg-[#5DC7FF] hover:bg-sky-500 text-white text-xs font-medium rounded-full px-4 py-1 ml-2 transition"
                onClick={() => alert("Upload functionality goes here!")}
              >
                Click Here
              </button>
            </div>
          </>
        )}

        <button
          className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
