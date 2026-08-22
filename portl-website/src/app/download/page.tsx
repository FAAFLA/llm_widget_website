export default function DownloadPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07030d] px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-purple-600/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[140px]" />
      </div>

      <section className="relative z-10 w-full max-w-3xl text-center">
        <a
          href="/"
          className="mb-10 inline-block text-sm text-white/50 transition hover:text-white"
        >
          ← Back to Portal
        </a>

        <h1 className="text-4xl font-bold md:text-6xl">Download Portal</h1>
        <p className="mx-auto mt-4 max-w-xl text-white/60">
          Choose your operating system to get started.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <a
            href="https://github.com/AdamLashnuk/Portal/releases/download/v1.0.0/Portal-Setup.exe"
            className="rounded-2xl border border-purple-400/20 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/10"
          >
            <h2 className="text-2xl font-semibold text-purple-100">Windows</h2>
            <p className="mt-2 text-sm text-white/50">Download Portal for Windows</p>
            <div className="mt-6 rounded-xl bg-purple-500 px-5 py-3 font-semibold shadow-lg shadow-purple-500/25">
              Download Windows
            </div>
          </a>

          <a
            href="https://github.com/AdamLashnuk/Portal-MacOS/releases/download/v0.1.0/Portal-macOS-Apple-Silicon.dmg"
            className="rounded-2xl border border-purple-400/20 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/10"
          >
            <h2 className="text-2xl font-semibold text-purple-100">macOS</h2>
            <p className="mt-2 text-sm text-white/50">Download Portal for Mac</p>
            <div className="mt-6 rounded-xl bg-purple-500 px-5 py-3 font-semibold shadow-lg shadow-purple-500/25">
              Download Mac
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}