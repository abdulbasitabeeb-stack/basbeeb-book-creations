import { img } from "./assets";

export type ArticleCategory =
  | "Stories"
  | "Inspiration"
  | "Creativity"
  | "Reading"
  | "Writing"
  | "Books"
  | "Children";

export interface Article {
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  category: ArticleCategory;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  featured?: boolean;
  popular?: boolean;
}

export const articles: Article[] = [
  {
    title: "Why Stories Matter",
    slug: "why-stories-matter",
    image: img.articleShelf,
    imageAlt: "A sunlit reading nook with a full bookshelf and a woven chair",
    category: "Stories",
    excerpt:
      "Long before books, we had stories. They are still the fastest way to move an idea from one mind into another.",
    content: [
      "A fact tells you what happened. A story tells you what it felt like — and feeling is what we remember. That is why the lesson buried inside a good story outlives the lecture that stated it plainly.",
      "Stories also make room for disagreement. A reader can sit inside a character's decision, test it against their own life, and arrive somewhere the author never planned. That is not a weakness of storytelling; it is the whole point.",
      "At BASBEEB BOOK we build every title around one question: what will still be true for the reader a week after they close it? If we cannot answer that, the manuscript goes back on the desk.",
    ],
    date: "2026-07-18",
    author: "Abdul Basit Abeeb",
    featured: true,
    popular: true,
  },
  {
    title: "How Books Can Inspire Young Readers",
    slug: "how-books-can-inspire-young-readers",
    image: img.articleReading,
    imageAlt: "A parent and child reading a picture book together on a sunlit sofa",
    category: "Children",
    excerpt:
      "Children rarely fall in love with reading because they were told to. They fall in love because someone made it feel like an event.",
    content: [
      "The first job of a children's book is not to teach. It is to be wanted — picked up, carried around, requested again at bedtime. Everything else follows from that.",
      "Choose books slightly above a child's independent reading level and read them aloud. The vocabulary lands without effort, and the shared pace turns reading into company rather than homework.",
      "Ask open questions afterwards: what would you have done? Was that fair? Children who are asked what they think about a story begin to believe their thinking matters.",
    ],
    date: "2026-06-30",
    author: "BASBEEB BOOK",
    popular: true,
  },
  {
    title: "Making Time for Creativity",
    slug: "making-time-for-creativity",
    image: img.articleWriting,
    imageAlt: "An open blank notebook with a pen and coffee on warm cream linen",
    category: "Creativity",
    excerpt:
      "Creative work does not need a free afternoon. It needs a repeatable twenty minutes and permission to be imperfect.",
    content: [
      "Most unfinished projects are not blocked by talent or ideas. They are blocked by waiting — for the right mood, the right desk, the uninterrupted weekend that never arrives.",
      "Shrink the commitment until it is almost embarrassing. Twenty minutes, same time, same place. The consistency does the work that motivation keeps promising to do.",
      "Then protect the ending. Finish something small and let people see it. A finished imperfect thing teaches you more than a perfect thing still in your head.",
    ],
    date: "2026-06-12",
    author: "Abdul Basit Abeeb",
    popular: true,
  },
  {
    title: "Building a Reading Habit That Lasts",
    slug: "building-a-reading-habit-that-lasts",
    image: img.aboutStudio,
    imageAlt: "A writing desk with stacked books, an open journal and a warm cup of coffee",
    category: "Reading",
    excerpt:
      "Reading more is rarely about discipline. It is about friction — and removing it one small step at a time.",
    content: [
      "Keep the book where your hands already are: the kitchen table, the bag, the bedside. Most reading is lost to the ten seconds it takes to go and find the book.",
      "Abandon books freely. A book you are enduring is quietly training you to avoid reading altogether.",
      "Track chapters, not hours. Progress you can see is progress you keep.",
    ],
    date: "2026-05-22",
    author: "BASBEEB BOOK",
  },
  {
    title: "Notes on Writing a First Draft",
    slug: "notes-on-writing-a-first-draft",
    image: img.heroBooks,
    imageAlt: "A stack of hardcover books with one open on top in warm editorial light",
    category: "Writing",
    excerpt:
      "The first draft is not the book. It is the raw material the book will eventually be carved from.",
    content: [
      "Write the draft badly and quickly. Editing a weak page is straightforward; editing a blank one is not possible.",
      "Leave notes to yourself in brackets rather than stopping to research. Momentum is the scarcest resource in a first draft.",
      "When you finish, put it away for two weeks. Distance is the cheapest editor you will ever hire.",
    ],
    date: "2026-04-29",
    author: "Abdul Basit Abeeb",
  },
  {
    title: "What Makes a Book Worth Keeping",
    slug: "what-makes-a-book-worth-keeping",
    image: img.dontRush,
    imageAlt: "A traveller walking an open road beneath a golden sunset",
    category: "Books",
    excerpt:
      "Some books are read once. A few earn a permanent place on the shelf. The difference is rarely the plot.",
    content: [
      "Keepable books tend to be generous. They give the reader something to use — a phrase, a frame, a way of seeing an ordinary week differently.",
      "They also respect time. Length is not depth, and a tight two hundred pages outlives a padded four hundred.",
      "We design BASBEEB BOOK titles to be re-openable: short chapters, clear structure, and something worth underlining on most spreads.",
    ],
    date: "2026-03-15",
    author: "BASBEEB BOOK",
  },
];

export const articleCategories = [
  "All",
  "Stories",
  "Inspiration",
  "Creativity",
  "Reading",
  "Writing",
  "Books",
  "Children",
] as const;

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const featuredArticle = articles.find((a) => a.featured) ?? articles[0];
export const latestArticles = articles.slice(0, 3);
export const popularArticles = articles.filter((a) => a.popular);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
