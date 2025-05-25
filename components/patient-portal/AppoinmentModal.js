"use client";

export default function AppointmentModal({
  appointment,
  onClose,
  showFileActions = false,
}) {
  if (!appointment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4">
      <div
        className="bg-white rounded-xl border border-sky-300 shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-2xl relative"
        style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.04)" }}
      >
        <div className="font-bold text-lg sm:text-xl mb-2">
          Appointment Number #00{appointment.id || "1"}
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
                href={appointment.downloadLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5DC7FF] hover:bg-sky-500 text-white text-xs sm:text-sm font-medium rounded-full px-4 py-1.5 transition inline-block w-fit"
              >
                Click Here
              </a>
            </div>
            {/* Upload File Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-semibold text-sm sm:text-base">
                Upload File :
              </span>
              <button
                className="bg-[#5DC7FF] hover:bg-sky-500 text-white text-xs sm:text-sm font-medium rounded-full px-4 py-1.5 transition inline-block w-fit"
                onClick={() => alert("Upload functionality goes here!")}
              >
                Click Here
              </button>
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
