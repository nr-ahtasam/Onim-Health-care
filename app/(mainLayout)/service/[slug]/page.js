import ServiceContent from "./ServiceContent";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const formattedSlug = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Service | ${formattedSlug} `
  };
}

export default function Service() {
  return <ServiceContent />;
}