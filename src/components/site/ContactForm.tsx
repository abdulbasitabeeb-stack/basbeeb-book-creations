import { useState } from "react";

const subjects = [
  "General enquiry",
  "Collaboration",
  "Book feedback",
  "Publishing question",
  "Press",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  const field =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-accent";
  const labelCls =
    "mb-2 block text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={field} placeholder="Your full name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelCls} htmlFor="subject">
          Subject
        </label>
        <select id="subject" name="subject" className={field} defaultValue={subjects[0]}>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className={labelCls} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className={`${field} resize-y`}
          placeholder="Tell us a little about your enquiry…"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
        >
          Send message
        </button>
        {sent && (
          <p role="status" className="text-sm text-espresso">
            Thank you — your message has been noted. We reply within two working days.
          </p>
        )}
      </div>
    </form>
  );
}
