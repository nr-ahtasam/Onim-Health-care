"use client";

import { Button } from "@/components/ui/button";
import { formatDateTime } from "@/lib/formatDateTime";

export default function AppointmentPaymentModal({
  name,
  phone,
  service,
  doctor,
  date,
  creating,
  show,
  onCancel,
  onConfirm,
  onPay,
  services,
  doctors,
}) {
  if (!show) return null;

  const serviceTitle = services.find((s) => s.databaseId.toString() === service)?.title || "N/A";
  const doctorTitle = doctors.find((d) => d.databaseId.toString() === doctor)?.title || "N/A";
  const { date: formattedDate, time: formattedTime } = formatDateTime(date);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Review & Confirm Your Appointment
        </h3>

        <div className="space-y-4 text-sm text-gray-700">
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <p>
              <span className="font-medium">Patient Name:</span> {name}
            </p>
            <p>
              <span className="font-medium">Phone Number:</span> {phone}
            </p>
            <p>
              <span className="font-medium">Service:</span> {serviceTitle}
            </p>
            <p>
              <span className="font-medium">Doctor:</span> {doctorTitle}
            </p>
            <p>
              <span className="font-medium">Scheduled Date:</span> {formattedDate}
            </p>
            <p>
              <span className="font-medium">Scheduled Time:</span> {formattedTime}
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg space-y-2 border border-blue-100">
            <p className="font-semibold text-blue-700">Payment Summary</p>
            <p>
              <span className="font-medium">Service Charge:</span> ৳500
            </p>
            <p>
              <span className="font-medium">Consultation Fee:</span> ৳1000
            </p>
            <p>
              <span className="font-medium">Total:</span>{" "}
              <span className="text-green-600 font-bold">৳1500</span>
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={onCancel}
            className="px-4"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            disabled={creating}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4"
          >
            {creating ? "Processing..." : "Skip Payment"}
          </Button>
          <Button
            onClick={onPay}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4"
          >
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
}