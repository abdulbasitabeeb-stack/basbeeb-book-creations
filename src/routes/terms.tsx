import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { site } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — BASBEEB BOOK" },
      {
        name: "description",
        content:
          "The terms that apply when you use the BASBEEB BOOK website, read our content or download our free creative resources.",
      },
      { property: "og:title", content: "Terms of Use — BASBEEB BOOK" },
      {
        property: "og:description",
        content: "Terms that apply when using the BASBEEB BOOK website and resources.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://basbeeb-book-creations.lovable.app/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://basbeeb-book-creations.lovable.app/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  {
    heading: "Using this site",
    body: "You're welcome to read, share and link to anything published here. By using the site you agree to use it lawfully and not to disrupt it for other readers.",
  },
  {
    heading: "Our content",
    body: "All text, illustrations, book covers and designs on this site are the property of BASBEEB BOOK and its creators, protected by copyright. Please don't reproduce or republish them commercially without written permission.",
  },
  {
    heading: "Free resources",
    body: "Printables, prompts and guides offered here are free for personal, classroom and family use. They may not be resold, bundled or redistributed as your own work.",
  },
  {
    heading: "Quotes and excerpts",
    body: "Short excerpts may be quoted for review, teaching or commentary, provided BASBEEB BOOK is credited and a link is included where possible.",
  },
  {
    heading: "External links",
    body: "Where we link to other websites or retailers, we do so for convenience. We're not responsible for their content or their policies.",
  },
  {
    heading: "Changes",
    body: "We may update these terms as the site grows. The version published here is always the one that applies.",
  },
];

function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        intro="What you can expect from us, and what we ask of you."
      />

      <section className="section-y">
        <div className="shell max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-serif text-2xl text-espresso">{s.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}

          <div>
            <h2 className="font-serif text-2xl text-espresso">Questions</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Reach us at{" "}
              <a href={`mailto:${site.email}`} className="link-underline text-espresso">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
