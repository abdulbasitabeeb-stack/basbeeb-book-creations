export type ResourceCategory =
  | "Writing"
  | "Reading"
  | "Creativity"
  | "Children's Activities"
  | "Book Resources"
  | "Guides";

export interface Resource {
  title: string;
  slug: string;
  category: ResourceCategory;
  description: string;
  format: string;
  downloadUrl: string;
  available: boolean;
}

export const resources: Resource[] = [
  {
    title: "Writing Resources",
    slug: "writing-resources",
    category: "Writing",
    description:
      "Prompts, outlines, and drafting worksheets for writers who want to finish what they start.",
    format: "PDF pack",
    downloadUrl: "#",
    available: true,
  },
  {
    title: "Reading Resources",
    slug: "reading-resources",
    category: "Reading",
    description:
      "Reading logs, book-club question sets, and seasonal reading lists for every kind of reader.",
    format: "PDF pack",
    downloadUrl: "#",
    available: true,
  },
  {
    title: "Creative Guides",
    slug: "creative-guides",
    category: "Creativity",
    description:
      "Short guides on building creative routines, protecting focus, and finishing personal projects.",
    format: "Guide series",
    downloadUrl: "#",
    available: true,
  },
  {
    title: "Printable Resources",
    slug: "printable-resources",
    category: "Children's Activities",
    description:
      "Colouring pages, story maps, and printable activities built around BASBEEB BOOK stories.",
    format: "Printable PDF",
    downloadUrl: "#",
    available: true,
  },
  {
    title: "Bedtime Story Routine Cards",
    slug: "bedtime-story-routine-cards",
    category: "Children's Activities",
    description:
      "A simple card set that turns the last twenty minutes of the day into a reading ritual.",
    format: "Printable cards",
    downloadUrl: "#",
    available: false,
  },
  {
    title: "First Draft Checklist",
    slug: "first-draft-checklist",
    category: "Writing",
    description:
      "A one-page checklist for taking a messy first draft through to a clean second one.",
    format: "One-page PDF",
    downloadUrl: "#",
    available: true,
  },
  {
    title: "Book Club Starter Kit",
    slug: "book-club-starter-kit",
    category: "Book Resources",
    description:
      "Everything needed to run a small book club: invitations, agendas, and discussion frameworks.",
    format: "Starter kit",
    downloadUrl: "#",
    available: false,
  },
  {
    title: "Publishing Basics Guide",
    slug: "publishing-basics-guide",
    category: "Guides",
    description:
      "A plain-language walkthrough of self-publishing: formats, covers, pricing, and launch planning.",
    format: "Guide",
    downloadUrl: "#",
    available: true,
  },
];

export const resourceCategories = [
  "All",
  "Writing",
  "Reading",
  "Creativity",
  "Children's Activities",
  "Book Resources",
  "Guides",
] as const;
