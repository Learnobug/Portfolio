import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

const BASE_URL = "https://gunjanaggarwal.dev";

export const viewport: Viewport = {
  themeColor: "#111316",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Gunjan Aggarwal | Full Stack Software Engineer",
    template: "%s | Gunjan Aggarwal",
  },
  description:
    "Full-stack software engineer specialising in MERN, Next.js, Node.js, and scalable backend systems. Google SWE Intern · LeetCode Knight · Delhi, India.",
  keywords: [
    "Gunjan Aggarwal",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js Developer",
    "Node.js",
    "Software Engineer",
    "Google Intern",
    "React Developer",
    "Backend Engineer",
    "Delhi India",
  ],
  authors: [{ name: "Gunjan Aggarwal", url: BASE_URL }],
  creator: "Gunjan Aggarwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Gunjan Aggarwal",
    title: "Gunjan Aggarwal | Full Stack Software Engineer",
    description:
      "Full-stack engineer specialising in MERN, Next.js, Node.js, and scalable backend systems. Google SWE Intern · LeetCode Knight.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gunjan Aggarwal — Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gunjan Aggarwal | Full Stack Software Engineer",
    description:
      "Full-stack engineer — MERN · Next.js · Node.js · Google SWE Intern · LeetCode Knight.",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gunjan Aggarwal",
  url: BASE_URL,
  email: "aggarwalgunjan597@gmail.com",
  jobTitle: "Full Stack Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Radiant Horizon Hospitality",
  },
  alumniOf: {
    "@type": "Organization",
    name: "Google",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/Learnobug",
    "https://www.linkedin.com/in/gunjan-aggarwal-066a16256",
    "https://leetcode.com/u/lerno_breed/",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "AWS",
    "Linux",
    "Docker",
    "Kubernetes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${robotoMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
