import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Newsletter } from "@/components/site/Newsletter";

export const Route = createFileRoute("/coming-soon")({
  head: () => ({
    meta: [
      { title: "Coming Soon — Upcoming Titles from BASBEEB BOOK" },
      {
        name: "description",
        content:
          "A look at what BASBEEB BOOK is working on next: new children's books, reflective writing and creative resources currently in progress.",
      },
      { property: "og:title", content: "Coming Soon — Upcoming Titles from BASBEEB BOOK" },
      {
        property: "og:description",
        content: "New children's books, essays and resources currently in progress.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://basbeeb-book-creations.lovable.app/coming-soon" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://basbeeb-book-creations.lovable.app/coming-soon" }],
  }),
  component: ComingSoonPage,
});

const upcoming = [
  {
    stage: "In illustration",
    title: "The Little Bear Who Learned to Ask",
    kind: "Children's picture book",
    body: "A follow-up to The Little Bear Who Was Afraid to Try — this time about the quiet courage of asking for help.",
  },
  {
    stage: "In editing",
    title: "Slow Work",
    kind: "Essays on creativity",
    body: "Short essays on patience, unfinished projects and building something that outlasts a burst of motivation.",
  },
  {
    stage: "In writing",
    title: "Every Small Beginning",
    kind: "Illustrated storybook",
    body: "A gentle story for young readers about starting over, told across four seasons in one garden.",
  },
  {
    stage: "In design",
    title: "The Creator's Companion",
    kind: "Workbook & printables",
    body: "A practical companion of prompts, planning pages and reflection sheets for writers and makers.",
  },
];

function ComingSoonPage() {
  return (
    <>
      <PageHeader
        eyebrow="Coming soon"
        title="What we're making next"
        intro="We publish a small number of titles each year so each one gets the care it deserves. Here's what's currently on the desk."
      />

      <section className="section-y">
        <div className="shell">
          <ol className="grid gap-8 sm:grid-cols-2">
            {upcoming.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 80}>
                  <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                    <p className="eyebrow">{item.stage}</p>
                    <h2 className="mt-4 font-serif text-2xl leading-snug text-espresso">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                      {item.kind}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>

          <div className="mt-16">
            <Newsletter />
          </div>
        </div>
      </section>
    </>
  );
}
