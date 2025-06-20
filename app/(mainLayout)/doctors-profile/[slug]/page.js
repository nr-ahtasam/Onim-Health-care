import DoctorContent from "./DoctorContent";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const formattedSlug = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Doctor Profile | ${formattedSlug}`,
    description: "Empowering Surgical Services in Bangladesh",
  };
}

export default function DoctorProfile() {
  return <DoctorContent />;
}