"use client";
import { useEffect, useState } from "react";
export default function AppointmentModal({
  appointment,
  onClose,
  showFileActions = false,
}) {
  const [downloadLink, setDownloadLink] = useState(null);
  const [fileId, setFileId] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      if (!appointment?.mediaId) return;

      try {
        const res = await fetch(`/api/media/${appointment.mediaId}`);
        const data = await res.json();

        if (res.ok && data?.guid?.rendered) {
          setDownloadLink(data?.guid?.rendered); // Store the media ID for potential future use
          
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

  
  const handleDownload = async () => {
    if (!downloadLink) return;

    try {
      const res = await fetch(downloadLink);
      const blob = await res.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "appointment-file"; // You can customize this
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
      alert("Failed to download file.");
    }
  };

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

          await fetch(`/api/patient-history/${appointment?.historyId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            status: "publish",
            acf: {
              file: data.id,
            },
          }),
        });

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
            <span className="text-sm sm:text-base text-green-600">
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
                className="bg-[#5DC7FF] hover:bg-sky-500 text-white text-xs sm:text-sm font-medium rounded-full px-4 py-1.5 transition inline-block w-fit"
              >
                Click Here
              </a>
            </div>
            {/* Upload File Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-semibold text-sm sm:text-base">Upload File :</span>
              <input
                type="file"
                onChange={handleFileUpload}
                className="bg-[#5DC7FF] hover:bg-sky-500 text-white text-xs sm:text-sm font-medium rounded-full px-4 py-1.5 transition inline-block w-fit"
              />
            </div>
          </div>
        )}

        <button
          className="mt-6 bg-red-500 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-red-600 transition w-full sm:w-auto"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
