import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import { BookCard } from "@/components/site/BookCard";
import { Reveal } from "@/components/site/Reveal";
import { childrensBooks } from "@/data/books";
import { img } from "@/data/assets";

export const Route = createFileRoute("/childrens-books")({
  head: () => ({
    meta: [
      { title: "Children's Books — BASBEEB BOOK" },
      {
        name: "description",
        content:
          "Illustrated children's books from BASBEEB BOOK — gentle read-aloud stories about courage, curiosity and kindness for ages 2 to 8.",
      },
      { property: "og:title", content: "Children's Books — BASBEEB BOOK" },
      {
        property: "og:description",
        content: "Gentle, illustrated read-aloud stories for children aged 2 to 8.",
      },
      { property: "og:url", content: "/childrens-books" },
    ],
    links: [{ rel: "canonical", href: "/childrens-books" }],
  }),
  component: ChildrensBooksPage,
});

const promises = [
  {
    title: "Written to be read aloud",
    body: "Every sentence is tested out loud so the rhythm carries a tired reader to the last page.",
  },
  {
    title: "One clear idea per book",
    body: "Courage, curiosity, sharing — a single message a child can carry into the next morning.",
  },
  {
    title: "Illustrations worth returning to",
    body: "Warm, painterly artwork with small details children notice on the tenth reading.",
  },
];

function ChildrensBooksPage() {
  return (
    <>
      <PageHeader
        eyebrow="For young readers"
        title="Children's books that make bedtime the best part of the day"
        intro="Gentle, illustrated stories for ages 2 to 8 — about trying, exploring, sharing, and the small brave things children do every day."
      />

      <section className="section-y">
        <div className="shell">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {childrensBooks.map((book, i) => (
              <Reveal key={book.slug} delay={(i % 3) * 80} className="h-full">
                <BookCard book={book} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-border/70 bg-secondary/50">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={img.bearSunset}
              alt="A small bear in a blue scarf sitting on a hillside watching a golden sunset"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Our promise to parents"
              title="Kind stories, made carefully"
            />
            <ul className="mt-10 space-y-8">
              {promises.map((p) => (
                <li key={p.title} className="border-l-2 border-accent/60 pl-5">
                  <h3 className="font-serif text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </li>
              ))}
            </ul>
            <Link
              to="/resources"
              className="mt-10 inline-flex rounded-full border border-espresso/25 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-espresso hover:border-espresso/60"
            >
              Free printable activities
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
