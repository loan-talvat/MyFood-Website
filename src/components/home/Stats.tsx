"use client";

import { useTranslations } from "next-intl";
import { Users, Utensils, Target, Gift } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function Stats() {
  const t = useTranslations("stats");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    {
      icon: Users,
      value: "10K+",
      label: t("users"),
      delay: 0,
    },
    {
      icon: Utensils,
      value: "500K+",
      label: t("meals"),
      delay: 0.1,
    },
    {
      icon: Target,
      value: "95%",
      label: t("accuracy"),
      delay: 0.2,
    },
    {
      icon: Gift,
      value: "0€",
      label: t("free"),
      delay: 0.3,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-teal-500" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-white/5 to-transparent" />

        {/* Floating dots pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.3 + Math.random() * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.6, delay: stat.delay, ease: "easeOut" }}
              className="text-center group"
            >
              {/* Icon container */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-5 border border-white/20 shadow-lg"
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Value */}
              <motion.p
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                transition={{ duration: 0.5, delay: stat.delay + 0.2, type: "spring" }}
                className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight"
              >
                {stat.value}
              </motion.p>

              {/* Label */}
              <p className="text-white/80 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
