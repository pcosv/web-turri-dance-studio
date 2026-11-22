import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Teachers" };

export default function Page() {
  return (
    <>
      <PageHero
        crumb={"Teachers"}
        script={"meet the team"}
        title={"Our teachers"}
        lead={"The people who will guide you at the barre."}
      />
      <ComingSoon />
    </>
  );
}
