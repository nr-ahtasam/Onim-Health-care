"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import AppointmentForm from "@/components/form/AppointmentForm";

export default function PopUpModal({ autoOpen = true }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const hasInteracted = useRef(false);

  useEffect(() => {
    if (!autoOpen|| pathname === "/book-appointment") return;

    // Reset modal state and interaction flag on route change
    setIsModalOpen(false);
    hasInteracted.current = false;

    // Function to open modal on user interaction
    const openModal = () => {
      if (!hasInteracted.current && !isModalOpen) {
        setIsModalOpen(true);
        hasInteracted.current = true;
        // Optional: Track modal open event with Google Analytics
        if (typeof window.gtag === "function") {
          window.gtag("event", "modal_open", {
            event_category: "Engagement",
            event_label: "AppointmentForm Modal",
            page_path: pathname,
          });
        }
      }
    };

    // Add event listeners for user interactions
    window.addEventListener("click", openModal, { passive: true });
    window.addEventListener("scroll", openModal, { passive: true });
    window.addEventListener("mousemove", openModal, { passive: true });

    // Cleanup event listeners on unmount or route change
    return () => {
      window.removeEventListener("click", openModal);
      window.removeEventListener("scroll", openModal);
      window.removeEventListener("mousemove", openModal);
    };
  }, [pathname, autoOpen]);

  // Add Escape key support for accessibility
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        hasInteracted.current = true; // Prevent reopening after manual close
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="rounded-lg max-w-md relative">
            {/* Close Button */}
            <Button
              onClick={() => {
                setIsModalOpen(false);
                hasInteracted.current = true; // Prevent reopening after manual close
              }}
              className="absolute top-0 right-0 rounded-full bg-transparent hover:bg-transparent text-white text-xl hover:text-red-500"
              aria-label="Close modal"
            >
              ✕
            </Button>
            <div id="modal-title" className="sr-only">
              Appointment Form Modal
            </div>
            <AppointmentForm setIsModalOpen={setIsModalOpen}/>
          </div>
        </div>
      )}
    </>
  );
}