import BreadCrumbs from "@/components/breadcrumbs/BreadCrumbs";
import CurrentOpenings from "./CurrentOpenings";

const page = () => {
  return (
    <div>
      <BreadCrumbs title="Careers" subtitle="In Omni Health Care" />
      <CurrentOpenings />
    </div>
  );
};

export default page;
