"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Heart, Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const socialLinks = [
    { href: "#", icon: Github, label: "GitHub" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
  ];

  const footerSections = [
    {
      title: t("product.title"),
      links: [
        { href: "/features", label: t("product.features") },
        { href: "/pricing", label: t("product.pricing") },
        { href: "#", label: t("product.download") },
      ],
    },
    {
      title: t("company.title"),
      links: [
        { href: "/about", label: t("company.about") },
        { href: "/contact", label: t("company.contact") },
        { href: "#", label: t("company.blog") },
      ],
    },
    {
      title: t("legal.title"),
      links: [
        { href: "#", label: t("legal.privacy") },
        { href: "#", label: t("legal.terms") },
        { href: "#", label: t("legal.cookies") },
      ],
    },
  ];

  return (
    <footer ref={ref} className="relative bg-gradient-to-b from-background to-secondary/30 border-t border-border/50">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="col-span-2"
          >
            <Link href="/" className="inline-block mb-5">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-primary">Sna</span>
                <span className="text-foreground">qy</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-xs">
              {t("description")}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 + sectionIndex * 0.1 }}
            >
              <h3 className="font-semibold text-foreground mb-4 text-sm">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            {t("copyright", { year: currentYear })}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            {t("madeWith")}{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
