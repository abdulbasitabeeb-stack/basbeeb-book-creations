import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BASBEEB BOOK — Enquiries & Collaborations" },
      {
        name: "description",
        content:
          "Get in touch with BASBEEB BOOK about books, collaborations, reader feedback, publishing questions or press enquiries. We reply within two working days.",
      },
      { property: "og:title", content: "Contact BASBEEB BOOK — Enquiries & Collaborations" },
      {
        property: "og:description",
        content: "Send a note about collaborations, feedback, publishing questions or press.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://basbeeb-book-creations.lovable.app/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://basbeeb-book-creations.lovable.app/contact" }],
  }),
  component: ContactPage,
});

const details = [
  {
    heading: "Email",
    body: "The fastest way to reach us. We read everything.",
    action: { label: site.email, href: `mailto:${site.email}` },
  },
  {
    heading: "Collaborations",
    body: "Illustrators, editors, educators and bookshops — we'd love to hear what you're working on.",
  },
  {
    heading: "Response time",
    body: "Most enquiries are answered within two working days, Monday to Friday.",
  },
];

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Say hello — we read every message"
        intro="Questions about a title, an idea for a collaboration, or a note about something you read. Whatever it is, this is the place."
      />

      <section className="section-y">
        <div className="shell grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-8">
              {details.map((d) => (
                <div key={d.heading} className="border-l-2 border-accent pl-6">
                  <h2 className="font-serif text-xl text-espresso">{d.heading}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                  {d.action && (
                    <a
                      href={d.action.href}
                      className="link-underline mt-3 inline-block text-sm font-semibold text-espresso"
                    >
                      {d.action.label}
                    </a>
                  )}
                </div>
              ))}

              <div className="rounded-2xl border border-border bg-card p-7">
                <p className="eyebrow">Follow along</p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {site.social.map((s) => (
                    <li key={s.name}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="link-underline text-xs font-semibold uppercase tracking-[0.14em] text-espresso/70 hover:text-espresso"
                      >
                        {s.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
