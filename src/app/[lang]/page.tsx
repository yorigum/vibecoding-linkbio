import { InteractivePage } from "@/components/layout/InteractivePage";
import allPageData from "@/data/pageContent.json";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const data = (allPageData as any)[lang] || allPageData.en;

  return {
    title: {
      default: `${data.meta.name} | ${data.hero.headline.split("\n")[0]}`,
      template: `%s | ${data.meta.name}`,
    },
    description: data.hero.subtitle,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "en": "/en",
        "id": "/id",
      },
    },
    openGraph: {
      title: `${data.meta.name} | ${data.hero.headline.split("\n")[0]}`,
      description: data.hero.subtitle,
      url: `https://yorigum.xyz/${lang}`,
    }
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validatedLang = (lang === "id" ? "id" : "en") as "en" | "id";
  const data = (allPageData as any)[validatedLang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@id": `https://yorigum.xyz/${validatedLang}/#person`,
    "@type": "Person",
    "name": data.meta.name,
    "url": data.meta.website,
    "email": data.meta.email,
    "jobTitle": validatedLang === "en" ? "Senior Android Developer" : "Pengembang Android Senior",
    "sameAs": [
      data.meta.linkedin,
      "https://github.com/yorigum",
      "https://medium.com/@yohanesrizky",
      "https://www.instagram.com/yohanesrizky/"
    ],
    "description": data.hero.subtitle,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta",
      "addressCountry": "ID"
    },
    "knowsAbout": [
      "Android Development",
      "Kotlin",
      "Jetpack Compose",
      "Mobile Architecture",
      "Clean Architecture",
      "Music Production",
      "Sound Design"
    ]
  };

  const profilePageLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@id": `https://yorigum.xyz/${validatedLang}/#person`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageLd) }}
      />
      <InteractivePage initialLang={validatedLang} />
    </>
  );
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "id" }];
}
