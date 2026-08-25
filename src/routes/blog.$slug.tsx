import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { articles, formatDate, getArticle } from "@/data/articles";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Newsletter } from "@/components/site/Newsletter";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article unavailable — BASBEEB BOOK" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — BASBEEB BOOK` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.date,
            author: { "@type": "Person", name: article.author },
            publisher: { "@type": "Organization", name: "BASBEEB BOOK" },
          }),
        },
      ],
    };
  },
  component: ArticleDetail,
});

function ArticleDetail() {
  const { article } = Route.useLoaderData();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="paper border-b border-border/70">
          <div className="shell py-12 sm:py-20">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground hover:text-espresso"
            >
              <ArrowLeft size={14} /> All articles
            </Link>
            <p className="eyebrow mt-10">
              {article.category} · {formatDate(article.date)}
            </p>
            <h1 className="display-2 mt-5 max-w-3xl">{article.title}</h1>
            <p className="mt-5 text-sm uppercase tracking-[0.16em] text-muted-foreground">
              By {article.author}
            </p>
          </div>
        </header>

        <div className="shell py-12 sm:py-16">
          <img
            src={article.image}
            alt={article.imageAlt}
            width={1200}
            height={800}
            className="w-full rounded-2xl object-cover shadow-soft"
          />
          <div className="mx-auto mt-14 max-w-2xl space-y-7">
            <p className="font-serif text-2xl leading-snug text-espresso">{article.excerpt}</p>
            {article.content.map((para) => (
              <p key={para} className="text-[1.0625rem] leading-[1.85] text-muted-foreground">
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>

      <section className="section-y border-t border-border/70 bg-secondary/50">
        <div className="shell">
          <h2 className="display-2">Keep reading</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {related.map((item, i) => (
              <Reveal key={item.slug} delay={i * 80} className="h-full">
                <ArticleCard article={item} />
              </Reveal>
            ))}
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
