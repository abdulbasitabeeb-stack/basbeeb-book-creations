import { img } from "./assets";

export type BookCategory =
  | "Children's Books"
  | "Stories"
  | "Guides"
  | "Inspirational"
  | "Ebooks";

export interface Book {
  title: string;
  slug: string;
  cover: string;
  coverAlt: string;
  description: string;
  longDescription: string[];
  discover: string[];
  audience: string;
  category: BookCategory;
  author: string;
  ageRange?: string;
  publicationDate: string;
  purchaseUrl: string;
  featured: boolean;
  comingSoon: boolean;
}

/**
 * Add new BASBEEB BOOK titles here — every page reads from this list.
 */
export const books: Book[] = [
  {
    title: "The Road to Success I Never Expected",
    slug: "the-road-to-success-i-never-expected",
    cover: img.roadToSuccess,
    coverAlt:
      "Book cover of The Road to Success I Never Expected showing a traveller walking a mountain road at sunrise",
    description:
      "Lessons from an unexpected journey of growth, resilience, and success.",
    longDescription: [
      "Success rarely arrives the way we imagine it. This book follows a winding, honest road — the detours, the quiet setbacks, the small decisions that eventually change everything.",
      "Written in short, reflective chapters, it turns lived experience into practical encouragement for anyone who feels their progress is slower than the plan they wrote for themselves.",
    ],
    discover: [
      "How to keep moving when progress feels invisible",
      "A gentler, more sustainable definition of ambition",
      "Practical habits that compound quietly over years",
      "Reflection prompts at the close of every chapter",
    ],
    audience:
      "Readers building something of their own — students, early-career professionals, creatives, and anyone in the middle of a difficult season.",
    category: "Inspirational",
    author: "Abdul Basit Abeeb",
    publicationDate: "2026-01-14",
    purchaseUrl: "#",
    featured: true,
    comingSoon: false,
  },
  {
    title: "The Little Bear Who Was Afraid to Try",
    slug: "the-little-bear-who-was-afraid-to-try",
    cover: img.littleBear,
    coverAlt:
      "Children's book cover of The Little Bear Who Was Afraid to Try, a brown bear in a blue scarf in a green valley",
    description:
      "A gentle story about courage, first attempts, and the friends who cheer you on.",
    longDescription: [
      "Little Bear wants to climb the green hill more than anything — but what if he slips? What if he is not brave enough? With a blue scarf, a butterfly, and a little help from the forest, he learns that trying is its own kind of brave.",
      "A warm read-aloud story for bedtime, classrooms, and any child standing at the bottom of their own hill.",
    ],
    discover: [
      "A simple, repeatable message about courage",
      "Read-aloud rhythm designed for bedtime",
      "Gentle illustrations children return to again and again",
      "Conversation questions for parents and teachers",
    ],
    audience:
      "Children aged 3–7, parents, caregivers, and early-years teachers looking for a kind story about fear and first tries.",
    category: "Children's Books",
    author: "Abdul Basit Abeeb",
    ageRange: "Ages 3–7",
    publicationDate: "2026-03-02",
    purchaseUrl: "#",
    featured: true,
    comingSoon: false,
  },
  {
    title: "Don't Rush Your Journey",
    slug: "dont-rush-your-journey",
    cover: img.dontRush,
    coverAlt:
      "Cover of Don't Rush Your Journey showing a walker on an open road beneath a golden sunset",
    description:
      "Short reflections on patience, pace, and trusting the long road.",
    longDescription: [
      "A pocket-sized collection of reflections for people who are tired of comparing their timeline to everyone else's. Each piece is short enough to read in a morning and quiet enough to stay with you all day.",
      "Part essay, part encouragement, entirely a reminder that arriving late is still arriving.",
    ],
    discover: [
      "Fifty short reflections on patience and pace",
      "Journaling space after each section",
      "A calmer relationship with comparison",
      "Language for seasons that feel slow",
    ],
    audience:
      "Anyone navigating a slow season — graduates, career changers, founders, and readers who love short-form inspiration.",
    category: "Stories",
    author: "Abdul Basit Abeeb",
    publicationDate: "2025-11-08",
    purchaseUrl: "#",
    featured: true,
    comingSoon: false,
  },
  {
    title: "Little Fox's Big Adventure",
    slug: "little-foxs-big-adventure",
    cover: img.coverFox,
    coverAlt:
      "Children's book cover illustration of a small fox carrying a lantern along a forest path at dusk",
    description:
      "A curious fox, one small lantern, and a forest full of new friends.",
    longDescription: [
      "When Little Fox lifts his lantern and steps onto the forest path, the dark stops being frightening and starts being interesting. Owl, Rabbit and Hedgehog each teach him something he could not have learned at home.",
      "A story about curiosity, kindness, and the quiet bravery of going a little further than yesterday.",
    ],
    discover: [
      "A joyful introduction to curiosity and exploring",
      "Friendly characters children remember by name",
      "Rich, painterly forest illustrations",
      "A calm, reassuring ending for bedtime",
    ],
    audience:
      "Children aged 4–8 who love animals, adventure, and stories read one more time before sleep.",
    category: "Children's Books",
    author: "BASBEEB BOOK",
    ageRange: "Ages 4–8",
    publicationDate: "2026-04-20",
    purchaseUrl: "#",
    featured: true,
    comingSoon: false,
  },
  {
    title: "Bunny and the Red Balloon",
    slug: "bunny-and-the-red-balloon",
    cover: img.coverBunny,
    coverAlt:
      "Children's book cover illustration of a grey bunny holding a red balloon in a moonlit meadow",
    description:
      "A tender bedtime story about holding on, letting go, and looking up.",
    longDescription: [
      "Bunny is given a red balloon and decides never, ever to let it go. But the meadow is wide, the fireflies are bright, and some things are more beautiful when they are shared.",
      "A soft, moonlit story about generosity and the small goodbyes that make room for something new.",
    ],
    discover: [
      "A gentle lesson in sharing and letting go",
      "Soothing bedtime pacing and language",
      "Moonlit illustrations full of small details to find",
      "A story that invites questions afterwards",
    ],
    audience:
      "Children aged 2–6 and the grown-ups who read to them at the end of the day.",
    category: "Children's Books",
    author: "BASBEEB BOOK",
    ageRange: "Ages 2–6",
    publicationDate: "2026-05-11",
    purchaseUrl: "#",
    featured: false,
    comingSoon: false,
  },
  {
    title: "The Everyday Writer's Guide",
    slug: "the-everyday-writers-guide",
    cover: img.articleWriting,
    coverAlt:
      "Cover of The Everyday Writer's Guide showing an open notebook, pen and coffee on warm linen",
    description:
      "A practical guide to building a writing habit that survives real life.",
    longDescription: [
      "Most writing advice assumes you have hours. This guide assumes you have twenty minutes, a full inbox, and a good idea you keep postponing.",
      "It walks through drafting, editing, finishing, and sharing your work — with worksheets you can print and reuse for every project.",
    ],
    discover: [
      "A twenty-minute daily writing framework",
      "How to finish drafts instead of restarting them",
      "Editing checklists for clarity and rhythm",
      "Simple ways to share work before it feels ready",
    ],
    audience:
      "Aspiring writers, students, bloggers, and anyone with a manuscript living in a notes app.",
    category: "Guides",
    author: "BASBEEB BOOK",
    publicationDate: "2026-02-06",
    purchaseUrl: "#",
    featured: false,
    comingSoon: false,
  },
  {
    title: "Reading Together: A Family Ebook",
    slug: "reading-together-a-family-ebook",
    cover: img.articleReading,
    coverAlt:
      "Cover of Reading Together showing a parent and child reading a picture book in warm light",
    description:
      "An ebook of routines, prompts, and ideas for raising a reader at home.",
    longDescription: [
      "Reading together is one of the simplest things a family can do — and one of the easiest to lose to busy evenings. This ebook rebuilds the habit gently.",
      "Includes age-by-age suggestions, ten-minute routines, and conversation prompts that turn a picture book into a proper conversation.",
    ],
    discover: [
      "Ten-minute reading routines for busy homes",
      "Age-by-age book selection guidance",
      "Questions that spark real conversation",
      "Ideas for reluctant and restless readers",
    ],
    audience:
      "Parents, caregivers, and educators building a reading culture with children of any age.",
    category: "Ebooks",
    author: "BASBEEB BOOK",
    publicationDate: "2026-06-01",
    purchaseUrl: "#",
    featured: false,
    comingSoon: false,
  },
  {
    title: "Bear on the Hill",
    slug: "bear-on-the-hill",
    cover: img.bearSunset,
    coverAlt:
      "Illustration of a small bear in a blue scarf sitting on a hillside watching a golden sunset",
    description:
      "The next chapter in Little Bear's story — arriving soon from BASBEEB BOOK.",
    longDescription: [
      "Little Bear climbed the hill. Now he sits at the top and watches the valley change colour, wondering what he should try next.",
      "A quiet sequel about what happens after the brave thing is done.",
    ],
    discover: [
      "A follow-up to The Little Bear Who Was Afraid to Try",
      "A calm, reflective story for older picture-book readers",
      "New illustrated landscapes from the same world",
      "A gentle message about rest and what comes next",
    ],
    audience: "Children aged 3–7 and readers of the first Little Bear story.",
    category: "Children's Books",
    author: "Abdul Basit Abeeb",
    ageRange: "Ages 3–7",
    publicationDate: "2026-11-01",
    purchaseUrl: "#",
    featured: false,
    comingSoon: true,
  },
  {
    title: "Small Ideas, Long Lives",
    slug: "small-ideas-long-lives",
    cover: img.littleBearAlt,
    coverAlt: "Placeholder cover artwork for the forthcoming title Small Ideas, Long Lives",
    description:
      "A forthcoming collection of essays on creativity, patience, and making things that last.",
    longDescription: [
      "A collection in progress: essays about the small ideas that quietly outlive the loud ones.",
      "Details, cover artwork, and release date will be announced to the BASBEEB BOOK newsletter first.",
    ],
    discover: [
      "Essays on creative patience",
      "Notes from the making of BASBEEB BOOK",
      "Prompts for your own long projects",
      "Early access for newsletter readers",
    ],
    audience: "Creative people building something slowly and deliberately.",
    category: "Inspirational",
    author: "Abdul Basit Abeeb",
    publicationDate: "2027-02-01",
    purchaseUrl: "#",
    featured: false,
    comingSoon: true,
  },
];

export const bookCategories = [
  "All",
  "Children's Books",
  "Stories",
  "Guides",
  "Inspirational",
  "Ebooks",
] as const;

export const getBook = (slug: string) => books.find((b) => b.slug === slug);
export const publishedBooks = books.filter((b) => !b.comingSoon);
export const featuredBooks = books.filter((b) => b.featured && !b.comingSoon);
export const childrensBooks = books.filter(
  (b) => b.category === "Children's Books" && !b.comingSoon,
);
export const upcomingBooks = books.filter((b) => b.comingSoon);
