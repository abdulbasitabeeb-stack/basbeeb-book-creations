import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { img } from "@/data/assets";
import { books, featuredBooks } from "@/data/books";
import { latestArticles } from "@/data/articles";
import { BookCard } from "@/components/site/BookCard";
import { ArticleCard } from "@/components/site/ArticleCard";
import { SectionHeading } from "@/components/site/PageHeader";
import { Newsletter } from "@/components/site/Newsletter";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BASBEEB BOOK — Create. Write. Inspire." },
      {
        name: "description",
        content:
          "Discover books, children's stories, ebooks, guides and creative resources from BASBEEB BOOK — a creative publishing space made to inform, entertain and inspire.",
      },
      { property: "og:title", content: "BASBEEB BOOK — Create. Write. Inspire." },
      {
        property: "og:description",
        content:
          "A creative publishing space for books, stories, ideas and creativity. Explore the collection.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillars = [
  {
    title: "Children's Books",
    body: "Warm, illustrated stories about courage, curiosity and kindness — written to be read aloud.",
    to: "/childrens-books" as const,
  },
  {
    title: "Stories & Inspiration",
    body: "Short reflections and long-form stories for readers navigating slow, honest seasons.",
    to: "/stories" as const,
  },
  {
    title: "Guides & Resources",
    body: "Practical guides, printables and creative tools for writers, readers and families.",
    to: "/resources" as const,
  },
];

function Home() {
  const featured = featuredBooks[0];

  return (
    <>
      {/* Hero */}
      <section className="paper relative overflow-hidden border-b border-border/70">
        <div className="shell grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <div>
            <p className="eyebrow">Create. Write. Inspire.</p>
            <h1 className="display-1 mt-6">
              Books, stories and ideas
              <span className="block italic text-accent">worth keeping.</span>
            </h1>
            <p className="lede mt-7 max-w-xl">
              BASBEEB BOOK is a creative publishing space for children's books, ebooks, inspiring
              stories, helpful guides and original ideas — made to inform, entertain and inspire.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/books"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                Explore the collection <ArrowRight size={15} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center rounded-full border border-espresso/25 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-espresso transition-colors hover:border-espresso/60"
              >
                About the brand
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={img.heroBooks}
              alt="A stack of premium hardcover books with a fountain pen in warm editorial light"
              width={1200}
              height={900}
              className="w-full rounded-2xl object-cover shadow-lift"
            />
            {featured && (
              <div className="absolute -bottom-6 -left-2 hidden w-56 rounded-xl border border-border bg-card p-4 shadow-lift sm:block lg:-left-10">
                <p className="eyebrow">Featured title</p>
                <p className="mt-2 font-serif text-base leading-snug">{featured.title}</p>
                <Link
                  to="/books/$slug"
                  params={{ slug: featured.slug }}
                  className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-accent"
                >
                  Read more
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="What we publish"
            title="Three ways into the BASBEEB BOOK world"
            intro="Every title we release belongs to one of these three shelves — stories for children, reflections for grown-ups, and tools for anyone making something of their own."
          />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {pillars.map((pillar, i) => (
              <li key={pillar.title} className="bg-card">
                <Reveal delay={i * 90} className="h-full">
                  <Link to={pillar.to} className="group flex h-full flex-col p-8 transition-colors hover:bg-secondary/60">
                    <span className="rule-gold" />
                    <h3 className="mt-6 font-serif text-2xl">{pillar.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {pillar.body}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-espresso group-hover:text-accent">
                      Browse <ArrowRight size={14} />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured books */}
      <section className="section-y border-y border-border/70 bg-secondary/50">
        <div className="shell">
          <SectionHeading
            eyebrow="The collection"
            title="Featured books"
            intro="A small, carefully made catalogue. Each title is designed to be re-opened."
            action={
              <Link
                to="/books"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-espresso hover:text-accent"
              >
                All books <ArrowRight size={14} />
              </Link>
            }
          />
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {featuredBooks.map((book, i) => (
              <Reveal key={book.slug} delay={i * 80} className="h-full">
                <BookCard book={book} priority={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="section-y">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={img.aboutStudio}
              alt="A writing desk with books, an open journal and warm morning light"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">About BASBEEB BOOK</p>
            <h2 className="display-2 mt-4">
              A small publishing house with one job: make things worth reading twice.
            </h2>
            <p className="lede mt-6">
              BASBEEB BOOK began with a simple belief — that a good story, told plainly and made
              beautifully, can change how someone moves through their week. We write, illustrate and
              publish books for children and grown-ups alike.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-espresso/25 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-espresso transition-colors hover:border-espresso/60"
            >
              Read our story <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Journal */}
      <section className="section-y border-t border-border/70 bg-secondary/50">
        <div className="shell">
          <SectionHeading
            eyebrow="The journal"
            title="Latest from the blog"
            action={
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-espresso hover:text-accent"
              >
                All articles <ArrowRight size={14} />
              </Link>
            }
          />
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {latestArticles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 80} className="h-full">
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-y">
        <div className="shell">
          <Newsletter />
          <p className="mt-8 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {books.length} titles published and in progress
          </p>
        </div>
      </section>
    </>
  );
}
