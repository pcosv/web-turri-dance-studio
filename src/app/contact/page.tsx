import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <>
      <PageHero
        crumb={"Contact"}
        script={"say hello"}
        title={"Contact us"}
        lead={"Questions about classes, trials or anything else? We’d love to hear from you."}
      />
      <ComingSoon />
    </>
  );
}
