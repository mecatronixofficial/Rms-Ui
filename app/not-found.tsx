import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-32 text-center">
      <span className="eyebrow">404 Error</span>
      <h1 className="mt-4 font-display text-4xl font-bold text-forest-950 md:text-6xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-base text-forest-600">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-leaf-700"
      >
        <ArrowLeft size={16} /> Back to Home
      </Link>
    </div>
  );
}

