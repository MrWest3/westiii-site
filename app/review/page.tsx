import Image from "next/image";
import ReviewForm from "../components/ReviewForm";

export const metadata = {
  title: "Leave a Review — David West III",
  description: "Share your experience working with David West III.",
};

export default function ReviewPage() {
  return (
    <main className="min-h-screen bg-[var(--ink)] flex flex-col">

      {/* Minimal header */}
      <header className="px-6 py-6 flex items-center justify-between max-w-2xl mx-auto w-full">
        <a href="/" aria-label="Back to home">
          <Image
            src="/logo.png"
            alt="West III"
            width={72}
            height={36}
            className="object-contain brightness-0 invert"
            priority
          />
        </a>
        <a
          href="/"
          className="text-white/40 text-sm hover:text-white/80 transition-colors duration-200"
        >
          ← Back to site
        </a>
      </header>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-3">
              Leave a Review
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
              How was it working<br />with me?
            </h1>
            <p className="text-white/50 text-sm">
              Honest feedback helps me grow. Your words may appear on the site.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
            <ReviewForm dark={true} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-6 text-center">
        <p className="text-white/20 text-xs">
          &copy; {new Date().getFullYear()} Studio West Creatives LLC
        </p>
      </footer>

    </main>
  );
}
