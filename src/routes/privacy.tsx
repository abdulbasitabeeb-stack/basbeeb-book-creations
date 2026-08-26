import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { site } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — BASBEEB BOOK" },
      {
        name: "description",
        content:
          "How BASBEEB BOOK collects, uses and protects your information when you browse the site, subscribe to the newsletter or send an enquiry.",
      },
      { property: "og:title", content: "Privacy Policy — BASBEEB BOOK" },
      {
        property: "og:description",
        content: "How we handle your information at BASBEEB BOOK.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://basbeeb-book-creations.lovable.app/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://basbeeb-book-creations.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    heading: "Information we collect",
    body: "We only collect what you choose to give us: your name and email address when you subscribe to the newsletter, and the details you include in a contact enquiry. We do not ask for payment or identity information on this site.",
  },
  {
    heading: "How we use it",
    body: "Your email address is used to send the occasional newsletter about new titles, stories and resources. Enquiry details are used solely to reply to you. We never sell, rent or trade your information.",
  },
  {
    heading: "Analytics and cookies",
    body: "We may use privacy-respecting analytics to understand which pages are read most, in aggregate. This does not identify you personally. Any cookies used are functional or aggregate-analytics only.",
  },
  {
    heading: "Third parties",
    body: "Where a service helps us operate — for example an email delivery provider or website host — they process data only on our instruction and only as needed to provide that service.",
  },
  {
    heading: "Your choices",
    body: "You can unsubscribe from the newsletter at any time using the link in any email. You may also ask us to correct or delete the information we hold about you.",
  },
  {
    heading: "Children",
    body: "Although we publish children's books, this site is intended for adults. We do not knowingly collect information from children.",
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        intro="We keep this short and plain, because a privacy policy should be readable."
      />

      <section className="section-y">
        <div className="shell max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-serif text-2xl text-espresso">{s.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}

          <div>
            <h2 className="font-serif text-2xl text-espresso">Contact</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Questions about this policy? Email{" "}
              <a href={`mailto:${site.email}`} className="link-underline text-espresso">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
