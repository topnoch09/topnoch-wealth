"use client";

import { useEffect, useRef } from "react";

const SURVEY_ID = "9wb4tMSjAbvXoLn0pSSe";

/**
 * GoHighLevel "Funding Assessment 2026" survey embed.
 *
 * After a non-qualified submit, GHL swaps the form for a short thank-you
 * message centered inside the (still tall) iframe, so the visitor is left
 * looking at blank white space. GHL's form_embed.js shrinks the iframe when
 * that happens; we watch for that big drop in height and scroll the iframe's
 * center (where the message sits) into view.
 */
export default function AssessmentEmbed() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || typeof ResizeObserver === "undefined") return;

    let lastHeight = 0;
    const observer = new ResizeObserver(() => {
      const height = frame.offsetHeight;
      // Small changes (validation errors appearing/clearing) are ignored.
      if (lastHeight && height < lastHeight - 150) {
        frame.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      lastHeight = height;
    });

    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <iframe
      ref={frameRef}
      src={`https://api.leadconnectorhq.com/widget/survey/${SURVEY_ID}`}
      id={SURVEY_ID}
      title="Funding Assessment"
      scrolling="no"
      style={{ border: "none", width: "100%", minHeight: "1700px" }}
    />
  );
}
