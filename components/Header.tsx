import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-studio-border/80 bg-studio-bg/80 backdrop-blur-md sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight text-studio-text">
            Ab Creative
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-studio-muted group-hover:text-studio-accent transition-colors">
            World
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-studio-muted">
          <Link href="/" className="hover:text-studio-text transition-colors">
            Work
          </Link>
          <Link
            href="/#projects"
            className="hover:text-studio-text transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/tip"
            className="rounded-full border border-studio-accent/40 bg-studio-accent/10 px-3 py-1 text-studio-accent transition hover:bg-studio-accent/20 hover:text-studio-accent"
          >
            Tip
          </Link>
        </nav>
      </div>
    </header>
  );
}
