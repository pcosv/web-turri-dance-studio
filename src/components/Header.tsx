"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BOOKING_URL, classLinks, headerLinks, mobileMenu } from "@/lib/site";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "./icons";
import styles from "./Header.module.css";

/**
 * Site header.
 * - On the home page it floats over the hero video (light text, symbol logo).
 * - On every other page it sits on cream with the stacked logo.
 * Menus remember which page they were opened on, so they close by themselves
 * after navigating.
 */
export default function Header() {
  const pathname = usePathname();
  const overlay = pathname === "/";

  const [menuOpenOn, setMenuOpenOn] = useState<string | null>(null);
  const [classesOpenOn, setClassesOpenOn] = useState<string | null>(null);
  const menuOpen = menuOpenOn === pathname;
  const classesOpen = classesOpenOn === pathname;

  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Escape closes whatever is open; clicking outside closes the dropdown.
  useEffect(() => {
    if (!menuOpen && !classesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (menuOpen) {
        setMenuOpenOn(null);
        menuButtonRef.current?.focus();
      }
      setClassesOpenOn(null);
    };
    const onClick = (e: MouseEvent) => {
      if (classesOpen && !dropdownRef.current?.contains(e.target as Node)) {
        setClassesOpenOn(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [menuOpen, classesOpen]);

  // Lock page scroll behind the phone menu and move focus into it.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const classesActive = classLinks.some((c) => isActive(c.href));

  return (
    <header className={`${styles.header} ${overlay ? styles.overlay : styles.solid}`}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label="Turri Dance Studio home">
          {overlay ? (
            <>
              <Image
                src="/images/logo-symbol.png"
                alt=""
                width={52}
                height={52}
                className={styles.symbol}
                priority
              />
              <span className={styles.wordmark}>
                <span className={styles.wordmarkName}>Turri</span>
                <span className={styles.wordmarkSub}>DANCE STUDIO</span>
              </span>
            </>
          ) : (
            <Image
              src="/images/logo-stacked.png"
              alt="Turri Dance Studio"
              width={586}
              height={476}
              className={styles.stacked}
              priority
            />
          )}
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className={styles.desktopNav}>
          <Link
            href="/about"
            className={styles.navLink}
            aria-current={isActive("/about") ? "page" : undefined}
          >
            About us
          </Link>
          <div className={styles.dropdown} ref={dropdownRef}>
            <button
              type="button"
              className={`${styles.navLink} ${styles.dropdownToggle}`}
              aria-expanded={classesOpen}
              aria-controls="classes-menu"
              data-active={classesActive || undefined}
              onClick={() => setClassesOpenOn(classesOpen ? null : pathname)}
            >
              Classes <ChevronDownIcon />
            </button>
            {classesOpen && (
              <div id="classes-menu" className={styles.dropdownPanel}>
                {classLinks.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className={styles.dropdownItem}
                    onClick={() => setClassesOpenOn(null)}
                  >
                    <span className={styles.dropdownTitle}>{c.label}</span>
                    <span className={styles.dropdownMeta}>{c.meta}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {headerLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.navLink}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={BOOKING_URL} className={`${styles.book} ${styles.bookDesktop}`}>
            Book a class
          </a>
          {!overlay && (
            <a href={BOOKING_URL} className={`${styles.book} ${styles.bookMobile}`}>
              BOOK
            </a>
          )}
          <button
            ref={menuButtonRef}
            type="button"
            className={overlay ? styles.menuPill : styles.menuRound}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpenOn(pathname)}
          >
            {overlay && <span>MENU</span>}
            <MenuIcon size={overlay ? 16 : 20} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className={styles.mobileMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className={styles.mobileTop}>
            <Image
              src="/images/logo-stacked.png"
              alt="Turri Dance Studio"
              width={586}
              height={476}
              className={styles.mobileLogo}
            />
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.menuRound}
              aria-label="Close menu"
              onClick={() => {
                setMenuOpenOn(null);
                menuButtonRef.current?.focus();
              }}
            >
              <CloseIcon />
            </button>
          </div>
          <nav aria-label="Main" className={styles.mobileNav}>
            {mobileMenu.map((item) =>
              "heading" in item ? (
                <span key={item.heading} className={styles.mobileHeading}>
                  {item.heading}
                </span>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.mobileLink} ${item.sub ? styles.mobileSub : ""}`}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setMenuOpenOn(null)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <a href={BOOKING_URL} className={`btn btn-primary ${styles.mobileBook}`}>
            Book a class
          </a>
        </div>
      )}
    </header>
  );
}
