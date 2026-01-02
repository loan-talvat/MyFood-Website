"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, Play, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/shared/PhoneMockup";

export function Hero() {
  const t = useTranslations("hero");

  const benefits = [
    "Analyse automatique par IA",
    "Suivi des macros en temps réel",
    "100% gratuit pour commencer",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Fond avec formes organiques */}
      <div className="absolute inset-0">
        {/* Gradient de fond principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-secondary/20" />

        {/* Cercles décoratifs flous */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-20 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
        />

        {/* Petits cercles décoratifs flottants */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[15%] w-3 h-3 bg-primary/40 rounded-full"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-48 right-[20%] w-2 h-2 bg-secondary/50 rounded-full"
        />
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-[25%] w-4 h-4 bg-primary/30 rounded-full"
        />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu texte */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t("badge")}
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              <span className="text-foreground">{t("title")}</span>
              <br />
              <span className="text-gradient">{t("titleHighlight")}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {t("description")}
            </motion.p>

            {/* Avantages rapides */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              {benefits.map((benefit, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="w-4 h-4 text-primary" />
                  {benefit}
                </motion.span>
              ))}
            </motion.div>

            {/* Boutons CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                asChild
                className="text-base px-8 h-14 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <Link href="#">
                  {t("cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base px-8 h-14 rounded-2xl border-2 hover:bg-secondary/50 transition-all duration-300"
              >
                <Link href="/features" className="gap-2">
                  <Play className="w-4 h-4" />
                  {t("ctaSecondary")}
                </Link>
              </Button>
            </motion.div>

            {/* Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-sm text-muted-foreground/70"
            >
              {t("noCard")}
            </motion.p>
          </div>

          {/* Mockup téléphone */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow derrière le téléphone */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[4rem] blur-3xl scale-90 opacity-60" />
              <PhoneMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
