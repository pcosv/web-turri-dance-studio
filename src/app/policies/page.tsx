import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Policies" };

export default function Page() {
  return (
    <>
      <PageHero
        crumb={"Policies"}
        script={"the fine print"}
        title={"Policies"}
        lead={"Studio policies for students and families."}
      />
      <ComingSoon />
    </>
  );
}
