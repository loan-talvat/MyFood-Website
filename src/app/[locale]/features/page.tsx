import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header, Footer } from "@/components/layout";
import {
  Sparkles,
  Images,
  BarChart3,
  Target,
  Users,
  MapPin,
  StickyNote,
  Share2,
  Camera,
  TrendingUp,
  Shield,
  Smartphone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: "Fonctionnalités",
    description: t("description"),
  };
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("features");
  const tCta = await getTranslations("cta");

  const mainFeatures = [
    {
      icon: Sparkles,
      title: t("items.aiAnalysis.title"),
      description: t("items.aiAnalysis.description"),
      color: "text-primary",
      bgColor: "bg-primary/10",
      details: [
        "Reconnaissance automatique des aliments",
        "Calcul précis des calories",
        "Détection des protéines, glucides et lipides",
        "Amélioration continue de la précision",
      ],
    },
    {
      icon: Images,
      title: t("items.multiPhoto.title"),
      description: t("items.multiPhoto.description"),
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      details: [
        "Ajoutez plusieurs photos par repas",
        "Entrée, plat, dessert séparés",
        "Organisation automatique",
        "Galerie de vos repas",
      ],
    },
    {
      icon: BarChart3,
      title: t("items.stats.title"),
      description: t("items.stats.description"),
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      details: [
        "Statistiques quotidiennes",
        "Bilan hebdomadaire",
        "Récapitulatif mensuel",
        "Graphiques interactifs",
      ],
    },
    {
      icon: Target,
      title: t("items.goals.title"),
      description: t("items.goals.description"),
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      details: [
        "Calcul automatique des besoins",
        "Basé sur votre profil",
        "Objectifs ajustables",
        "Suivi de progression",
      ],
    },
  ];

  const secondaryFeatures = [
    {
      icon: Users,
      title: t("items.sharing.title"),
      description: t("items.sharing.description"),
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: MapPin,
      title: t("items.location.title"),
      description: t("items.location.description"),
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: StickyNote,
      title: t("items.notes.title"),
      description: t("items.notes.description"),
      color: "text-yellow-600",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Share2,
      title: t("items.socialShare.title"),
      description: t("items.socialShare.description"),
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
  ];

  const additionalFeatures = [
    {
      icon: Camera,
      title: "Capture rapide",
      description: "Prenez une photo en quelques secondes",
    },
    {
      icon: TrendingUp,
      title: "Évolution visible",
      description: "Suivez vos progrès au fil du temps",
    },
    {
      icon: Shield,
      title: "Données sécurisées",
      description: "Vos informations sont protégées",
    },
    {
      icon: Smartphone,
      title: "Multi-plateforme",
      description: "Accessible sur tous vos appareils",
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

        {/* Main Features */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="space-y-16">
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div
                      className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`${feature.bgColor} rounded-3xl aspect-square flex items-center justify-center ${
                      index % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <feature.icon className={`w-32 h-32 ${feature.color} opacity-50`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secondary Features Grid */}
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Et bien plus encore
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {secondaryFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
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
