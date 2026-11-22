import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "FAQ" };

export default function Page() {
  return (
    <>
      <PageHero
        crumb={"FAQ"}
        script={"good to know"}
        title={"Frequently asked questions"}
        lead={"Answers to the questions we hear most often."}
      />
      <ComingSoon />
    </>
  );
}
