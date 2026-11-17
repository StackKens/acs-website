"use client";

import { useEffect, useState, type ReactNode } from "react";

/* Mount reveal, same pattern as the home page. */
export function Reveal({ delay = 0, className = "", children }: { delay?: number; className?: string; children: ReactNode }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${show ? "translate-y-0 opacity-100" : "translate-y-3.5 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
