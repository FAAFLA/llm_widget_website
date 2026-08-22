import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help | Portal",
  description: "Setup and troubleshooting guides for Portal on macOS and Windows.",
};

const guides = [
  {
    title: "macOS Help Guide",
    description:
      "Add your macOS installation, setup, and troubleshooting instructions here.",
  },
  {
    title: "Windows Help Guide",
    description:
      "Add your Windows installation, setup, and troubleshooting instructions here.",
  },
];

export default function HelpPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07030d] px-6 py-24 text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-purple-600/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[140px]" />
      </div>

      <section className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <Link
          href="/"
          className="mb-10 inline-block text-sm text-white/50 transition hover:text-white"
        >
          ← Back to Portal
        </Link>

        <h1 className="text-4xl font-bold md:text-6xl">Help Section</h1>
        <p className="mx-auto mt-4 max-w-xl text-white/60">
          Choose your operating system to find Portal setup and troubleshooting help.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <article
              key={guide.title}
              className="rounded-2xl border border-purple-400/20 bg-white/[0.04] p-8 text-left"
            >
              <h2 className="text-2xl font-semibold text-purple-100">
                {guide.title}
              </h2>
              <p className="mt-3 text-white/55">{guide.description}</p>
              <div className="mt-8 rounded-xl border border-dashed border-purple-400/30 bg-purple-500/[0.06] px-5 py-8 text-center text-sm text-purple-200/70">
                Guide content coming soon
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
