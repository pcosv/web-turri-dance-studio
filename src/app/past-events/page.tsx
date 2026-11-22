import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Past events" };

export default function Page() {
  return (
    <>
      <PageHero
        crumb={"Past events"}
        script={"memories"}
        title={"Past events"}
        lead={"Showcases, excursions and special moments from the studio."}
      />
      <ComingSoon />
    </>
  );
}
