import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#08080a]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Portal
        </Link>

        <Link
          href="/help"
          className="text-sm text-white/60 transition hover:text-white"
        >
          Help Section
        </Link>

        <Link
          href="/download"
          className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
        >
          Download
        </Link>
      </div>
    </nav>
  );
}
