import { useState } from "react";

interface NewsletterProps {
  variant?: "footer" | "panel";
}

export function Newsletter({ variant = "panel" }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  };

  const dark = variant === "panel";

  return (
    <div
      className={`rounded-2xl px-6 py-10 sm:px-10 ${
        dark ? "bg-primary text-primary-foreground shadow-lift" : "border border-border bg-card"
      }`}
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className={`eyebrow ${dark ? "text-accent" : ""}`}>Newsletter</p>
          <h2
            className={`mt-3 font-serif text-2xl sm:text-3xl ${dark ? "text-primary-foreground" : ""}`}
          >
            New books, stories and free resources
          </h2>
          <p
            className={`mt-3 max-w-md text-sm leading-relaxed ${
              dark ? "text-primary-foreground/70" : "text-muted-foreground"
            }`}
          >
            Join the BASBEEB BOOK reading list. Occasional letters only — new releases, printable
            resources, and early looks at what we are writing.
          </p>
        </div>

        {done ? (
          <p
            className={`text-sm font-medium ${dark ? "text-accent" : "text-espresso"}`}
            role="status"
          >
            Thank you — you're on the list. Look out for the first letter soon.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor={`nl-${variant}`}>
              Email address
            </label>
            <input
              id={`nl-${variant}`}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className={`min-w-0 flex-1 rounded-full px-5 py-3.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-accent ${
                dark
                  ? "bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
                  : "border border-input bg-background text-foreground placeholder:text-muted-foreground"
              }`}
            />
            <button
              type="submit"
              className={`shrink-0 rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all hover:-translate-y-0.5 ${
                dark
                  ? "bg-accent text-accent-foreground"
                  : "bg-primary text-primary-foreground shadow-soft hover:shadow-lift"
              }`}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
