"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home", match: (p: string) => p === "/" },
  {
    href: "/work",
    label: "Work",
    match: (p: string) => p.startsWith("/work") || p.startsWith("/projects"),
  },
  { href: "/tip", label: "Tip", match: (p: string) => p.startsWith("/tip") },
  {
    href: "/projects/spartas-revenge",
    label: "Sparta’s Revenge",
    match: (p: string) => p.includes("spartas-revenge"),
  },
];

export function Header() {
  const pathname = usePathname() || "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-studio-bg/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-3 sm:px-6">
        <Link href="/" className="group flex shrink-0 items-baseline gap-1.5">
          <span className="text-base font-semibold tracking-tight text-studio-text sm:text-lg">
            Ab Creative
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.18em] text-studio-muted transition-colors group-hover:text-studio-accent sm:inline sm:text-xs">
            World
          </span>
        </Link>

        <nav
          className="flex max-w-[72%] items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-black/35 p-1 sm:max-w-none sm:gap-1.5"
          aria-label="Primary"
        >
          {tabs.map((tab) => {
            const active = tab.match(pathname);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={[
                  "whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition sm:px-4 sm:text-sm",
                  active
                    ? "bg-studio-accent text-studio-bg shadow-glow"
                    : "text-white/80 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
