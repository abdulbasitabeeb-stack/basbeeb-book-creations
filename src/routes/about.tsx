import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Newsletter } from "@/components/site/Newsletter";
import { img } from "@/data/assets";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BASBEEB BOOK — Our Story & Mission" },
      {
        name: "description",
        content:
          "Meet BASBEEB BOOK: a creative publishing brand writing children's books, stories, guides and creative resources with the belief that good ideas deserve beautiful books.",
      },
      { property: "og:title", content: "About BASBEEB BOOK — Our Story & Mission" },
      {
        property: "og:description",
        content: "The story, mission and values behind BASBEEB BOOK.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Clarity over cleverness",
    body: "We would rather be understood on the first read than admired on the third.",
  },
  {
    title: "Warmth as a standard",
    body: "Every book should feel like it was made by someone who wanted the reader to be alright.",
  },
  {
    title: "Craft in the details",
    body: "Typography, paper, pacing and covers matter. A book is an object as well as an idea.",
  },
  {
    title: "Made to be re-read",
    body: "We publish fewer titles so each one can earn a permanent place on the shelf.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="A creative publishing space built around good ideas"
        intro="BASBEEB BOOK publishes books, children's stories, ebooks, guides and creative resources — work made to inform, entertain and inspire."
      />

      <section className="section-y">
        <div className="shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <div className="space-y-6">
              <p className="lede">
                BASBEEB BOOK started the way most small publishers do — with a manuscript, a
                stubborn idea, and no obvious permission to begin. The first title was written in
                the margins of ordinary days, and the response to it made one thing clear: there is
                room for books that are gentle, useful and honest at the same time.
              </p>
              <p className="lede">
                Today the brand covers two shelves that sit comfortably beside each other.
                Illustrated stories for children about courage and curiosity, and reflective writing
                for grown-ups about patience, creativity and the long road. Alongside them we
                publish free resources — printables, prompts and guides — for the readers, writers
                and families who use our books as a starting point.
              </p>
              <p className="lede">
                We work slowly on purpose. Every title is written, illustrated, edited and designed
                with the same question in mind: will this still matter to someone a year from now?
              </p>
            </div>

            <blockquote className="mt-12 border-l-2 border-accent pl-6">
              <p className="font-serif text-2xl italic leading-snug text-espresso">
                “Create. Write. Inspire. — the whole brief, in three words.”
              </p>
              <cite className="mt-4 block text-xs font-semibold uppercase tracking-[0.16em] not-italic text-muted-foreground">
                Abdul Basit Abeeb, founder
              </cite>
            </blockquote>
          </Reveal>

          <Reveal delay={120}>
            <img
              src={img.aboutStudio}
              alt="A writing desk with stacked books, an open journal and a warm cup of coffee"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-soft"
            />
            <div className="mt-8 rounded-2xl border border-border bg-card p-7">
              <p className="eyebrow">Our mission</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                To publish books and creative resources that inform, entertain and inspire — and to
                make them beautiful enough that people keep them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-y border-border/70 bg-secondary/50">
        <div className="shell">
          <p className="eyebrow">What we stand for</p>
          <h2 className="display-2 mt-4 max-w-2xl">Four things that decide every book we publish</h2>
          <ul className="mt-14 grid gap-10 sm:grid-cols-2">
            {values.map((value, i) => (
              <li key={value.title}>
                <Reveal delay={i * 80}>
                  <span className="font-serif text-3xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-serif text-xl">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-14 flex flex-wrap gap-3">
            <Link
              to="/books"
              className="rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              Explore the books
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-espresso/25 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-espresso hover:border-espresso/60"
            >
              Work with us
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="shell">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
