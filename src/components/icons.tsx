/** Thin-line brand icons, drawn to the brand guide (deep lilac, delicate strokes). */

type IconProps = { size?: number; color?: string; className?: string };

const line = (color: string, width = 1.2) => ({
  fill: "none",
  stroke: color,
  strokeWidth: width,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function PointeShoeIcon({ size = 32, color = "#5E3A8C", className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className={className} {...line(color)}>
      <path d="M10 34c6-2 12-8 16-16c2-4 8-5 11-2c3 3 2 8-2 11c-7 6-15 10-23 11c-3 0-4-3-2-4z" />
      <path d="M26 18c-2 6 2 10 8 9" />
      <path d="M14 33c3 6 10 9 18 8" />
    </svg>
  );
}

export function RibbonIcon({ size = 32, color = "#5E3A8C", className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className={className} {...line(color)}>
      <path d="M24 22c-6-9-17-8-16 0c1 7 10 6 16 0z" />
      <path d="M24 22c6-9 17-8 16 0c-1 7-10 6-16 0z" />
      <circle cx="24" cy="22" r="2.5" />
      <path d="M22 24l-6 16M26 24l6 16" />
    </svg>
  );
}

export function FreesiaIcon({ size = 32, color = "#5E3A8C", className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className={className} {...line(color)}>
      <path d="M14 44C18 32 22 24 30 16" />
      <path d="M30 16c1-6 7-9 12-6c-2 5-7 8-12 6z" />
      <path d="M24 24c-2-5 0-10 5-11c1 5-1 9-5 11z" />
      <path d="M19 32c-4-3-5-8-2-11c3 3 4 7 2 11z" />
    </svg>
  );
}

export function SparkleIcon({ size = 28, color = "#E4B028", className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className} {...line(color, 1.5)}>
      <path d="M12 2C12.6 8 16 11.4 22 12C16 12.6 12.6 16 12 22C11.4 16 8 12.6 2 12C8 11.4 11.4 8 12 2Z" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 12, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" aria-hidden="true" {...line(color, 1.5)}>
      <path d="M3 4.5l3 3 3-3" />
    </svg>
  );
}

export function MenuIcon({ size = 20, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" {...line(color, 1.5)}>
      <path d="M3 6h14M3 10h14M7 14h10" />
    </svg>
  );
}

export function CloseIcon({ size = 18, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" {...line(color, 1.5)}>
      <path d="M5 5l10 10M15 5L5 15" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, color = "#FAF6E9" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke={color} strokeWidth={1.5}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill={color} />
    </svg>
  );
}

export function FacebookIcon({ size = 18, color = "#FAF6E9" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...line(color, 1.5)}>
      <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />
    </svg>
  );
}
