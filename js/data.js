// Combined data file with quiz and lesson data
const data = {
  quizzes: [
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: {
        a: "&lt;script&gt;",
        b: "&lt;style&gt;",
        c: "&lt;css&gt;",
      },
      answer: "b",
    },
    {
      question: "Which property is used to change the background color in CSS?",
      options: {
        a: "color",
        b: "bgcolor",
        c: "background-color",
      },
      answer: "c",
    },
    {
      question: "What is the correct syntax for referring to an external script called 'app.js'?",
      options: {
        a: "&lt;script src='app.js'&gt;",
        b: "&lt;script href='app.js'&gt;",
        c: "&lt;script name='app.js'&gt;",
      },
      answer: "a",
    },
    {
      question: "How do you write 'Hello World' in an alert box in JavaScript?",
      options: {
        a: "msg('Hello World');",
        b: "alert('Hello World');",
        c: "msgBox('Hello World');",
      },
      answer: "b",
    },
    {
      question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      options: {
        a: "title",
        b: "src",
        c: "alt",
      },
      answer: "c",
    },
    {
      question: "Which CSS property controls the text size?",
      options: {
        a: "font-style",
        b: "text-size",
        c: "font-size",
      },
      answer: "c",
    },
    {
      question: "Which operator is used to check if two values are equal in value and type in JavaScript?",
      options: {
        a: "==",
        b: "===",
        c: "=",
      },
      answer: "b",
    },
    {
      question: "In HTML, which character is used to indicate an end tag?",
      options: {
        a: "/",
        b: "*",
        c: "&lt;",
      },
      answer: "a",
    },
    {
      question: "How do you select an element with id 'demo' in CSS?",
      options: {
        a: ".demo",
        b: "#demo",
        c: "demo",
      },
      answer: "b",
    },
    {
      question: "Which JavaScript method is used to write into the browser console?",
      options: {
        a: "console.write()",
        b: "console.output()",
        c: "console.log()",
      },
      answer: "c",
    },
    {
      question: "Which HTML element is used to define the title of a document?",
      options: {
        a: "&lt;meta&gt;",
        b: "&lt;title&gt;",
        c: "&lt;head&gt;",
      },
      answer: "b",
    },
    {
      question: "What is the default value of the position property in CSS?",
      options: {
        a: "relative",
        b: "fixed",
        c: "static",
      },
      answer: "c",
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      options: {
        a: "onchange",
        b: "onclick",
        c: "onmouseover",
      },
      answer: "b",
    },
    {
      question: "Which input type defines a slider control?",
      options: {
        a: "slider",
        b: "range",
        c: "controls",
      },
      answer: "b",
    },
    {
      question: "In JavaScript, what is the result of '5' + 2?",
      options: {
        a: "7",
        b: "52",
        c: "Error",
      },
      answer: "b",
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
          detail_title: "JS 3.1: Variables and Data Types",
          content:
            "<h3>Understanding Variables</h3><p>Variables store data values. JavaScript has three ways to declare variables: `var`, `let`, and `const`. Use `const` by default, `let` when you need to reassign, and avoid `var`.</p>",
        },
        {
          title: "DOM Manipulation",
          detail_title: "JS 3.2: DOM Manipulation",
          content:
            "<p>The Document Object Model (DOM) allows you to interact with HTML elements using JavaScript. Common methods include `getElementById()`, `querySelector()`, and `addEventListener()`.</p>",
        },
        {
          title: "Functions and Events",
          detail_title: "JS 3.3: Functions and Events",
          content:
            "<p>Functions are reusable blocks of code. Events allow you to respond to user interactions like clicks, typing, and form submissions.</p>",
        },
      ],
    },
    {
      category: "Layout Techniques",
      topics: [
        {
          title: "Flexbox Mastery",
          detail_title: "Layout 4.1: Flexbox",
          content:
            "<p>Flexbox is a powerful layout tool for one-dimensional layouts. Use `display: flex` on the container and control alignment with `justify-content` and `align-items`.</p>",
        },
        {
          title: "CSS Grid for Pages",
          detail_title: "Layout 4.2: CSS Grid",
          content:
            "<p>CSS Grid is for two-dimensional layouts. Define rows and columns using `grid-template-rows` and `grid-template-columns`.</p>",
        },
        {
          title: "Z-Index and Stacking Contexts",
          detail_title: "Layout 4.3: Z-Index",
          content:
            "<p>Control the stacking order of elements with the `z-index` property. Higher values appear on top. Works with positioned elements.</p>",
        },
      ],
    },
  ],

gameLevels: [
    {
        id: 1,
        type: 'flex',
        title: 'Level 1: Launch Procedure',
        description: 'Admiral! The scout ships are scattered. Use Flexbox to align them centrally in the hangar bay for launch.',
        hint: 'Use `justify-content`',
        targetCSS: 'justify-content: center;',
        containerStyles: { display: 'flex' },
        wrapperSelector: '.hangar-bay',
        ships: 3,
        // For validation regex
        validProps: ['justify-content'],
        validValues: ['center']
    },
    {
        id: 2,
        type: 'flex',
        title: 'Level 2: Flank Formation',
        description: 'We need to cover the entire width of the sector. Spread the ships out with equal space between them.',
        hint: 'Try `justify-content` with `space-between`',
        targetCSS: 'justify-content: space-between;',
        containerStyles: { display: 'flex' },
        wrapperSelector: '.hangar-bay',
        ships: 3,
        validProps: ['justify-content'],
        validValues: ['space-between']
    },
    {
        id: 3,
        type: 'flex',
        title: 'Level 3: Docking Alignment',
        description: 'The docking clamps are at the bottom of the bay. Align the ships to the END of the cross axis.',
        hint: 'Use `align-items`',
        targetCSS: 'align-items: flex-end;',
        containerStyles: { display: 'flex', height: '100%' }, // Ensure height for align-items
        wrapperSelector: '.hangar-bay',
        ships: 3,
        validProps: ['align-items'],
        validValues: ['flex-end']
    },
    {
        id: 4,
        type: 'grid',
        title: 'Level 4: Defense Grid',
        description: 'The asteroid field is dense. Switch to Grid mode. Create a 3-column layout to cover all lanes.',
        hint: 'Use `display: grid` and `grid-template-columns`',
        targetCSS: 'display: grid; grid-template-columns: 1fr 1fr 1fr;',
        containerStyles: { display: 'block' }, // Reset to block, user sets grid
        wrapperSelector: '.sector-grid',
        ships: 6,
        validProps: ['display', 'grid-template-columns'],
        validValues: ['grid', '1fr 1fr 1fr', 'repeat(3, 1fr)']
    },
    {
        id: 5,
        type: 'grid',
        title: 'Level 5: Heavy Cruiser',
        description: 'The Flagship needs more space. Make the first child span 2 columns.',
        hint: 'Target the specific ship with `grid-column`',
        targetCSS: 'grid-column: span 2;',
        containerStyles: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '10px'
        },
        wrapperSelector: '.ship:first-child',
        isChildLevel: true, // Styling a child, not container
        ships: 5,
        validProps: ['grid-column'],
        validValues: ['span 2', '1 / 3', '1/3']
    }
],

};

