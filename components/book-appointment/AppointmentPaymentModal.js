"use client";

import { Button } from "@/components/ui/button";
import { formatDateTime } from "@/lib/formatDateTime";

export default function AppointmentPaymentModal({
  name,
  phone,
  service,
  doctor,
  location,
  locations,
  creating,
  show,
  onCancel,
  onConfirm,
  onPayment,
  services,
}) {

  const serviceTitle =
    services.find((s) => s.serviceId.toString() === service)?.serviceFields?.catName || "N/A";
  const locationTitle =
    locations.find((s) => s.id.toString() === location)?.title?.rendered || "N/A";

  const actualFee = parseFloat(doctor?.acf?.consultation_fees || 0);
  const discountedFee = parseFloat(doctor?.acf?.consultation_fees_discount || 0);
  const isDiscountAvailable = discountedFee && discountedFee < actualFee;
  const total = isDiscountAvailable ? discountedFee : actualFee;

  return (
    <>
      {/* Main Modal */}
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Review & Confirm Your Appointment
            </h3>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <p>
                  <span className="font-bold">Patient Name:</span> {name}
                </p>
                <p>
                  <span className="font-bold">Phone Number:</span> {phone}
                </p>
                <p>
                  <span className="font-bold">Service:</span> {serviceTitle}
                </p>
                <p>
                  <span className="font-bold">Location:</span> {locationTitle}
                </p>
                <p>
                  <span className="font-bold">Doctor:</span>{" "}
                  {doctor?.title?.rendered || "N/A"}
                </p>
              </div>

              {/* <div className="bg-blue-50 p-4 rounded-lg space-y-2 border border-blue-100">
                <p className="font-semibold text-blue-700">Payment Summary</p>
                {isDiscountAvailable ? (
                  <>
                    <p>
                      <span className="font-bold">Consultation Fee:</span>{" "}
                      <span className="line-through text-gray-500 ml-1">৳{actualFee}</span>
                    </p>
                    <p>
                      <span className="font-bold">Discounted Fee:</span>{" "}
                      <span className="text-green-600">৳{discountedFee}</span>
                    </p>
                  </>
                ) : (
                  <p>
                    <span className="font-bold">Consultation Fee:</span>{" "}
                    <span>৳{actualFee || "N/A"}</span>
                  </p>
                )}
                <p>
                  <span className="font-bold">Total:</span>{" "}
                  <span className="text-green-600 font-bold">৳{total}</span>
                </p>
              </div> */}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline" onClick={onCancel} className="px-4">
                Cancel
              </Button>
              <Button
                onClick={onConfirm}
                disabled={creating}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4"
              >
                {creating ? "Booking Appointment..." : "Book Appointment"}
              </Button>
              {/* <Button
                onClick={onPayment}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4"
              >
                Pay Now
              </Button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
