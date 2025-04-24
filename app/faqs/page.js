"use client";
import BreadCrumbs from "@/components/breadcrumbs/BreadCrumbs";
import FAQSection from "@/components/services/FAQSection";
import { singleServiceQuery } from "@/lib/graphql";
import { useQuery } from "@apollo/client";
import { Loader } from "lucide-react";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(singleServiceQuery, {
    variables: { id },
  });
  if (loading) return <Loader />;
  return (
    <div>
      <BreadCrumbs title="FAQs" subtitle="In Omni Health Care" />
      <FAQSection singleService={data} />
    </div>
  );
};

export default page;
