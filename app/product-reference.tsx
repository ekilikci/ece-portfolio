"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("portfolio-theme", callback);
  return () => window.removeEventListener("portfolio-theme", callback);
}

export default function ProductReference() {
  const theme = useSyncExternalStore(subscribe,
    () => document.documentElement.dataset.theme || "light", () => "light");
  return <figure className="product-reference">
    <figcaption><p className="eyebrow">FROM PRODUCT DECISIONS TO INTERFACE</p><h4>A little attitude.<br />A deliberate daily loop.</h4><p>The approved design reference that guided Later, Nope. Explore the Home, Alarm, Proof and Verified screens.</p><dl><dt>Cobalt creates emphasis</dt><dd>The alarm and key messages use contrast to draw attention.</dd><dt>Acid green marks progress</dt><dd>Verified breaks get a distinct visual signal.</dd><dt>Short copy sets the rhythm</dt><dd>Direct prompts move the interaction from a reminder to an action.</dd></dl><span className="status">Product design reference · interactive mockup</span><p className="reference-note">Illustrative states, not live app data. The proof screen is a visual reference and does not access your camera.</p></figcaption>
    <iframe title="Later, Nope. approved interactive product design reference" src={`/design/later-nope.html?theme=${theme}`} sandbox="allow-scripts" loading="lazy" className="product-frame" />
  </figure>;
}
