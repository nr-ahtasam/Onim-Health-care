"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqItems = [
    {
      question: "Do you pay before or after booking a hotel?",
      answer:
        "Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in.",
    },
    {
      question: "What documents are needed for booking?",
      answer:
        "For most bookings, you'll need a valid government-issued photo ID (such as a passport or driver's license) and a credit card for the reservation. International travelers may need to provide passport details and visa information. Business travelers might need to show a company ID or authorization letter. We recommend checking specific requirements before your trip as they may vary by location and booking type.",
    },
    {
      question: "Do Omni charge your card before you check in?",
      answer:
        "Yes, Omni typically places a temporary authorization hold on your credit card at the time of booking to guarantee your reservation. This is not an actual charge but a hold on those funds. The full payment is usually processed upon check-in or check-out, depending on the rate terms you selected. Some special rates or promotions may require full prepayment at the time of booking. Always check the specific terms of your reservation for details.",
    },
    {
      question: "Can I cancel my reservation?",
      answer:
        "Yes, most reservations can be canceled according to the cancellation policy specified at the time of booking. Typically, reservations can be canceled free of charge up to 24-48 hours before the scheduled arrival date. However, non-refundable rates or special promotions may have different cancellation terms. Please check your reservation confirmation for the specific cancellation policy that applies to your booking.",
    },
    {
      question: "Is breakfast included in the room rate?",
      answer:
        "Breakfast inclusion varies depending on the rate you select and the property. Some rates include complimentary breakfast, while others offer it as an add-on option. The breakfast details are always specified in the rate description during the booking process. If breakfast is important to you, we recommend selecting a rate that includes it or checking with the property about their breakfast options and pricing.",
    },
  ]

  return (
    <section className="w-full  px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Frequently Asked?</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-px overflow-hidden rounded-[20px] bg-white px-6 border-none"
            >
              <AccordionTrigger className="py-6 text-left text-[20px] font-medium">{item.question}</AccordionTrigger>
              <AccordionContent className="pb-6 pt-2 text-gray-600 leading-6">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

