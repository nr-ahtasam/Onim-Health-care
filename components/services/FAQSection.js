"use client"; // Mark as client component for useQuery
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { gql, useQuery } from "@apollo/client";

// Define the GraphQL query
const SINGLE_SERVICE_QUERY = gql`
  query SingleService($id: ID!) {
    service(id: $id, idType: DATABASE_ID) {
      serviceFaqs {
        nodes {
          name
          description
        }
      }
    }
  }
`;

export default function FAQSection({ serviceId }) {
  // Fetch data with useQuery
  const { loading, error, data } = useQuery(SINGLE_SERVICE_QUERY, {
    variables: { id: serviceId }, // Pass the serviceId from props
  });

  // Handle loading and error states
  if (loading) return <div className="py-16">Loading FAQs...</div>;
  if (error) return <div className="py-16">Error loading FAQs: {error.message}</div>;

  // Use API data for FAQ items, default to empty array if no data
  const faqItems = data?.service?.serviceFaqs?.nodes.map((node) => ({
    question: node.name,
    answer: node.description,
  })) || [];

  return (
      <section className="w-full px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Frequently Asked?</h2>

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