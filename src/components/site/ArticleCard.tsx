import { Link } from "@tanstack/react-router";
import { type Article, formatDate } from "@/data/articles";

export function ArticleCard({ article, wide = false }: { article: Article; wide?: boolean }) {
  return (
    <article className={`group flex h-full flex-col ${wide ? "md:flex-row md:gap-8" : ""}`}>
      <Link
        to="/blog/$slug"
        params={{ slug: article.slug }}
        className={`block overflow-hidden rounded-xl bg-secondary ${wide ? "md:w-1/2" : ""}`}
      >
        <div className={wide ? "aspect-[4/3]" : "aspect-[3/2]"}>
          <img
            src={article.image}
            alt={article.imageAlt}
            width={1200}
            height={800}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />
        </div>
      </Link>
      <div className={`flex flex-1 flex-col ${wide ? "mt-6 md:mt-0" : "mt-5"}`}>
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {article.category} · {formatDate(article.date)}
        </p>
        <h3 className={`mt-3 font-serif leading-snug ${wide ? "text-2xl sm:text-3xl" : "text-xl"}`}>
          <Link to="/blog/$slug" params={{ slug: article.slug }} className="link-underline">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
        <Link
          to="/blog/$slug"
          params={{ slug: article.slug }}
          className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-espresso transition-colors hover:text-accent"
        >
          Read article
        </Link>
      </div>
    </article>
  );
}
