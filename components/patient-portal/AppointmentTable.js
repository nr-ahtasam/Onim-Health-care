"use client";

const AppointmentTable = ({ appointments, onSelect, extraAction }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {["Type", "Date & Time", "Location", "Doctor", "Status", "Actions"].map((header) => (
            <th
              key={header}
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {appointments.map((a, i) => (
          <tr key={i} className="hover:bg-gray-50">
            <td className="px-4 py-3 text-sm text-gray-900">{a.type}</td>
            <td className="px-4 py-3">
              <div className="text-sm text-gray-900">{a.date}</div>
              <div className="text-sm text-gray-500">{a.time}</div>
            </td>
            <td className="px-4 py-3">
              <div className="text-sm text-gray-900">{a.location}</div>
              <div className="text-sm text-gray-500">{a.city}</div>
            </td>
            <td className="px-4 py-3 text-sm text-gray-900">{a.doctor}</td>
            <td className="px-4 py-3">
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
            </td>
            <td className="px-4 py-3 flex gap-2">
              <button
                onClick={() => onSelect(a)}
                className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-600 transition cursor-pointer"
              >
                View
              </button>
              {extraAction?.(a)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


export default AppointmentTable;
