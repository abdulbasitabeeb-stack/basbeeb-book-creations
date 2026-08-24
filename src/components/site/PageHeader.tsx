import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, intro, children }: PageHeaderProps) {
  return (
    <section className="paper border-b border-border/70">
      <div className="shell py-16 sm:py-24">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-2 mt-5 max-w-3xl">{title}</h1>
          {intro && <p className="lede mt-6 max-w-2xl">{intro}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  action?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  action,
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-6 ${
        align === "center"
          ? "items-center text-center"
          : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={align === "center" ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="display-2 mt-4">{title}</h2>
        {intro && <p className="lede mt-4">{intro}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
