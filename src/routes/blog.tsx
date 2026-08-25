import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { FilterBar } from "@/components/site/FilterBar";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Reveal } from "@/components/site/Reveal";
import { articleCategories, articles, featuredArticle } from "@/data/articles";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Stories, Reading & Creativity | BASBEEB BOOK" },
      {
        name: "description",
        content:
          "Articles from BASBEEB BOOK on storytelling, reading habits, creativity, writing and raising young readers.",
      },
      { property: "og:title", content: "Blog — BASBEEB BOOK" },
      {
        property: "og:description",
        content: "Writing on storytelling, reading, creativity and books.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(
    () => (category === "All" ? articles : articles.filter((a) => a.category === category)),
    [category],
  );

  return (
    <>
      <PageHeader
        eyebrow="The journal"
        title="Notes on stories, reading and making things"
        intro="Short essays from the BASBEEB BOOK desk — on why stories matter, how reading habits are built, and what it takes to finish creative work."
      >
        <FilterBar
          options={articleCategories}
          active={category}
          onChange={setCategory}
          label="Filter articles by category"
        />
      </PageHeader>

      {category === "All" && featuredArticle && (
        <section className="section-y border-b border-border/70">
          <div className="shell">
            <p className="eyebrow mb-8">Featured article</p>
            <Reveal>
              <ArticleCard article={featuredArticle} wide />
            </Reveal>
          </div>
        </section>
      )}

      <section className="section-y">
        <div className="shell">
          {filtered.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Nothing in this category yet — new writing is published regularly.
            </p>
          ) : (
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article, i) => (
                <Reveal key={article.slug} delay={(i % 3) * 80} className="h-full">
                  <ArticleCard article={article} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
