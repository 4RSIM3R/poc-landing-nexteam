import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Nexteam - Expert SAAS Development in 2-3 Weeks | Laravel & AI Solutions",
    template: "%s | Nexteam Teknologi Indonesia",
  },
  description:
    "Transform your SAAS idea into reality in just 2-3 weeks with Nexteam. Expert Laravel development with AI-assisted programming, multi-tenancy, payments & subscriptions. Budget-friendly solutions with 5+ years experience.",
  keywords: [
    "custom SAAS development",
    "Laravel SAAS development",
    "rapid SAAS development",
    "affordable SAAS development",
    "multi-tenant SAAS platform",
    "SAAS development agency",
    "Laravel development services",
    "custom software development",
    "web application development",
    "startup SAAS development",
    "MVP development services",
    "subscription management system",
    "payment integration services",
    "AI-powered development",
    "full-stack development",
    "Inertia.js development",
    "Tailwind CSS development",
    "scalable web applications",
    "enterprise SAAS solutions",
    "cloud-based applications",
    "API development services",
    "database optimization",
    "real-time applications",
    "microservices development",
    "headless development",
    "progressive web apps",
    "mobile-first development",
    "responsive web design",
    "e-commerce development",
    "fintech software development",
    "healthcare SAAS development",
    "education platform development",
    "CRM development services",
    "ERP system development",
    "inventory management system",
    "project management software",
    "business automation tools",
    "workflow management system",
    "data analytics platform",
    "reporting dashboard development",
    "user authentication system",
    "role-based access control",
    "security compliance development",
    "GDPR compliant software",
    "PCI DSS development",
    "cloud migration services",
    "legacy system modernization",
    "performance optimization",
    "load testing services",
    "technical consultation",
    "software architecture design",
  ],
  authors: [{ name: "Nexteam Teknologi Indonesia" }],
  creator: "Nexteam Teknologi Indonesia",
  publisher: "Nexteam Teknologi Indonesia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nexteam.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexteam.id",
    siteName: "Nexteam Teknologi Indonesia",
    title:
      "Nexteam - Expert SAAS Development in 2-3 Weeks | Laravel & AI Solutions",
    description:
      "Transform your SAAS idea into reality in just 2-3 weeks with Nexteam. Expert Laravel development with AI-assisted programming, multi-tenancy, payments & subscriptions.",
    images: [
      {
        url: "/nexteam-logo.png",
        width: 1200,
        height: 630,
        alt: "Nexteam - Expert SAAS Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexteam - Expert SAAS Development in 2-3 Weeks",
    description:
      "Transform your SAAS idea into reality in just 2-3 weeks with Nexteam. Expert Laravel development with AI-assisted programming.",
    images: ["/nexteam-logo.png"],
    creator: "@nexteam_id",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Software Development Agency",
  other: {
    "geo.region": "ID-JK",
    "geo.placename": "Jakarta",
    "geo.position": "-6.2088;106.8456",
    ICBM: "-6.2088, 106.8456",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/nexteam-logo.png" />
        <link rel="apple-touch-icon" href="/nexteam-logo.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* Inter font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Comprehensive Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://nexteam.id/#organization",
                  name: "Nexteam Teknologi Indonesia",
                  url: "https://nexteam.id",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://nexteam.id/nexteam-logo.png",
                    width: 1200,
                    height: 630,
                  },
                  description:
                    "Expert SAAS development agency specializing in Laravel, Inertia.js, and Tailwind CSS. We deliver budget-friendly solutions in 2-3 weeks with AI-assisted programming.",
                  foundingDate: "2020",
                  numberOfEmployees: "5-10",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Jakarta",
                    addressCountry: "ID",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    email: "contaxt@nexteam.id",
                    availableLanguage: ["English", "Indonesian"],
                  },
                  sameAs: ["https://www.linkedin.com/company/105036734"],
                  serviceArea: {
                    "@type": "Country",
                    name: "Indonesia",
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "SAAS Development Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "SAAS Development",
                          description:
                            "Custom SAAS application development with Laravel and Inertia.js",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Multi-tenant Architecture",
                          description:
                            "Built-in multi-tenant solutions for scalable applications",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Payment Integration",
                          description:
                            "Stripe, PayPal, and local payment gateway integration",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Subscription Management",
                          description:
                            "Complete subscription lifecycle management systems",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://nexteam.id/",
                  url: "https://nexteam.id",
                  name: "Nexteam Teknologi Indonesia",
                  description:
                    "Expert SAAS development agency specializing in Laravel, Inertia.js, and Tailwind CSS",
                  publisher: {
                    "@id": "https://nexteam.id/",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://nexteam.id/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Service",
                  "@id": "https://nexteam.id/",
                  name: "SAAS Development Services",
                  description:
                    "Transform your SAAS idea into reality in just 2-3 weeks with expert Laravel development and AI-assisted programming.",
                  provider: {
                    "@id": "https://nexteam.id/",
                  },
                  serviceType: "Software Development",
                  areaServed: {
                    "@type": "Country",
                    name: "Indonesia",
                  },
                  offers: {
                    "@type": "Offer",
                    description:
                      "Budget-friendly SAAS development with 2-3 week delivery timeline",
                    priceCurrency: "IDR",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "Contact for quote",
                      priceCurrency: "IDR",
                    },
                  },
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://nexteam.id/#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "How long does it take to develop a SAAS application?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "We deliver standard SAAS applications in 2-3 weeks using our pre-built generic solutions and AI-assisted programming approach.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What technologies do you use?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "We specialize in Laravel PHP framework, Inertia.js for frontend, Tailwind CSS for styling, and integrate AI tools like Cursor for faster development.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Do you provide multi-tenant solutions?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, we have pre-built multi-tenant architecture solutions that can be quickly implemented in your SAAS application.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
