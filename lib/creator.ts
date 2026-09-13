/**
 * Ab Creative World tip page config.
 * Interac address comes from env (INTERAC_TIP_EMAIL) — never commit the real address.
 */
export type CreatorConfig = {
  name: string;
  handle: string;
  tagline: string;
  avatarInitials: string;
  goalLabel: string;
  goalRaised: number;
  goalTarget: number;
  currency: "CAD";
  /** Loaded from INTERAC_TIP_EMAIL — never render as visible text */
  interacEmail: string;
  interacPhone?: string;
  interacMessageHint: string;
  stripePaymentLink: string;
  paypalDonateLink: string;
  hideInteracAddress: boolean;
};

export const creator: CreatorConfig = {
  name: "Ab Creative World",
  handle: "@abcreativeworld",
  tagline: "Tips keep the creative work going — any amount helps",
  avatarInitials: "AB",
  goalLabel: "Keep creating",
  goalRaised: 1,
  goalTarget: 200,
  currency: "CAD",
  interacEmail: process.env.INTERAC_TIP_EMAIL?.trim() || "",
  interacPhone: undefined,
  interacMessageHint: "Tip for Ab Creative World",
  stripePaymentLink:
    process.env.STRIPE_PAYMENT_LINK?.trim() ||
    "https://donate.stripe.com/5kQeVfbgPamwftS8xgfQI00",
  paypalDonateLink:
    process.env.PAYPAL_DONATE_LINK?.trim() ||
    "https://www.paypal.com/donate/?hosted_button_id=PWUAMSW6FG74A",
  hideInteracAddress: true,
};

export function goalPercent(c: CreatorConfig = creator): number {
  if (c.goalTarget <= 0) return 0;
  return Math.min(100, Math.round((c.goalRaised / c.goalTarget) * 100));
}

export function formatCad(amount: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(amount);
}
