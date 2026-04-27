"use client";

import { useEffect } from "react";

type Props = {
  slot?: string;
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function AdSlot({ slot, className = "" }: Props) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (!client || !slot) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // ignore adsense render error
    }
  }, [client, slot]);

  if (!client || !slot) return null;

  return (
    <div className={`my-6 flex justify-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}