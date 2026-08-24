import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { books, getBook } from "@/data/books";
import { BookCard } from "@/components/site/BookCard";
import { Newsletter } from "@/components/site/Newsletter";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/books/$slug")({
  loader: ({ params }) => {
    const book = getBook(params.slug);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Book unavailable — BASBEEB BOOK" }, { name: "robots", content: "noindex" }],
      };
    }
    const { book } = loaderData;
    return {
      meta: [
        { title: `${book.title} — BASBEEB BOOK` },
        { name: "description", content: book.description },
        { property: "og:title", content: `${book.title} — BASBEEB BOOK` },
        { property: "og:description", content: book.description },
        { property: "og:type", content: "book" },
        { property: "og:url", content: `/books/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/books/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: book.title,
            author: { "@type": "Person", name: book.author },
            description: book.description,
            datePublished: book.publicationDate,
            publisher: { "@type": "Organization", name: "BASBEEB BOOK" },
          }),
        },
      ],
    };
  },
  component: BookDetail,
});

function BookDetail() {
  const { book } = Route.useLoaderData();
  const related = books
    .filter((b) => b.slug !== book.slug && b.category === book.category)
    .slice(0, 3);

  return (
    <>
      <section className="paper border-b border-border/70">
        <div className="shell py-12 sm:py-20">
          <Link
            to="/books"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground hover:text-espresso"
          >
            <ArrowLeft size={14} /> All books
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="mx-auto w-full max-w-xs lg:mx-0">
              <img
                src={book.cover}
                alt={book.coverAlt}
                width={800}
                height={1200}
                className="book-shadow w-full rounded-lg object-cover"
              />
            </div>

            <div>
              <p className="eyebrow">
                {book.category}
                {book.ageRange ? ` · ${book.ageRange}` : ""}
              </p>
              <h1 className="display-2 mt-4">{book.title}</h1>
              <p className="mt-4 text-sm uppercase tracking-[0.16em] text-muted-foreground">
                By {book.author}
              </p>
              <div className="mt-8 space-y-5">
                {book.longDescription.map((para) => (
                  <p key={para} className="lede">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {book.comingSoon ? (
                  <>
                    <span className="rounded-full border border-accent/60 bg-accent/10 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-espresso">
                      Coming soon
                    </span>
                    <Link
                      to="/coming-soon"
                      className="inline-flex items-center rounded-full border border-espresso/25 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-espresso hover:border-espresso/60"
                    >
                      See release schedule
                    </Link>
                  </>
                ) : (
                  <>
                    <a
                      href={book.purchaseUrl}
                      className="rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
                    >
                      Buy / Download
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center rounded-full border border-espresso/25 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-espresso hover:border-espresso/60"
                    >
                      Ask about this book
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="shell grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-2xl">What you'll discover</h2>
            <ul className="mt-6 space-y-4">
              {book.discover.map((item) => (
                <li key={item} className="flex gap-4 border-b border-border/70 pb-4 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-2xl">Who it's for</h2>
            <p className="lede mt-6">{book.audience}</p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm">
              <div>
                <dt className="eyebrow">Category</dt>
                <dd className="mt-2 text-espresso">{book.category}</dd>
              </div>
              <div>
                <dt className="eyebrow">Published</dt>
                <dd className="mt-2 text-espresso">
                  {new Date(book.publicationDate).toLocaleDateString("en-GB", {
                    month: "long",
                    year: "numeric",
                  })}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y border-t border-border/70 bg-secondary/50">
          <div className="shell">
            <h2 className="display-2">You may also like</h2>
            <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={i * 80} className="h-full">
                  <BookCard book={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-y">
        <div className="shell">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
