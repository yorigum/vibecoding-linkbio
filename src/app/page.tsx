import { redirect } from "next/navigation";

export default function RootPage() {
  // Automatically redirect / to /en for the best primary SEO experience
  // Crawlers will follow this 307/308 redirect and index the localized site.
  redirect("/en");
}
