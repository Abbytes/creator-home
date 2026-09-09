import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-studio-border mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-studio-muted">
          Ab Creative World · portfolio-first creator studio.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/tip"
            className="text-xs text-studio-accent transition hover:text-studio-accent/80"
          >
            Tip the studio
          </Link>
          <p className="text-xs text-studio-muted/70">
            Built with Next.js · Content in /content
          </p>
        </div>
      </div>
    </footer>
  );
}
