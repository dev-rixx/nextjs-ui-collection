"use client";

import { useRef, useCallback, useState } from "react";
import styles from "./reveal.module.css";

const RADIUS = 200;

export default function RevealTitle() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [mask, setMask] = useState<string>(
    "radial-gradient(circle 0px at 0px 0px, #fff 0%, transparent 100%)",
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMask(
      `radial-gradient(circle ${RADIUS}px at ${x}px ${y}px, #fff 0%, #fff 40%, transparent 100%)`,
    );
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMask(
      "radial-gradient(circle 0px at 0px 0px, #fff 0%, transparent 100%)",
    );
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={styles.titleWrapper}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h1
        className={styles.title}
        style={{
          WebkitMaskImage: mask,
          maskImage: mask,
        }}
      >
        rixx<span className={styles.titleDot}>.dev</span>
      </h1>
    </div>
  );
}
