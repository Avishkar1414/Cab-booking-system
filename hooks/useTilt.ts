"use client";

import { useRef, useState, useCallback } from "react";

export function useTilt(maxTilt: number = 6) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<{ transform: string }>({
    transform: "rotateX(0deg) rotateY(0deg)",
  });

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setStyle({
        transform: `rotateX(${(-y * maxTilt).toFixed(2)}deg) rotateY(${(x * maxTilt).toFixed(2)}deg)`,
      });
    },
    [maxTilt]
  );

  const onMouseLeave = useCallback(() => {
    setStyle({ transform: "rotateX(0deg) rotateY(0deg)" });
  }, []);

  return { ref, style, onMouseMove, onMouseLeave };
}
