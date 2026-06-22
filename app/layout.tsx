import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://heychetan.me";
const ogImage = `${siteUrl}/og-preview.png`;
const description =
  "I'm a Full Stack Developer passionate about building web applications, exploring modern technologies, and learning in public.";

export const metadata: Metadata = {
  title: "Chetan Yadav - A Full Stack Developer",
  description,
  keywords: [
    "Chetan Yadav",
    "Portfolio",
    "Backend Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Computer Science Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Indore",
  ],
  authors: [{ name: "Chetan Yadav" }],
  alternates: {
    canonical: `${siteUrl}/`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Chetan Yadav - A Full Stack Developer",
    description,
    url: `${siteUrl}/`,
    siteName: "Chetan Yadav - A Full Stack Developer",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Chetan Yadav - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chetan Yadav - A Full Stack Developer",
    description,
    creator: "@Chetany0724",
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color-light": "#ffffff",
    "theme-color-dark": "#18181B",
  },
};

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": `${siteUrl}/#chetan-yadav`,
  name: "Chetan Yadav",
  gender: "male",
  url: siteUrl,
  image: ogImage,
  jobTitle: "Full Stack Developer",
  description,
  sameAs: [
    "https://twitter.com/Chetany0724",
    "https://github.com/chetany0724",
    "https://www.linkedin.com/in/chetan-yadav0724/",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "IPS Academy Indore",
  },
  knowsAbout: [
    "React",
    "JavaScript",
    "Next.js",
    "Full Stack Development",
    "C++",
    "Data Structures and Algorithms",
    "SEO",
    "CSS",
    "Tailwind",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452001",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#18181B" media="(prefers-color-scheme: dark)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>

        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="eebe6b9e-b691-45f1-848b-1fc1f9b08111"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
