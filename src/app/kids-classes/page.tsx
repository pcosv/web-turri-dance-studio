import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Kids classes" };

export default function Page() {
  return (
    <>
      <PageHero
        crumb={"Kids classes"}
        script={"little dancers"}
        title={"Kids classes"}
        lead={"Petite Performers from walking to 8 years, and ballet for ages 8 to 16."}
      />
      <ComingSoon />
    </>
  );
}
