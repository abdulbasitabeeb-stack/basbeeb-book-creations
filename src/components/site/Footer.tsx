import { Link } from "@tanstack/react-router";
import { img } from "@/data/assets";
import { site } from "@/data/site";
import { Newsletter } from "./Newsletter";

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "Books", to: "/books" },
      { label: "Children's Books", to: "/childrens-books" },
      { label: "Stories", to: "/stories" },
      { label: "Coming Soon", to: "/coming-soon" },
    ],
  },
  {
    heading: "Read",
    links: [
      { label: "Blog", to: "/blog" },
      { label: "Resources", to: "/resources" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Use", to: "/terms" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-secondary/70">
      <div className="shell grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={img.logo}
              alt={`${site.name} logo`}
              width={48}
              height={48}
              loading="lazy"
              className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-border"
            />
            <span className="font-serif text-lg font-semibold text-espresso">BASBEEB BOOK</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A creative publishing space for books, stories, ideas, and creativity — made to inform,
            entertain, and inspire.
          </p>
          <p className="eyebrow mt-6">{site.tagline}</p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {site.social.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline text-xs font-semibold uppercase tracking-[0.14em] text-espresso/70 hover:text-espresso"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="link-underline text-sm text-espresso/80 transition-colors hover:text-espresso"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="shell pb-16">
        <Newsletter variant="footer" />
      </div>

      <div className="border-t border-border/70">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BASBEEB BOOK. All rights reserved.</p>
          <p>
            Enquiries:{" "}
            <a href={`mailto:${site.email}`} className="link-underline text-espresso/80">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
