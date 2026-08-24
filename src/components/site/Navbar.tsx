import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { img } from "@/data/assets";
import { navLinks, site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/80 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      <nav aria-label="Primary" className="shell flex h-18 items-center gap-4 py-3">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={img.logo}
            alt={`${site.name} logo`}
            width={44}
            height={44}
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-border"
          />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="font-serif text-[1.0625rem] font-semibold tracking-tight text-espresso">
              BASBEEB BOOK
            </span>
            <span className="mt-1 text-[0.5625rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              {site.tagline}
            </span>
          </span>
        </Link>

        <ul className="ml-auto hidden items-center gap-7 lg:flex">
          {navLinks.slice(0, 7).map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="link-underline text-[0.8125rem] font-medium tracking-wide text-espresso/75 transition-colors hover:text-espresso data-[status=active]:text-espresso"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="ml-auto hidden shrink-0 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift lg:ml-0 lg:inline-flex"
        >
          Contact
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-espresso transition-colors hover:bg-secondary lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto border-t border-border bg-background lg:hidden">
          <ul className="shell flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.to} className="border-b border-border/60 last:border-0">
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: link.to === "/" }}
                  className="block py-4 font-serif text-xl text-espresso data-[status=active]:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
