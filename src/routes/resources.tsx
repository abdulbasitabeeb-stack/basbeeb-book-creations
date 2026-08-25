import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Download } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { FilterBar } from "@/components/site/FilterBar";
import { Reveal } from "@/components/site/Reveal";
import { Newsletter } from "@/components/site/Newsletter";
import { resourceCategories, resources } from "@/data/resources";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Free Creative Resources — BASBEEB BOOK" },
      {
        name: "description",
        content:
          "Free writing prompts, reading logs, printable children's activities and creative guides from BASBEEB BOOK.",
      },
      { property: "og:title", content: "Free Creative Resources — BASBEEB BOOK" },
      {
        property: "og:description",
        content: "Writing prompts, reading logs, printables and creative guides — free to download.",
      },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(
    () => (category === "All" ? resources : resources.filter((r) => r.category === category)),
    [category],
  );

  return (
    <>
      <PageHeader
        eyebrow="Creative resources"
        title="Tools for readers, writers and families"
        intro="Printables, prompts and guides built alongside our books — free to download and reuse as often as you like."
      >
        <FilterBar
          options={resourceCategories}
          active={category}
          onChange={setCategory}
          label="Filter resources by category"
        />
      </PageHeader>

      <section className="section-y">
        <div className="shell">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((resource, i) => (
              <li key={resource.slug} className="h-full">
                <Reveal delay={(i % 3) * 70} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-soft">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {resource.category} · {resource.format}
                    </p>
                    <h2 className="mt-3 font-serif text-xl leading-snug">{resource.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {resource.description}
                    </p>
                    {resource.available ? (
                      <a
                        href={resource.downloadUrl}
                        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-espresso hover:text-accent"
                      >
                        <Download size={14} /> Download
                      </a>
                    ) : (
                      <span className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        In progress
                      </span>
                    )}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y border-t border-border/70 bg-secondary/50">
        <div className="shell">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
