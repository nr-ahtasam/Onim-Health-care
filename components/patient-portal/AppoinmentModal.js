"use client";
import { useEffect, useState } from "react";
export default function AppointmentModal({
  appointment,
  onClose,
  showFileActions = false,
  refetchBookings,
}) {  
  const [downloadLink, setDownloadLink] = useState(null);
  const [fileId, setFileId] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      setDownloadLink(null);
      if (!appointment?.fileId) return;

      try {
        const res = await fetch(`/api/media/${appointment?.fileId}`);
        const data = await res.json();

        if (res.ok && data?.guid?.rendered) {
          setDownloadLink(data?.guid?.rendered);
        } else {
          console.warn("Could not fetch media link");
        }
      } catch (err) {
        console.error("Media fetch failed:", err);
      }
    };

    fetchMedia();
  }, [appointment]);

  if (!appointment) return null;

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/media", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        if (data.id) {
          setDownloadLink(data.guid.rendered);
          setFileId(data.id);

          const resp = await fetch(`/api/booking/${appointment?.bookingId}`, {
            method: "PATCH",
            body: JSON.stringify({
              acf: {
                file: data.id,
              },
            }),
          });

          if(resp.ok) refetchBookings();
        }
      } else {
        console.error("Upload error:", data);
        alert("Upload failed.");
      }
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Error uploading file.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4">
      <div
        className="bg-white rounded-xl border border-sky-300 shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-2xl relative"
        style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.04)" }}
      >
        <div className="font-bold text-lg sm:text-xl mb-2">
          Appointment Number # {appointment.bookingId}
        </div>

        <div className="space-y-2 sm:space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1">
            <span className="font-semibold text-sm sm:text-base">Type :</span>{" "}
            <span
              className={`text-sm sm:text-base ${
                appointment.type === "Online"
                  ? "text-green-600"
                  : "text-gray-700"
              }`}
            >
              {appointment.type}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1">
            <span className="font-semibold text-sm sm:text-base">
              Date & Time :
            </span>{" "}
            <span className="text-sm sm:text-base">
              {appointment.date} &rarr; {appointment.time}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1">
            <span className="font-semibold text-sm sm:text-base">Doctor :</span>{" "}
            <span className="text-sm sm:text-base">{appointment.doctor}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1">
            <span className="font-semibold text-sm sm:text-base">
              Location :
            </span>{" "}
            <span className="text-sm sm:text-base">
              {appointment.location}, {appointment.city}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1">
            <span className="font-semibold text-sm sm:text-base">Status :</span>{" "}
            {/* <span className="text-sm sm:text-base text-green-600">
              {appointment.status}
            </span> */}

            <span
              className={`px-2 py-1 text-sm sm:text-base font-medium rounded-full
                ${
                  appointment.status === "Pending"
                    ? "text-yellow-700 bg-yellow-100"
                    : appointment.status === "Confirmed"
                    ? "text-blue-700 bg-blue-100"
                    : appointment.status === "Completed"
                    ? "text-green-700 bg-green-100"
                    : "text-gray-600 bg-gray-100"
                }
              `}
            >
              {appointment.status}
            </span>
          </div>
        </div>

        {/* Only show these rows if showFileActions is true */}
        {showFileActions && (
          <div className="mt-4 space-y-3">
            {/* Download File Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-semibold text-sm sm:text-base">
                Download File :
              </span>
              <a
                href={downloadLink}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5DC7FF] hover:bg-sky-500 text-white text-xs sm:text-sm font-medium rounded-full px-4 py-1.5 transition inline-block w-fit cursor-pointer"
              >
                Click Here
              </a>
            </div>
            {/* Upload File Row */}
            {
              appointment.status === "Completed" && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-sm sm:text-base">
                    Upload File :
                  </span>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="bg-[#5DC7FF] hover:bg-sky-500 text-white text-xs sm:text-sm font-medium rounded-full px-4 py-1.5 transition inline-block w-fit cursor-pointer"
                  />
                </div>
              )
            }
            
          </div>
        )}

        {/* Google Meet Link for Online Appointments */}
        {appointment.type === "Online" && appointment.virtualMeetLink && (
          <div className="mt-4">
            <a
              href={ appointment.virtualMeetLink }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00897B] hover:bg-[#00796B] text-white text-sm font-medium rounded-lg px-4 py-2 transition cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Join Google Meet
            </a>
          </div>
        )}

        <button
          className="mt-6 bg-red-500 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-red-600 transition w-full sm:w-auto cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
