import BreadCrumbs from "@/components/breadcrumbs/BreadCrumbs";
import CurrentOpenings from "./CurrentOpenings";
import CVForm from "./CVForm";

const page = () => {
  return (
    <div>
      <BreadCrumbs title="Careers" subtitle="In Omni Health Care" />

      <CurrentOpenings />

      <CVForm />
    </div>
  );
};

export default page;
