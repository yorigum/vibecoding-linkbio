import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-page text-primary p-6 text-center select-none">
      {/* Background Orbs to match the theme */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[120px] opacity-40 mix-blend-multiply dark:mix-blend-screen"
          style={{ background: "radial-gradient(circle, rgba(0,113,227,0.3), transparent 70%)" }}
        />
      </div>

      <header className="max-w-md">
        <h1 className="text-8xl font-black tracking-tight text-link/40 sm:text-9xl mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
          Page Not Found
        </h2>
        <p className="mt-4 text-base text-secondary leading-relaxed">
          The link you followed may be broken or the page may have been moved.
        </p>
      </header>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/en"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-link px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-link/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="/id"
          className="inline-flex items-center justify-center rounded-full border border-border/50 bg-card px-6 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
        >
          Kembali ke Beranda
        </Link>
      </div>

      <footer className="mt-20 border-t border-border/20 pt-8 w-full max-w-xs opacity-50">
        <p className="text-xs text-secondary tracking-widest uppercase">
          Yohanes Rizky Gumilir • Senior Android Developer
        </p>
      </footer>
    </div>
  );
}
