import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection({ singleService }) {
  // Use API data for FAQ items, default to empty array if no data
  const faqItems =
    singleService?.service?.serviceFaqs?.nodes.map((node) => ({
      question: node.name,
      answer: node.description,
    })) || [];

  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
          Frequently Asked?
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-px overflow-hidden rounded-[20px] bg-white px-6 border-none"
            >
              <AccordionTrigger className="py-6 text-left text-[20px] font-medium hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-2 text-gray-600 leading-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
