"use client";

const AppointmentCardList = ({ appointments, onSelect, extraAction }) => (
  <div className="space-y-4">
    {appointments.map((a, i) => (
      <div key={i} className="bg-white border border-gray-100 rounded-lg p-4 space-y-3">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-900">{a.type}</div>
            <div className="text-xs text-gray-500">{a.date} at {a.time}</div>
          </div>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            a.status === "Pending"
              ? "text-yellow-700 bg-yellow-100"
              : a.status === "Confirmed"
              ? "text-blue-700 bg-blue-100"
              : a.status === "Completed"
              ? "text-green-700 bg-green-100"
              : "text-gray-600 bg-gray-100"
          }`}>
            {a.status}
          </span>
        </div>

        <div className="space-y-2 text-sm">
          <div><span className="text-gray-500 w-20 inline-block">Location:</span> {a.location}, {a.city}</div>
          <div><span className="text-gray-500 w-20 inline-block">Doctor:</span> {a.doctor}</div>
        </div>

        <div className="pt-2 space-y-2">
          {extraAction?.(a)}
          <button
            onClick={() => onSelect(a)}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition cursor-pointer"
          >
            View
          </button>
        </div>
      </div>
    ))}
  </div>
);


export default AppointmentCardList;
