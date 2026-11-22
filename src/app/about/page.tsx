import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "About us" };

export default function Page() {
  return (
    <>
      <PageHero
        crumb={"About us"}
        script={"our story"}
        title={"More than dance, a space to bloom."}
        lead={"Turri Dance Studio was born from a simple wish: a place where every dancer feels welcome, seen and free to grow."}
      />
      <ComingSoon />
    </>
  );
}
