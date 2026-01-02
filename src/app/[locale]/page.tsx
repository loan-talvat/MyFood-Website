import { setRequestLocale } from "next-intl/server";
import { Header, Footer } from "@/components/layout";
import { Hero, HowItWorks, Features, Stats, CTA } from "@/components/home";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
