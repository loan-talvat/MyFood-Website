"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function CTA() {
  const t = useTranslations("cta");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Main CTA Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] p-1 bg-gradient-to-br from-primary via-primary/80 to-teal-500">
            {/* Inner content */}
            <div className="relative bg-gradient-to-br from-primary via-primary/95 to-teal-500 rounded-[2.3rem] p-10 md:p-16 lg:p-20">
              {/* Decorative elements */}
              <div className="absolute inset-0 overflow-hidden rounded-[2.3rem]">
                {/* Gradient orbs */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-white/5 to-transparent" />

                {/* Floating sparkles */}
                <motion.div
                  animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-20 opacity-40"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-16 left-16 opacity-30"
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-8"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-white/90 text-sm font-medium">100% Gratuit</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
                >
                  {t("title")}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                  {t("description")}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button
                    size="lg"
                    asChild
                    className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7 bg-white text-primary hover:bg-white/95 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 font-semibold"
                  >
                    <Link href="#">
                      {t("button")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>

                {/* Trust indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mt-8 flex items-center justify-center gap-6 text-white/70 text-sm"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-white/80" />
                    <span>{t("noCard")}</span>
                  </div>
                  <div className="w-1 h-1 bg-white/40 rounded-full" />
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-white/80" />
                    <span>Open source</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
