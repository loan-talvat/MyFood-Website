import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header, Footer } from "@/components/layout";
import { Heart, Lightbulb, Shield, Sparkles, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tCta = await getTranslations("cta");

  const values = [
    {
      icon: Lightbulb,
      title: t("values.items.0.title"),
      description: t("values.items.0.description"),
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Users,
      title: t("values.items.1.title"),
      description: t("values.items.1.description"),
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Shield,
      title: t("values.items.2.title"),
      description: t("values.items.2.description"),
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Sparkles,
      title: t("values.items.3.title"),
      description: t("values.items.3.description"),
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-accent/50 to-background">
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t("mission.title")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("mission.description")}
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl aspect-square flex items-center justify-center">
                <Target className="w-32 h-32 text-primary opacity-50" />
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t("story.title")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("story.description")}
                </p>
              </div>
              <div className="md:order-1 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl aspect-square flex items-center justify-center">
                <Heart className="w-32 h-32 text-secondary opacity-50" />
              </div>
            </div>
          </div>
        </section>

        {/* Open Source Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("openSource.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t("openSource.description")}
            </p>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir sur GitHub
              </a>
            </Button>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              {t("values.title")}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-14 h-14 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <value.icon className={`w-7 h-7 ${value.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {tCta("title")}
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              {tCta("description")}
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link href="#">{tCta("button")}</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
