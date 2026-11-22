/**
 * Shared site content: navigation, studio details and external links.
 * Update the placeholders here and every page picks them up.
 */

/** External booking platform (timetable, term dates, booking & payment). Placeholder for now. */
export const BOOKING_URL = "https://www.google.com";

/** Petite Performers franchise site (walking – 8 years). */
export const PETITE_PERFORMERS_URL = "https://www.thepetiteperformers.com/";

export const studio = {
  name: "Turri Dance Studio",
  tagline: "Dance · Connect · Bloom",
  addressLines: ["36A Hurst Rd, Unit 111", "London E17 3BL"],
  addressOneLine: "36A Hurst Rd, Unit 111, London E17 3BL",
  phoneDisplay: "07721 929619",
  phoneHref: "tel:+447721929619",
  /** Email not created yet. */
  email: null as string | null,
  hours: [
    { days: "Mon – Fri", time: "9:00 – 20:30" },
    { days: "Sat – Sun", time: "9:00 – 15:00" },
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=36A+Hurst+Rd+London+E17+3BL",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=36A+Hurst+Rd,+London+E17+3BL&z=15&output=embed",
  instagram: "https://www.instagram.com",
  facebook: "https://www.facebook.com",
};

export type NavLink = { label: string; href: string };

export const classLinks = [
  { label: "Kids classes", href: "/kids-classes", meta: "Walking – 16" },
  {
    label: "Adult classes",
    href: "/adult-classes",
    meta: "16+ and 60+ · ballet & yoga",
  },
];

/** Desktop header links (Classes dropdown sits after "About us"). */
export const headerLinks: NavLink[] = [
  { label: "Teachers", href: "/teachers" },
  { label: "Booking", href: "/booking" },
  { label: "Memberships", href: "/memberships" },
  { label: "Past events", href: "/past-events" },
  { label: "Contact", href: "/contact" },
];

/** Phone menu, in order. `heading` rows are section labels; `sub` rows are indented. */
export const mobileMenu: Array<
  { heading: string } | { label: string; href: string; sub?: boolean }
> = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { heading: "Classes" },
  { label: "Kids classes · walking – 16", href: "/kids-classes", sub: true },
  { label: "Adult classes · 16+", href: "/adult-classes", sub: true },
  { label: "Booking & payments", href: "/booking" },
  { label: "Memberships & packs", href: "/memberships" },
  { label: "Teachers", href: "/teachers" },
  { label: "Past events", href: "/past-events" },
  { label: "Contact", href: "/contact" },
];

export const footerExplore: Array<NavLink & { external?: boolean }> = [
  { label: "About us", href: "/about" },
  { label: "Kids classes", href: "/kids-classes" },
  { label: "Adult classes", href: "/adult-classes" },
  { label: "Timetable & term dates ↗", href: BOOKING_URL, external: true },
  { label: "Booking & payments", href: "/booking" },
  { label: "Memberships", href: "/memberships" },
  { label: "Teachers", href: "/teachers" },
  { label: "Past events", href: "/past-events" },
  { label: "Contact", href: "/contact" },
];

export const footerHelp: NavLink[] = [
  { label: "FAQ", href: "/faq" },
  { label: "Policies", href: "/policies" },
];
