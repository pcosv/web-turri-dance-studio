import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Adult classes" };

export default function Page() {
  return (
    <>
      <PageHero
        crumb={"Adult classes"}
        script={"for grown-ups"}
        title={"Adult classes"}
        lead={"Ballet for beginners and intermediates, and yoga, for ages 16 and over."}
      />
      <ComingSoon />
    </>
  );
}
