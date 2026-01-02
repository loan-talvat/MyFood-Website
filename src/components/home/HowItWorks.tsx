"use client";

import { useTranslations } from "next-intl";
import { Camera, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function HowItWorks() {
  const t = useTranslations("howItWorks");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Camera,
      title: t("steps.photo.title"),
      description: t("steps.photo.description"),
      step: "1",
      gradient: "from-rose-500/20 to-orange-500/20",
      iconBg: "bg-gradient-to-br from-rose-500 to-orange-500",
    },
    {
      icon: Sparkles,
      title: t("steps.analysis.title"),
      description: t("steps.analysis.description"),
      step: "2",
      gradient: "from-primary/20 to-teal-500/20",
      iconBg: "bg-gradient-to-br from-primary to-teal-500",
    },
    {
      icon: TrendingUp,
      title: t("steps.tracking.title"),
      description: t("steps.tracking.description"),
      step: "3",
      gradient: "from-violet-500/20 to-purple-500/20",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            Simple comme bonjour
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15, ease: "easeOut" }}
              className="relative group"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    className="h-full bg-gradient-to-r from-border via-primary/30 to-border origin-left"
                  />
                </div>
              )}

              {/* Card */}
              <div className="relative bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-soft-lg group-hover:-translate-y-1">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  {/* Step number & Icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 ${step.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-6xl font-bold text-muted/30 group-hover:text-primary/20 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
