import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CursorGlow } from "@/components/ui/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yorigum.xyz"),
  title: {
    default: "Yohanes Rizky Gumilir | Android Developer & Music Producer",
    template: "%s | Yohanes Rizky Gumilir",
  },
  description:
    "Android Developer specializing in Kotlin, Jetpack Compose, and Enterprise Mobile Architecture. 5+ years shipping high-performance apps. Passionate Music Producer based in Jakarta.",
  keywords: [
    "Yohanes Rizky Gumilir",
    "Android Developer",
    "Kotlin Specialist",
    "Jetpack Compose",
    "Mobile Architect",
    "Jakarta Developer",
    "Music Producer",
    "Creative Technologist",
  ],
  authors: [{ name: "Yohanes Rizky Gumilir", url: "https://yorigum.xyz" }],
  creator: "Yohanes Rizky Gumilir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yorigum.xyz",
    siteName: "Yohanes Rizky Gumilir",
    title: "Yohanes Rizky Gumilir | Android Developer",
    description:
      "Explore the portfolio of Yohanes Rizky Gumilir, an Android Developer and Music Producer specializing in scalable mobile architecture.",
    images: [
      {
        url: "/media/brand_yorigum.svg",
        width: 1200,
        height: 630,
        alt: "Yohanes Rizky Gumilir Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yohanes Rizky Gumilir | Android Developer",
    description: "Building scalable mobile experiences and resonant sound designs.",
    images: ["/media/brand_yorigum.svg"],
    creator: "@yorigum",
  },
  icons: {
    icon: [
      { url: "/media/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/media/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/media/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/media/favicon.ico",
    apple: [
      { url: "/media/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/media/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "id-ID": "/id",
    },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="theme-detection"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
