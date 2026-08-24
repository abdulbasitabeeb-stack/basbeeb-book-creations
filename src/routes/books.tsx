import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { FilterBar } from "@/components/site/FilterBar";
import { BookCard } from "@/components/site/BookCard";
import { Reveal } from "@/components/site/Reveal";
import { bookCategories, publishedBooks } from "@/data/books";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books — BASBEEB BOOK" },
      {
        name: "description",
        content:
          "Browse the full BASBEEB BOOK catalogue: children's books, stories, guides, ebooks and inspirational titles.",
      },
      { property: "og:title", content: "Books — BASBEEB BOOK" },
      {
        property: "og:description",
        content: "The full BASBEEB BOOK catalogue of books, stories, guides and ebooks.",
      },
      { property: "og:url", content: "/books" },
    ],
    links: [{ rel: "canonical", href: "/books" }],
  }),
  component: BooksPage,
});

function BooksPage() {
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      category === "All"
        ? publishedBooks
        : publishedBooks.filter((b) => b.category === category),
    [category],
  );

  return (
    <>
      <PageHeader
        eyebrow="The collection"
        title="Every BASBEEB BOOK title in one place"
        intro="Children's books, stories, guides, ebooks and inspirational writing — filter the catalogue to find your next read."
      >
        <FilterBar
          options={bookCategories}
          active={category}
          onChange={setCategory}
          label="Filter books by category"
        />
      </PageHeader>

      <section className="section-y">
        <div className="shell">
          {filtered.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No titles in this category yet — new books are added regularly.
            </p>
          ) : (
            <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((book, i) => (
                <Reveal key={book.slug} delay={(i % 3) * 80} className="h-full">
                  <BookCard book={book} priority={i < 3} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
