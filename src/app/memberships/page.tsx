import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Memberships & packs" };

export default function Page() {
  return (
    <>
      <PageHero
        crumb={"Memberships & packs"}
        script={"prices"}
        title={"Memberships & packs"}
        lead={"Memberships, class packs and trial classes."}
      />
      <ComingSoon />
    </>
  );
}
