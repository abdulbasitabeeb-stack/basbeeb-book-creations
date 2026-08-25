import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { BookCard } from "@/components/site/BookCard";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Reveal } from "@/components/site/Reveal";
import { books } from "@/data/books";
import { articles } from "@/data/articles";
import { img } from "@/data/assets";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Stories & Inspiration — BASBEEB BOOK" },
      {
        name: "description",
        content:
          "Inspiring stories and reflections from BASBEEB BOOK on patience, resilience, creativity and trusting the long road.",
      },
      { property: "og:title", content: "Stories & Inspiration — BASBEEB BOOK" },
      {
        property: "og:description",
        content: "Inspiring stories and reflections on patience, resilience and creativity.",
      },
      { property: "og:url", content: "/stories" },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  const storyBooks = books.filter(
    (b) => (b.category === "Stories" || b.category === "Inspirational") && !b.comingSoon,
  );
  const storyArticles = articles.filter(
    (a) => a.category === "Stories" || a.category === "Creativity" || a.category === "Books",
  );

  return (
    <>
      <PageHeader
        eyebrow="Stories & inspiration"
        title="Writing for the middle of the journey"
        intro="Reflections, essays and honest stories for readers who are further along than they think — about patience, resilience and staying with the work."
      />

      <section className="section-y">
        <div className="shell">
          <h2 className="display-2 max-w-2xl">Books in this shelf</h2>
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {storyBooks.map((book, i) => (
              <Reveal key={book.slug} delay={(i % 3) * 80} className="h-full">
                <BookCard book={book} priority={i < 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/70">
        <img
          src={img.dontRush}
          alt="A traveller walking an open road beneath a golden sunset"
          width={1200}
          height={900}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative bg-primary/70 py-24 backdrop-blur-[1px]">
          <div className="shell max-w-2xl">
            <p className="eyebrow text-accent">From the collection</p>
            <p className="mt-5 font-serif text-3xl leading-tight text-primary-foreground sm:text-4xl">
              “Arriving late is still arriving. Don't rush your journey.”
            </p>
            <Link
              to="/books/$slug"
              params={{ slug: "dont-rush-your-journey" }}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Read the book <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="shell">
          <h2 className="display-2 max-w-2xl">Short reads from the journal</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {storyArticles.map((article, i) => (
              <Reveal key={article.slug} delay={(i % 3) * 80} className="h-full">
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
