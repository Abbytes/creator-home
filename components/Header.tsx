"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APEX_URL } from "@/lib/apex";

const tabs = [
  { href: "/", label: "Home", match: (p: string) => p === "/", kind: "tab" as const },
  {
    href: "/work",
    label: "Work",
    match: (p: string) => p.startsWith("/work") || p.startsWith("/projects"),
    kind: "tab" as const,
  },
  {
    href: "/projects/spartas-revenge",
    label: "Sparta’s Revenge",
    match: (p: string) => p.includes("spartas-revenge"),
    kind: "tab" as const,
  },
  {
    href: APEX_URL,
    label: "APEX",
    match: () => false,
    kind: "external" as const,
  },
  {
    href: "/aether/",
    label: "Aether",
    match: (p: string) => p.includes("aether"),
    kind: "aether" as const,
  },
  { href: "/tip", label: "Tip", match: (p: string) => p.startsWith("/tip"), kind: "tip" as const },
];

export function Header() {
  const pathname = usePathname() || "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-studio-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-3 sm:px-6">
        <Link href="/" className="group flex shrink-0 items-baseline gap-1.5">
          <span className="text-base font-semibold tracking-tight text-studio-text sm:text-lg">
            Ab Creative
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-studio-muted transition-colors group-hover:text-studio-accent sm:text-xs">
            World
          </span>
        </Link>

        <nav
          className="flex max-w-[75%] items-center gap-1 overflow-x-auto sm:max-w-none sm:gap-2"
          aria-label="Primary"
        >
          {tabs.map((tab) => {
            const active = tab.match(pathname);
            if (tab.kind === "tip") {
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={[
                    "whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm",
                    active
                      ? "border-studio-accent bg-studio-accent text-studio-bg shadow-glow"
                      : "border-studio-accent/50 bg-studio-accent/10 text-studio-accent hover:bg-studio-accent/20",
                  ].join(" ")}
                >
                  {tab.label}
                </Link>
              );
            }
            const className = [
              "whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition sm:px-4 sm:text-sm",
              active
                ? "bg-white/15 text-white"
                : "text-white/75 hover:bg-white/10 hover:text-white",
            ].join(" ");
            if (tab.kind === "external" || tab.kind === "aether") {
              return (
                <a
                  key={tab.href}
                  href={tab.href}
                  className={className}
                  style={{ touchAction: "manipulation" }}
                  {...(tab.kind === "external"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {tab.label}
                </a>
              );
            }
            return (
              <Link key={tab.href} href={tab.href} className={className}>
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
