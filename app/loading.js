import Loader from "@/lib/Loader";
import LoadingSkeleton from "@/lib/LoadingSkeleton";

export default function Loading() {
  return (
    <>
      <Loader />
      <LoadingSkeleton />;
    </>
  );
}
