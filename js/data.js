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
lessons : [
  {
    category: "HTML Basics & Accessibility",
    topics: [
      {
        title: "The Document Structure",
        detail_title: "HTML 1.1: Core Document Structure",
        content:
          "<h3>The Bare Bones of HTML</h3><p>Every HTML document starts with the <code>&lt;!DOCTYPE html&gt;</code> declaration. The content inside the <code>&lt;head&gt;</code> is metadata, and the visible content goes inside the <code>&lt;body&gt;</code>.</p>",
      },
      {
        title: "Forms and Inputs",
        detail_title: "HTML 1.2: Interactive Forms",
        content:
          "<p>The <code>&lt;form&gt;</code> tag is essential for collecting user input. Key input types include <code>type='text'</code>, <code>type='email'</code>, and <code>type='submit'</code>. Always use the <code>&lt;label&gt;</code> tag for accessibility.</p>",
      },
      {
        title: "Semantic Tags",
        detail_title: "HTML 1.3: Semantic Tags",
        content:
          "<h3>What is Semantic HTML?</h3><p>Semantic HTML uses tags like <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;nav&gt;</code> to clearly define the content's purpose, improving SEO and accessibility.</p>",
      },
      {
        title: "Multimedia: Audio & Video",
        detail_title: "HTML 1.4: Multimedia Elements",
        content:
          "<p>Modern HTML supports native media playback using the <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> tags. You can add controls, autoplay, and multiple sources for cross-browser compatibility.</p>",
      },
      {
        title: "Tables for Data",
        detail_title: "HTML 1.5: Data Tables",
        content:
          "<p>Use <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, and <code>&lt;td&gt;</code> to display tabular data. Never use tables for page layout. Always include a <code>&lt;caption&gt;</code> for accessibility.</p>",
      },
      {
        title: "Web Accessibility (ARIA)",
        detail_title: "HTML 1.6: Introduction to ARIA",
        content:
          "<h3>Accessible Rich Internet Applications</h3><p>ARIA attributes (like <code>aria-label</code> or <code>role='alert'</code>) help screen readers understand dynamic content that standard HTML tags cannot describe.</p>",
      },
      {
        title: "Favicons and Meta Tags",
        detail_title: "HTML 1.7: Metadata Mastery",
        content:
          "<p>Meta tags in the <code>&lt;head&gt;</code> control viewport settings for mobile (<code>&lt;meta name='viewport'&gt;</code>) and SEO descriptions. Favicons provide the small icon seen in browser tabs.</p>",
      },
    ],
  },
  {
    category: "CSS Fundamentals & Layout",
    topics: [
      {
        title: "Selectors and Specificity",
        detail_title: "CSS 2.1: Selectors and Specificity",
        content:
          "<p>Specificity is the system browsers use to determine which CSS rule applies. Rules are calculated based on IDs, Classes, and Elements.</p>",
      },
      {
        title: "The Box Model",
        detail_title: "CSS 2.2: The CSS Box Model",
        content:
          "<h3>The Foundation of Layout</h3><p>Every element is a box consisting of **Content**, **Padding**, **Border**, and **Margin**.</p>",
      },
      {
        title: "Media Queries",
        detail_title: "CSS 2.3: Responsive Design",
        content:
          "<p>Media Queries allow styles to change based on device width: <code>@media (max-width: 768px) { ... }</code>. This is the core of responsive design.</p>",
      },
      {
        title: "Flexbox Mastery",
        detail_title: "CSS 2.4: Flexbox Layouts",
        content:
          "<p>Flexbox manages layout in one dimension (rows or columns). Key properties: <code>justify-content</code> (main axis) and <code>align-items</code> (cross axis).</p>",
      },
      {
        title: "CSS Grid",
        detail_title: "CSS 2.5: CSS Grid Systems",
        content:
          "<p>CSS Grid handles two-dimensional layouts (rows AND columns). Use <code>grid-template-columns</code> to define your structure.</p>",
      },
      {
        title: "Positioning Elements",
        detail_title: "CSS 2.6: Position Property",
        content:
          "<h3>Static, Relative, Absolute, Fixed</h3><p>Understanding <code>position: absolute</code> (relative to the nearest positioned ancestor) vs <code>position: fixed</code> (relative to the viewport) is crucial for UI design.</p>",
      },
      {
        title: "Pseudo-classes",
        detail_title: "CSS 2.7: Hover and Focus States",
        content:
          "<p>Pseudo-classes like <code>:hover</code>, <code>:focus</code>, and <code>:nth-child()</code> allow you to style elements based on their state or position in the DOM without adding new classes.</p>",
      },
      {
        title: "CSS Variables",
        detail_title: "CSS 2.8: Custom Properties",
        content:
          "<p>CSS Variables (<code>--main-color: #333;</code>) allow you to store and reuse values throughout your stylesheet, making theming and maintenance much easier.</p>",
      },
      {
        title: "Transitions and Animations",
        detail_title: "CSS 2.9: Motion in CSS",
        content:
          "<p>Use <code>transition</code> for smooth state changes and <code>@keyframes</code> for complex, multi-step animations.</p>",
      },
    ],
  },
  {
    category: "JavaScript Essentials",
    topics: [
      {
        title: "Variables and Data Types",
        detail_title: "JS 3.1: Variables and Scope",
        content:
          "<p>Variables store data. Use <code>const</code> for constants and <code>let</code> for variables that change. Avoid the older <code>var</code> keyword to prevent scoping issues.</p>",
      },
      {
        title: "DOM Manipulation",
        detail_title: "JS 3.2: The DOM",
        content:
          "<p>The DOM is the bridge between JS and HTML. Select elements with <code>document.querySelector('.class')</code> and modify them with <code>.classList.add()</code> or <code>.innerHTML</code>.</p>",
      },
      {
        title: "Functions",
        detail_title: "JS 3.3: Functions & Arrows",
        content:
          "<h3>Reusable Logic</h3><p>Functions group code. Modern JS uses Arrow Functions: <code>const add = (a, b) =&gt; a + b;</code> for cleaner syntax.</p>",
      },
      {
        title: "Arrays and Methods",
        detail_title: "JS 3.4: Array Manipulation",
        content:
          "<p>Arrays hold lists of data. Master high-order methods like <code>.map()</code> (transform), <code>.filter()</code> (select), and <code>.reduce()</code> (accumulate) for efficient data handling.</p>",
      },
      {
        title: "Objects and JSON",
        detail_title: "JS 3.5: Objects",
        content:
          "<p>Objects store key-value pairs. JSON (JavaScript Object Notation) is the standard format for exchanging data between a server and a web page.</p>",
      },
      {
        title: "Loops and Logic",
        detail_title: "JS 3.6: Control Flow",
        content:
          "<p>Control program flow with <code>if/else</code> statements, <code>switch</code> cases, and loops like <code>for</code> and <code>while</code>. The <code>for...of</code> loop is great for arrays.</p>",
      },
      {
        title: "Event Listeners",
        detail_title: "JS 3.7: Handling Events",
        content:
          "<p>Interactive webs use <code>addEventListener('click', callback)</code>. Understand Event Bubbling and <code>event.preventDefault()</code> to control browser behavior.</p>",
      },
    ],
  },
  {
    category: "Advanced JavaScript",
    topics: [
      {
        title: "Asynchronous JS",
        detail_title: "JS 4.1: Callbacks & Promises",
        content:
          "<h3>Handling Delays</h3><p>JavaScript is single-threaded. Promises allow you to handle operations that take time (like fetching data) without freezing the UI.</p>",
      },
      {
        title: "Async / Await",
        detail_title: "JS 4.2: Modern Async Syntax",
        content:
          "<p><code>async/await</code> is syntactic sugar over Promises, making asynchronous code look and behave like synchronous code, improving readability.</p>",
      },
      {
        title: "Fetch API",
        detail_title: "JS 4.3: Making HTTP Requests",
        content:
          "<p>The <code>fetch()</code> API allows you to get data from servers. Example: <code>const res = await fetch('https://api.com/data');</code>.</p>",
      },
      {
        title: "ES6+ Features",
        detail_title: "JS 4.4: Destructuring & Spread",
        content:
          "<p>Destructuring extracts values from arrays/objects: <code>const { name } = user;</code>. The Spread operator (<code>...</code>) expands arrays or objects.</p>",
      },
      {
        title: "Modules",
        detail_title: "JS 4.5: Import and Export",
        content:
          "<p>Split code into multiple files using <code>export</code> and <code>import</code>. This keeps your codebase organized and maintainable.</p>",
      },
      {
        title: "Local Storage",
        detail_title: "JS 4.6: Client-Side Storage",
        content:
          "<p><code>localStorage</code> allows you to save key-value pairs in the browser that persist even after the page is refreshed.</p>",
      },
      {
        title: "Error Handling",
        detail_title: "JS 4.7: Try, Catch, Finally",
        content:
          "<p>Wrap risky code in <code>try { ... } catch (error) { ... }</code> blocks to prevent your application from crashing when errors occur.</p>",
      },
      {
        title: "The 'this' Keyword",
        detail_title: "JS 4.8: Understanding Scope Context",
        content:
          "<p><code>this</code> refers to the object executing the current function. Its value changes depending on how the function is called.</p>",
      },
    ],
  },
  {
    category: "Tooling & Version Control",
    topics: [
      {
        title: "Command Line Basics",
        detail_title: "Tools 5.1: The Terminal",
        content:
          "<h3>Navigating without a Mouse</h3><p>Essential commands: <code>cd</code> (change directory), <code>ls</code> (list files), and <code>mkdir</code> (make directory). The terminal is a dev's best friend.</p>",
      },
      {
        title: "Git Basics",
        detail_title: "Tools 5.2: Version Control",
        content:
          "<p>Git tracks changes in your code. <code>git init</code> starts a repo, <code>git add</code> stages files, and <code>git commit</code> saves a snapshot of your work.</p>",
      },
      {
        title: "GitHub & Remotes",
        detail_title: "Tools 5.3: Pushing Code",
        content:
          "<p>Store code online using GitHub. Use <code>git push</code> to upload local commits and <code>git pull</code> to download changes from others.</p>",
      },
      {
        title: "Branching & Merging",
        detail_title: "Tools 5.4: Git Branches",
        content:
          "<p>Never work on <code>main</code> directly. Use <code>git checkout -b feature-name</code> to create a separate workspace, then merge it back when done.</p>",
      },
      {
        title: "NPM & Packages",
        detail_title: "Tools 5.5: Node Package Manager",
        content:
          "<p>NPM is the world's largest software registry. Use <code>npm install package-name</code> to add libraries like React or Lodash to your project.</p>",
      },
      {
        title: "Bundlers (Vite/Webpack)",
        detail_title: "Tools 5.6: Build Tools",
        content:
          "<p>Browsers don't understand all modern code natively. Bundlers like Vite compile and minify your code for production.</p>",
      },
    ],
  },
  {
    category: "React Framework Basics",
    topics: [
      {
        title: "JSX Syntax",
        detail_title: "React 6.1: Intro to JSX",
        content:
          "<p>JSX looks like HTML but lives inside JavaScript. It allows you to write UI components declaratively.</p>",
      },
      {
        title: "Components",
        detail_title: "React 6.2: Component Architecture",
        content:
          "<h3>Building Blocks</h3><p>React apps are trees of components. A component is a function that returns UI. Reusability is the key benefit.</p>",
      },
      {
        title: "Props",
        detail_title: "React 6.3: Passing Data",
        content:
          "<p>Props (properties) allow you to pass data from a parent component down to a child component, making them dynamic.</p>",
      },
      {
        title: "State (useState)",
        detail_title: "React 6.4: Managing State",
        content:
          "<p>State is data that changes over time. The <code>useState</code> hook allows functional components to remember data between renders.</p>",
      },
      {
        title: "Effects (useEffect)",
        detail_title: "React 6.5: Side Effects",
        content:
          "<p><code>useEffect</code> handles tasks outside the render loop, like fetching data or subscribing to events when a component mounts.</p>",
      },
      {
        title: "Lists and Keys",
        detail_title: "React 6.6: Rendering Lists",
        content:
          "<p>Use <code>.map()</code> to render lists of components. Always provide a unique <code>key</code> prop so React can efficiently update the DOM.</p>",
      },
      {
        title: "Conditional Rendering",
        detail_title: "React 6.7: Logic in UI",
        content:
          "<p>Use ternary operators (<code>condition ? true : false</code>) or short-circuiting (<code>&&</code>) to show or hide elements dynamically.</p>",
      },
    ],
  },
  {
    category: "Web Performance & Security",
    topics: [
      {
        title: "Image Optimization",
        detail_title: "Perf 7.1: Efficient Images",
        content:
          "<p>Images are the heaviest part of most sites. Use modern formats like WebP and always define <code>width</code> and <code>height</code> attributes to prevent layout shifts.</p>",
      },
      {
        title: "Lazy Loading",
        detail_title: "Perf 7.2: Loading on Demand",
        content:
          "<p>Use <code>loading='lazy'</code> on images and iframes to defer loading them until the user scrolls them into view, speeding up initial page load.</p>",
      },
      {
        title: "Minification",
        detail_title: "Perf 7.3: Code Size",
        content:
          "<p>Minification removes whitespace and comments from CSS and JS files, reducing the file size sent to the browser.</p>",
      },
      {
        title: "XSS Attacks",
        detail_title: "Sec 8.1: Cross-Site Scripting",
        content:
          "<h3>Sanitize Input</h3><p>XSS happens when attackers inject scripts into your page. Never trust user input; always sanitize data before rendering it.</p>",
      },
      {
        title: "HTTPS & SSL",
        detail_title: "Sec 8.2: Secure Connections",
        content:
          "<p>HTTPS encrypts data between the user and server. It is essential for trust, security, and even Google search rankings.</p>",
      },
      {
        title: "CORS",
        detail_title: "Sec 8.3: Cross-Origin Resource Sharing",
        content:
          "<p>CORS is a browser security feature that restricts web pages from making requests to a different domain than the one that served the web page.</p>",
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
    },

    {
        id: 6,
        type: 'flex',
        title: 'Level 6: Containment Bay Shift',
        description: 'The docking bay has rotated! Re-orient the ships to line up vertically, from top to bottom.',
        hint: 'Change the **main axis** direction using `flex-direction`',
        targetCSS: 'flex-direction: column;',
        containerStyles: { display: 'flex', height: '100%', flexDirection: 'row' }, // Initial non-target style
        wrapperSelector: '.hangar-bay',
        ships: 3,
        validProps: ['flex-direction'],
        validValues: ['column']
    },
    {
        id: 7,
        type: 'flex',
        title: 'Level 7: Emergency Egress',
        description: 'The launch tubes are narrow. Ensure that all ships drop to a new line when the bay is full.',
        hint: 'Use `flex-wrap` to allow items to wrap onto multiple lines.',
        targetCSS: 'flex-wrap: wrap;',
        containerStyles: { display: 'flex', width: '50%', flexWrap: 'nowrap' }, // Initial non-target style
        wrapperSelector: '.hangar-bay',
        ships: 5,
        validProps: ['flex-wrap'],
        validValues: ['wrap']
    },
    {
        id: 8,
        type: 'flex',
        title: 'Level 8: Power Core Alignment',
        description: 'With multiple rows of ships, we need to center **all rows** vertically within the bay.',
        hint: 'When items wrap, use `align-content` to align the lines/rows themselves (cross axis alignment).',
        targetCSS: 'align-content: center;',
        containerStyles: { 
            display: 'flex', 
            height: '100%', 
            flexWrap: 'wrap', 
            alignContent: 'flex-start' // Initial non-target style
        },
        wrapperSelector: '.hangar-bay',
        ships: 6,
        validProps: ['align-content'],
        validValues: ['center']
    },
    {
        id: 9,
        type: 'grid',
        title: 'Level 9: Sector Map Template',
        description: 'Define the layout for our monitoring station: Header, Sidebar, Main View, and Footer. Use **grid areas**.',
        hint: 'Define the structure with `grid-template-areas`. The ships will automatically assign to the areas based on their class names (e.g., `.ship-header`).',
        targetCSS: 'grid-template-areas: "header header header" "sidebar main main" "footer footer footer";',
        containerStyles: { 
            display: 'grid', 
            gridTemplateColumns: '1fr 2fr 2fr', 
            height: '100%',
            gridGap: '5px' 
        },
        wrapperSelector: '.sector-grid',
        ships: 4, // Header, Sidebar, Main, Footer
        shipClasses: ['ship-header', 'ship-sidebar', 'ship-main', 'ship-footer'], // Define these in HTML for validation
        validProps: ['grid-template-areas'],
        validValues: ['"header header header" "sidebar main main" "footer footer footer"']
    },
    {
        id: 10,
        type: 'grid',
        title: 'Level 10: Ship Re-ordering',
        description: 'The second ship (`.ship:nth-child(2)`) is a high-priority cargo vessel. It must move to the **last row** (row line 3), but stay in its current column (column line 2).',
        hint: 'Target the ship using `grid-row-start` or `grid-row` to set its position.',
        targetCSS: 'grid-row-start: 3;',
        containerStyles: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gridGap: '10px'
        },
        wrapperSelector: '.ship:nth-child(2)',
        isChildLevel: true, 
        ships: 6,
        validProps: ['grid-row-start', 'grid-row'],
        validValues: ['3', '3 / span 1']
    },
],

};

