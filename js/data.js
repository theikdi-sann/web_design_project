const data = {
  quiz: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Hyperlink and Text Markup Language",
        "Home Tool Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which CSS property is used for controlling the layout?",
      options: ["color", "font-size", "display"],
      answer: "display",
    },
    {
      question: "How do you declare a constant variable in JavaScript?",
      options: ["var", "let", "const"],
      answer: "const",
    },
  ],
  lessons: [
    {
      category: "HTML Basics",
      topics: [
        {
          title: "The Document Structure",
          detail_title: "HTML 1.1: Core Document Structure",
          content:
            "<h3>The Bare Bones of HTML</h3><p>Every HTML document starts with the `<!DOCTYPE html>` declaration. The content inside the `<head>` is metadata, and the visible content goes inside the `<body>`.</p><h4>Head vs. Body</h4><p>The **`<head>`** contains metadata (non-visible data) like the `<title>` and links to your CSS. The **`<body>`** contains all the visible page content, including text, images, and semantic tags like `<header>` and `<footer>`.</p>",
        },
        {
          title: "Forms and Inputs",
          detail_title: "HTML 1.2: Interactive Forms",
          content:
            "<p>The `<form>` tag is essential for collecting user input. Key input types include `type='text'`, `type='email'`, and `type='submit'`. Always use the `<label>` tag for accessibility.</p>",
        },
        {
          title: "Semantic Tags",
          detail_title: "HTML 1.3: Semantic Tags (Divs vs. Section)",
          content:
            "<h3>What is Semantic HTML?</h3><p>Semantic HTML uses tags like `<header>`, `<footer>`, `<article>`, and `<nav>` to clearly define the content's purpose, improving SEO and accessibility. Avoid using generic `<div>` tags everywhere.</p>",
        },
      ],
    },
    {
      category: "CSS Fundamentals",
      topics: [
        {
          title: "Selectors and Specificity",
          detail_title: "CSS 2.1: Selectors and Specificity",
          content:
            "<p>Specificity is the system browsers use to determine which CSS rule applies to an element. Rules are calculated based on their components: **IDs**, **Classes/Attributes**, and **Elements**.</p><h4>Best Practice</h4><p>Aim for low specificity by using clear class names.</p>",
        },
        {
          title: "The Box Model",
          detail_title: "CSS 2.2: The CSS Box Model",
          content:
            "<h3>The Foundation of Layout</h3><p>Every element in HTML is a rectangular box governed by the CSS Box Model, which consists of **Content**, **Padding** (space around content), **Border**, and **Margin** (space outside the border). Understanding this is crucial for accurate spacing and sizing.</p>",
        },
        {
          title: "Media Queries (Responsiveness)",
          detail_title: "CSS 2.3: Media Queries",
          content:
            "<p>Media Queries allow you to apply different CSS rules based on the device characteristics, most commonly screen width. The standard syntax is `@media (max-width: 768px) { ... }`.</p><h4>Mobile First</h4><p>A 'Mobile First' approach involves designing for small screens first, then using media queries to add styles for larger screens.</p>",
        },
      ],
    },
    {
      category: "JavaScript",
      topics: [
        {
          title: "Variables and Data Types",
        },
        {
          title: "DOM Manipulation",
        },
        {
          title: "Functions and Events",
        },
      ],
    },
    {
      category: "Layout Techniques",
      topics: [
        {
          title: "Flexbox Mastery",
        },
        {
          title: "CSS Grid for Pages",
        },
        {
          title: "Z-Index and Stacking Contexts",
        },
      ],
    },
  ],
};

export default data;
