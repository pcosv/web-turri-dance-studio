import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Booking & payments" };

export default function Page() {
  return (
    <>
      <PageHero
        crumb={"Booking & payments"}
        script={"simple & secure"}
        title={"Booking & payments"}
        lead={"How booking and payment work on our booking platform."}
      />
      <ComingSoon />
    </>
  );
}
