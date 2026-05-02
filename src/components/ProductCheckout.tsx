"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export function CheckoutButton({
  product,
  children,
  className,
}: {
  product: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product }),
      });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch {
      setLoading(false);
    }
  }

  return (
    <button onClick={handleClick} disabled={loading} className={className}>
      {loading ? <Loader2 size={20} className="animate-spin mx-auto" /> : children}
    </button>
  );
}
