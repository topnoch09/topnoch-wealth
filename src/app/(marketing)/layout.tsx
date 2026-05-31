import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Minimal header for landing pages — logo only, no nav */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="Topnoch Enterprises LLC"
              className="w-11 h-11 object-contain drop-shadow-md"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg text-white tracking-tight">
                Topnoch
              </span>
              <span className="text-gold text-xs font-semibold tracking-wide">
                Enterprises LLC
              </span>
            </div>
          </Link>
          <Link
            href="/"
            className="text-white/60 text-sm hover:text-white transition-colors"
          >
            ← Back to site
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
