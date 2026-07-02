interface VehicleIconProps {
  type: "hatchback" | "sedan" | "suv" | "luxury";
  className?: string;
}

/**
 * Minimal line-art silhouettes, side profile, drawn on a 100x40 viewBox
 * so they share consistent proportions across the fleet cards. Stroke
 * uses a shared gradient id per instance to avoid collisions.
 */
export default function VehicleIcon({ type, className }: VehicleIconProps) {
  const gradId = `veh-grad-${type}`;

  const bodies: Record<string, JSX.Element> = {
    hatchback: (
      <path
        d="M6 27 C6 21 10 19 15 18 L24 12 C27 10 31 9 36 9 L62 9 C67 9 71 11 73 14 L78 18 C84 19 90 21 92 27 L92 30 C92 31.5 90.8 32.5 89.3 32.5 H82 M30 32.5 H68 M14 32.5 H6.5 C5.1 32.5 4 31.5 4 30 V27"
        fill="none"
      />
    ),
    sedan: (
      <path
        d="M4 28 C4 22 9 20 14 19 L23 11 C26 9.3 30 8.5 35 8.5 L52 8.5 C56 8.5 59.5 9.8 61.5 12 L68 19 C78 20 92 21.5 94 26 C95 28 95 30 93.5 31.5 H86 M30 31.5 H68 M12 31.5 H5.5 C4.6 31.5 4 30.8 4 30 V28"
        fill="none"
      />
    ),
    suv: (
      <path
        d="M3 29 C3 22 8 20 14 19 L21 10.5 C23.5 8.3 27 7 31 7 L63 7 C68 7 72 9 75 12 L82 19 C89 19.5 95 21.5 96.5 26 C97.5 28.5 97 30.5 95 31.5 H87 M30 31.5 H70 M11 31.5 H4.5 C3.6 31.5 3 30.8 3 30 V29"
        fill="none"
      />
    ),
    luxury: (
      <path
        d="M3 27 C3 20.5 8.5 18.5 14.5 17.5 L24 9.5 C27.5 7 32 5.5 38 5.5 L58 5.5 C63.5 5.5 68 7.3 70.5 10 L78 17.5 C87 18.5 95 20.5 97 25.5 C98 28 97.5 30 95.5 31 H88 M29 31 H71 M11 31 H4.5 C3.6 31 3 30.3 3 29.5 V27 M40 11 H56"
        fill="none"
      />
    ),
  };

  const wheelCx = type === "luxury" ? [22, 78] : type === "suv" ? [21, 79] : [22, 78];

  return (
    <svg
      viewBox="0 0 100 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="100" y2="40">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="55%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${gradId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {bodies[type]}
        <circle cx={wheelCx[0]} cy="32.5" r="4.5" />
        <circle cx={wheelCx[1]} cy="32.5" r="4.5" />
      </g>
    </svg>
  );
}
