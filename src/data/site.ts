export const site = {
  name: "BASBEEB BOOK",
  tagline: "Create. Write. Inspire.",
  description:
    "BASBEEB BOOK is a creative publishing space for books, stories, ideas, and creativity. Discover children's books, ebooks, inspiring stories, helpful guides, and creative resources made to inform, entertain, and inspire.",
  email: "hello@basbeebbook.com",
  social: [
    { name: "Instagram", url: "https://www.instagram.com/basbeebbook/" },
    { name: "Pinterest", url: "https://www.pinterest.com/abdulbasitabeeb/" },
    { name: "Facebook", url: "#" },
    { name: "YouTube", url: "#" },
  ],
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Books", to: "/books" },
  { label: "Children's Books", to: "/childrens-books" },
  { label: "Stories", to: "/stories" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
] as const;
