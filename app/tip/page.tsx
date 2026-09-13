import type { Metadata } from "next";
import Link from "next/link";
import { creator } from "@/lib/creator";
import { DISCORD_INVITE } from "@/lib/discord";
import { CopyButton } from "@/components/CopyButton";
import { TipReturnSting } from "@/components/TipReturnSting";

export const metadata: Metadata = {
  title: "Tip",
  description: "Support the next scored trailer — Interac or card.",
  openGraph: {
    title: "Tip · Ab Creative World",
    description: "Support the next scored trailer — Interac or card.",
    url: "https://abbytes.github.io/tip/",
    images: [
      { url: "/og-tip.png", width: 1200, height: 630, alt: "Tip Ab Creative World" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tip · Ab Creative World",
    description: "Support the next scored trailer — Interac or card.",
    images: ["/og-tip.png"],
  },
};

export default function TipPage() {
  const hasInterac = Boolean(creator.interacEmail);

  return (
    <div className="mx-auto flex max-w-lg flex-col px-4 py-10 sm:px-6 sm:py-14">
      <TipReturnSting />
      <Link
        href="/"
        className="mb-6 text-sm text-studio-muted transition hover:text-studio-accent"
      >
        ← Back to studio
      </Link>

      <header className="mb-8 text-center">
        <div
          className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-studio-border bg-studio-panel text-2xl font-semibold tracking-tight text-studio-accent shadow-[0_0_40px_-12px_rgba(232,168,124,0.45)]"
          aria-hidden
        >
          {creator.avatarInitials}
        </div>
        <p className="text-xs uppercase tracking-[0.22em] text-studio-muted">
          Tip page · Canada
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {creator.name}
        </h1>
        <p className="mt-1 text-sm text-studio-muted">{creator.handle}</p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-studio-muted">
          {creator.tagline}
        </p>
        <p className="mx-auto mt-2 max-w-sm text-sm font-medium text-studio-accent/90">
          Support the studio — Interac or card.
        </p>
      </header>

      <section
        className="mb-6 rounded-2xl border border-studio-border bg-studio-panel/90 p-5 shadow-lg shadow-black/20"
        aria-labelledby="fund-heading"
      >
        <p className="text-xs uppercase tracking-[0.18em] text-studio-muted">
          Why tip
        </p>
        <h2
          id="fund-heading"
          className="mt-2 text-lg font-semibold tracking-tight text-studio-text"
        >
          Tips keep Ab Creative World growing
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-studio-muted">
          Games, scored trailers, music, clips — whatever’s next.
        </p>
        <a
          href={DISCORD_INVITE}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex min-h-11 w-full items-center justify-center rounded-xl border border-studio-border px-4 py-2.5 text-sm font-medium text-studio-text transition hover:border-studio-accent/50 hover:text-studio-accent"
        >
          Join Discord
        </a>
      </section>

      <section
        className="mb-5 rounded-2xl border border-studio-accent/25 bg-studio-panel p-5 shadow-lg shadow-black/25"
        aria-labelledby="card-heading"
      >
        <h2
          id="card-heading"
          className="text-base font-semibold tracking-tight text-studio-text"
        >
          Card / international
        </h2>
        <p className="mt-1 text-xs text-studio-muted">
          Visa, Mastercard, Apple Pay, and PayPal.
        </p>
        <a
          href={creator.stripePaymentLink}
          className="relative z-20 mt-4 flex min-h-12 w-full items-center justify-center rounded-xl bg-studio-text px-4 py-3 text-sm font-semibold text-studio-bg active:opacity-80"
        >
          Tip with card
        </a>
        <a
          href={creator.paypalDonateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-20 mt-3 flex min-h-12 w-full items-center justify-center rounded-xl bg-[#0070ba] px-4 py-3 text-sm font-semibold text-white active:opacity-80"
        >
          Tip with PayPal
        </a>
      </section>

      <section
        className="mb-8 rounded-2xl border border-studio-border bg-studio-panel/60 p-5"
        aria-labelledby="interac-heading"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-studio-accent/15 text-sm font-bold text-studio-accent">
            $
          </span>
          <div>
            <h2
              id="interac-heading"
              className="text-base font-semibold tracking-tight"
            >
              Interac e-Transfer
            </h2>
            <p className="text-xs text-studio-muted">
              Canada · address stays private on this page
            </p>
          </div>
        </div>

        <ol className="space-y-4 text-sm">
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-studio-border bg-studio-bg text-xs font-medium text-studio-muted">
              1
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-studio-text">
                Copy the Interac tip address
              </p>
              {hasInterac ? (
                <div className="mt-2 flex items-stretch gap-2">
                  <div className="flex min-w-0 flex-1 items-center rounded-lg border border-studio-border bg-studio-bg px-3 py-2.5 text-sm text-studio-muted">
                    Hidden · tap Copy → paste in your bank app
                  </div>
                  <CopyButton
                    value={creator.interacEmail}
                    ariaLabel="Copy Interac tip address"
                    playStingOnCopy
                  />
                </div>
              ) : (
                <p className="mt-2 text-xs text-studio-muted">
                  Set INTERAC_TIP_EMAIL in .env.local to enable tips.
                </p>
              )}
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-studio-border bg-studio-bg text-xs font-medium text-studio-muted">
              2
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-studio-text">
                Put this in the message
              </p>
              <CopyRow
                value={creator.interacMessageHint}
                label="Suggested message"
              />
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-studio-border bg-studio-bg text-xs font-medium text-studio-muted">
              3
            </span>
            <div>
              <p className="font-medium text-studio-text">Any amount helps</p>
              <p className="mt-1 text-xs leading-relaxed text-studio-muted">
                Open your bank app → Interac e-Transfer → paste address → send.
                No tip cap.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <footer className="mt-auto border-t border-studio-border/60 pt-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.18em] text-studio-muted">
          Ab Creative World · private tip page
        </p>
      </footer>
    </div>
  );
}

function CopyRow({ value, label }: { value: string; label: string }) {
  return (
    <div className="mt-2 flex items-stretch gap-2">
      <code
        className="block min-w-0 flex-1 truncate rounded-lg border border-studio-border bg-studio-bg px-3 py-2.5 font-mono text-sm text-studio-accent"
        title={value}
      >
        {value}
      </code>
      <CopyButton value={value} ariaLabel={`Copy ${label}`} />
    </div>
  );
}
