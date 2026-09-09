import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-studio-border/80 bg-studio-bg/80 backdrop-blur-md sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight text-studio-text">
            Adam
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-studio-muted group-hover:text-studio-accent transition-colors">
            Studio
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
        </nav>
      </div>
    </header>
  );
}
