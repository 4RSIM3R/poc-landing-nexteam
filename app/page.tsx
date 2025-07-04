"use client";

import type React from "react";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Zap,
  DollarSign,
  Shield,
  Rocket,
  Star,
  ArrowRight,
  Calendar,
  Eye,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleOnHover = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

// Animated section component
function AnimatedSection({
  children,
  className = "",
  role,
  "aria-labelledby": ariaLabelledby,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  role?: string;
  "aria-labelledby"?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={fadeInUp}
      className={className}
      role={role}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </motion.div>
  );
}

export default function NexteamLanding() {
  return (
    <>
      {/* Additional SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Nexteam Teknologi Indonesia",
            "url": "https://nexteam.id",
            "description": "Expert SAAS development agency specializing in Laravel, Inertia.js, and Tailwind CSS. We deliver budget-friendly solutions in 2-3 weeks with AI-assisted programming.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://nexteam.id/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SAAS Development Services",
            "provider": {
              "@type": "Organization",
              "name": "Nexteam Teknologi Indonesia"
            },
            "description": "Transform your SAAS idea into reality in just 2-3 weeks with expert Laravel development and AI-assisted programming.",
            "serviceType": "Software Development",
            "areaServed": {
              "@type": "Country",
              "name": "Indonesia"
            },
            "offers": {
              "@type": "Offer",
              "description": "Budget-friendly SAAS development with 2-3 week delivery timeline",
              "priceCurrency": "IDR",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "Contact for quote",
                "priceCurrency": "IDR"
              }
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://nexteam.id"
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200"
          role="navigation"
          aria-label="Main navigation"
        >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
              <Image
                src="/nexteam-logo.png"
                alt="Nexteam Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <span className="text-xl font-bold text-slate-900">Nexteam</span>
          </motion.div>

          <motion.div variants={scaleOnHover} whileHover="hover" whileTap="tap">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
              asChild
            >
              <a 
                href="https://calendly.com/ilzam/project-discussion" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden" role="banner" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
                <Zap className="w-4 h-4 mr-2" />
                AI-Assisted Development
              </Badge>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 leading-tight"
            >
              Turn Your SAAS Idea Into Reality in Just{" "}
              <span className="text-blue-600">3 Weeks</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Expert Laravel developers with 5+ years experience and pre-built
              solutions for payments, multi-tenancy, and subscriptions. Skip the
              development headaches and launch faster.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                variants={scaleOnHover}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl text-lg"
                  asChild
                >
                  <a 
                    href="https://calendly.com/ilzam/project-discussion" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Get Your Free SAAS Consultation
                  </a>
                </Button>
              </motion.div>

              <motion.div
                variants={scaleOnHover}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 hover:border-blue-300 text-lg bg-transparent"
                >
                  <Eye className="mr-2 w-5 h-5" />
                  View Our Portfolio
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
      <AnimatedSection className="py-20 bg-white" role="region" aria-labelledby="value-propositions-heading">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              id="value-propositions-heading"
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4 text-slate-900"
            >
              Why Choose Nexteam for Your SAAS Development?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              We've perfected the art of rapid SAAS development without
              compromising quality
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">
                    Lightning Fast Development
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    3 week launch timeline with AI-assisted programming. Get to
                    market faster than your competition.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">
                    Budget-Friendly Solutions
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Proportional pricing that fits your budget, not enterprise
                    rates. Quality development at startup-friendly prices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">
                    Battle-Tested Foundation
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Pre-built multi-tenancy, payments, AI / LLM Integration and
                    subscription systems ready to deploy. Focus on your unique
                    features.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInLeft}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Everything You Need to Launch Your SAAS
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our proven tech stack and pre-built solutions mean you get
                enterprise-grade features without the enterprise timeline or
                budget.
              </p>

              <motion.div
                className="space-y-4"
                variants={staggerChildren}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  "5+ years of Laravel + Inertia.js + Tailwind CSS expertise",
                  "AI-assisted development for faster delivery",
                  "Multi-tenant architecture included",
                  "Payment gateway integration & Subscription management  ready",
                  "AI / LLM Integration",
                  "Focus on your unique features",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="font-mono text-sm text-green-400">
                  <div className="mb-2">{"// Your SAAS in 2-3 weeks"}</div>
                  <div className="text-blue-400">
                    {"composer create-project nexteam/saas-starter"}
                  </div>
                  <div className="text-gray-400 mt-2">
                    {"✓ Multi-tenancy configured"}
                  </div>
                  <div className="text-gray-400">
                    {"✓ Payment system integrated & Subscription management ready"}
                  </div>
                  <div className="text-gray-400">
                    {"✓ AI / LLM Integration"}
                  </div>
                  <div className="text-gray-400">
                    {"✓ AI-assisted features deployed"} 
                  </div>
                  <div className="text-green-400 mt-2">
                    {"🚀 Ready to launch!"}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Social Proof Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Success Metrics */}
          <motion.div
            className="text-center mb-16"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12 text-slate-900"
            >
              Trusted by Growing Businesses
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-3 gap-8 mb-16"
              variants={staggerChildren}
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  10+
                </div>
                <div className="text-slate-600 text-lg">
                  SAAS Applications Launched
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  2.5
                </div>
                <div className="text-slate-600 text-lg">
                  Average Week Delivery Time
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                  95%
                </div>
                <div className="text-slate-600 text-lg">
                  Client Satisfaction Rate
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">
                    "Nexteam delivered our multi-tenant SAAS platform in just 3
                    weeks. The quality exceeded our expectations and we launched
                    ahead of schedule."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold">JS</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        John Smith
                      </div>
                      <div className="text-sm text-slate-500">
                        CEO, TechStart Inc
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">
                    "The pre-built payment and subscription system saved us
                    months of development. Professional team with excellent
                    communication throughout."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold">MR</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Maria Rodriguez
                      </div>
                      <div className="text-sm text-slate-500">
                        Founder, SaasFlow
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">
                    "Budget-friendly pricing without compromising quality. They
                    understood our startup constraints and delivered exactly
                    what we needed."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold">DK</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        David Kim
                      </div>
                      <div className="text-sm text-slate-500">
                        CTO, InnovateLab
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="text-slate-500 mb-8">
              Trusted by innovative companies
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="transition-all duration-300"
                >
                  <Image
                    src={`/placeholder.svg?height=60&width=120&text=Client+${
                      i + 1
                    }`}
                    alt={`Client ${i + 1}`}
                    width={120}
                    height={60}
                    className="mx-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Ready to Launch Your SAAS in 3 Weeks?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto"
            >
              Get a free consultation and project timeline estimate. Let's turn
              your idea into a profitable SAAS business.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                variants={scaleOnHover}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100 shadow-xl text-lg font-semibold"
                  asChild
                >
                  <a 
                    href="https://calendly.com/ilzam/project-discussion" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Schedule Free Consultation
                  </a>
                </Button>
              </motion.div>

              <motion.div
                variants={scaleOnHover}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-700 text-lg bg-transparent"
                >
                  <Eye className="mr-2 w-5 h-5" />
                  View Our Portfolio
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <motion.footer
        className="bg-white text-slate-900 py-12 border-t border-slate-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Image
                    src="/nexteam-logo.png"
                    alt="Nexteam Logo"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-xl font-bold text-slate-900">
                  Nexteam
                </span>
              </div>
              <p className="text-slate-600 mb-4">
                Expert SAAS development with 5+ years of experience. Turn your
                ideas into reality in just 2-3 weeks.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    SAAS Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Laravel Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Multi-tenant Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    AI / LLM Integration
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:contact@nexteam.id"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-600">
                <p>Pasuruan, Indonesia</p>
                <p>contact@nexteam.id</p>
                <p>+62-812-1714-1850</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-8 pt-8 text-center text-slate-600">
            <p>
              &copy; {new Date().getFullYear()} Nexteam Teknologi Indonesia. All
              rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
    </>
  );
}
