"use client";

import { Header, Footer } from "@/components/layout";
import { useTranslations } from "next-intl";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert(t("form.success"));
  };

  const faqs = [
    {
      question: t("faq.items.0.question"),
      answer: t("faq.items.0.answer"),
    },
    {
      question: t("faq.items.1.question"),
      answer: t("faq.items.1.answer"),
    },
    {
      question: t("faq.items.2.question"),
      answer: t("faq.items.2.answer"),
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

        {/* Contact Form & Info */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">
                        Envoyez-nous un message
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Nous vous répondrons dans les plus brefs délais
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          {t("form.name")}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder={t("form.namePlaceholder")}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          {t("form.email")}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={t("form.emailPlaceholder")}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        {t("form.subject")}
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder={t("form.subjectPlaceholder")}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        {t("form.message")}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t("form.messagePlaceholder")}
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          {t("form.submit")}
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Info & FAQ */}
              <div className="space-y-8">
                {/* Contact Info */}
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-xl font-semibold text-foreground mb-6">
                      Informations de contact
                    </h2>
                    <div className="space-y-4">
                      <a
                        href={`mailto:${t("info.email")}`}
                        className="flex items-center gap-4 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium text-foreground">
                            {t("info.email")}
                          </p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    {t("faq.title")}
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-foreground mb-2">
                            {faq.question}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {faq.answer}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
