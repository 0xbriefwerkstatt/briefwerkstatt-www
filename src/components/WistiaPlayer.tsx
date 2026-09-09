"use client";

import { useEffect, useRef } from "react";

interface WistiaPlayerProps {
  mediaId: string;
  trackingPrefix?: string;
  className?: string;
}

let scriptLoaded = false;

export function WistiaPlayer({
  mediaId,
  trackingPrefix = "video-player",
  className = "",
}: WistiaPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackingAttached = useRef(false);

  // Load Wistia E-v1.js script once
  useEffect(() => {
    if (scriptLoaded) return;
    const existing = document.querySelector(
      'script[src*="fast.wistia.com/assets/external/E-v1.js"]'
    );
    if (existing) {
      scriptLoaded = true;
      return;
    }
    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script.async = true;
    document.head.appendChild(script);
    scriptLoaded = true;
  }, []);

  // Set up tracking via Wistia JS API
  useEffect(() => {
    if (trackingAttached.current) return;
    trackingAttached.current = true;

    const win = window as any;
    win._wq = win._wq || [];
    win._wq.push({
      id: mediaId,
      onReady: (video: any) => {
        let lastPercent = 0;

        video.bind("percentwatchedchanged", (percent: number) => {
          // 25% watched
          if (percent >= 0.25 && lastPercent < 0.25) {
            win.dataLayer?.push({
              event: `${trackingPrefix}--on-25--hero`,
            });
            if (typeof win.umami !== "undefined" && win.umami !== null) {
              win.umami.track(`${trackingPrefix}--on-25--hero`);
            }
          }

          // 75% watched
          if (percent >= 0.75 && lastPercent < 0.75) {
            win.dataLayer?.push({
              event: `${trackingPrefix}--on-75--hero`,
            });
            if (typeof win.umami !== "undefined" && win.umami !== null) {
              win.umami.track(`${trackingPrefix}--on-75--hero`);
            }
          }

          lastPercent = percent;
        });
      },
    });
  }, [mediaId, trackingPrefix]);

  return (
    <div className={className} ref={containerRef}>
      <div
        className="wistia_responsive_padding"
        style={{ padding: "56.25% 0 0 0", position: "relative" }}
      >
        <div
          className="wistia_responsive_wrapper"
          style={{
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <div
            className={`wistia_embed wistia_async_${mediaId} seo=true videoFoam=true`}
            style={{ height: "100%", position: "relative", width: "100%" }}
          >
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}