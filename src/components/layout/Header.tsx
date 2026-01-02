"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { LanguageSelector } from "@/components/shared/LanguageSelector";

export function Header() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/features", label: t("features") },
    { href: "/pricing", label: t("pricing") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-18 md:h-20 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.span
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-2xl md:text-[1.65rem] font-bold tracking-tight"
          >
            <span className="text-primary">Sna</span>
            <span className="text-foreground">qy</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
            >
              <Link
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
              >
                {link.label}
                <span className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="hidden md:flex items-center gap-2"
        >
          <LanguageSelector />
          <div className="w-px h-6 bg-border/50 mx-1" />
          <Link
            href="#"
            className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("login")}
          </Link>
          <Button
            asChild
            className="rounded-xl px-5 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <Link href="#">{t("getStarted")}</Link>
          </Button>
        </motion.div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSelector />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-xl">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-0 bg-background/95 backdrop-blur-xl">
            <SheetTitle className="flex items-center gap-2 mb-10">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-primary">My</span>
                <span className="text-foreground">Food</span>
              </span>
            </SheetTitle>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-3 text-lg font-medium text-foreground rounded-xl transition-all hover:bg-secondary/50 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="border-t border-border/50 pt-6 mt-6 flex flex-col gap-3">
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center px-4 py-3 text-base font-medium text-muted-foreground rounded-xl transition-all hover:bg-secondary/50 hover:text-foreground"
                >
                  {t("login")}
                </Link>
                <Button asChild className="w-full rounded-xl py-6 shadow-soft">
                  <Link href="#" onClick={() => setIsOpen(false)}>
                    {t("getStarted")}
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
