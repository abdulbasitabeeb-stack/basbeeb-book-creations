import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Book } from "@/data/books";

export function BookCard({ book, priority = false }: { book: Book; priority?: boolean }) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        to="/books/$slug"
        params={{ slug: book.slug }}
        className="relative block overflow-hidden rounded-xl bg-secondary"
      >
        <div className="aspect-[2/3] w-full overflow-hidden">
          <img
            src={book.cover}
            alt={book.coverAlt}
            width={800}
            height={1200}
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
          />
        </div>
        {book.comingSoon && (
          <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground backdrop-blur">
            Coming soon
          </span>
        )}
      </Link>

      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {book.category}
          {book.ageRange ? ` · ${book.ageRange}` : ""}
        </p>
        <h3 className="mt-2 font-serif text-xl leading-snug">
          <Link to="/books/$slug" params={{ slug: book.slug }} className="link-underline">
            {book.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {book.description}
        </p>
        <Link
          to="/books/$slug"
          params={{ slug: book.slug }}
          className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-espresso transition-colors hover:text-accent"
        >
          View book <ArrowUpRight size={14} />
        </Link>
      </div>
    </article>
  );
}
