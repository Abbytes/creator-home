"use client";

import { useState } from "react";

const PRESETS = [5, 10, 25, 50];

export function PaypalTipForm({
  hostedButtonId,
}: {
  hostedButtonId: string;
}) {
  const [amount, setAmount] = useState(5);
  const [custom, setCustom] = useState("");

  const value = Math.max(1, Number(custom || amount) || 5);

  return (
    <form
      action="https://www.paypal.com/donate"
      method="post"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4"
    >
      <input type="hidden" name="hosted_button_id" value={hostedButtonId} />
      <input type="hidden" name="currency_code" value="CAD" />
      <input type="hidden" name="amount" value={String(value)} />
      <p className="mb-2 text-xs font-medium text-studio-text">Amount (CAD)</p>
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => {
              setAmount(n);
              setCustom("");
            }}
            className={`min-h-11 rounded-full px-4 text-sm font-medium ${
              !custom && amount === n
                ? "bg-studio-accent text-studio-bg"
                : "border border-studio-border bg-studio-bg text-studio-text"
            }`}
          >
            ${n}
          </button>
        ))}
      </div>
      <label className="mt-3 block">
        <span className="sr-only">Custom amount in CAD</span>
        <input
          type="number"
          min={1}
          step={1}
          inputMode="numeric"
          placeholder="Custom amount"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          className="mt-1 w-full rounded-xl border border-studio-border bg-studio-bg px-3 py-2.5 text-sm text-studio-text"
        />
      </label>
      <p className="mt-2 text-xs text-studio-muted">
        PayPal declines $0. If it still shows $0, tap the amount and type {value}{" "}
        before you pay.
      </p>
      <button
        type="submit"
        className="relative z-20 mt-4 flex min-h-12 w-full items-center justify-center rounded-xl bg-[#0070ba] px-4 py-3 text-sm font-semibold text-white active:opacity-80"
      >
        Tip ${value} with PayPal
      </button>
    </form>
  );
}
