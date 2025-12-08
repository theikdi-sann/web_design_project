// DOM Elements
const lessonDisplayArea = document.getElementById("lesson-content-display");
const lessonTitleElement = document.getElementById("lesson-title");
const lessonTextElement = document.getElementById("lesson-text");
const closeLessonBtn = document.getElementById("close-lesson-btn");
const lessonGrid = document.querySelector(".lesson-categories-grid");

let lessonData = {};

// Handle lesson click
const handleLessonClick = (e) => {
  e.preventDefault();
  const linkText = e.target.textContent.trim();
  const lessonInfo = lessonData[linkText];

  if (lessonInfo) {
    lessonGrid.classList.add("hidden");
    lessonDisplayArea.classList.remove("hidden");

    lessonTitleElement.textContent = lessonInfo.title;
    lessonTextElement.innerHTML = lessonInfo.content;

    lessonDisplayArea.scrollIntoView({ behavior: "smooth" });
  } else {
    lessonTitleElement.textContent = `Lesson Content Missing: ${linkText}`;
    lessonTextElement.innerHTML =
      "<p>The content for this lesson has not been added yet. Please check back soon!</p>";
    lessonGrid.classList.add("hidden");
    lessonDisplayArea.classList.remove("hidden");
    lessonDisplayArea.scrollIntoView({ behavior: "smooth" });
  }
};

// Generate lesson categories dynamically
const generateLessonCategories = () => {
  if (!lessonGrid || !data.lessons) return;

  lessonGrid.innerHTML = "";

  data.lessons.forEach((category) => {
    // Create category card
    const card = document.createElement("div");
    card.classList.add("category-card");

    // Create category title
    const h2 = document.createElement("h2");
    h2.textContent = category.category;
    card.appendChild(h2);

    // Create lesson list
    const ul = document.createElement("ul");
    ul.classList.add("lesson-list");

    category.topics.forEach((topic) => {
      // Store lesson data for later retrieval
      if (topic.content) {
        lessonData[topic.title] = {
          title: topic.detail_title,
          content: topic.content,
        };
      }

      // Create lesson item
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = topic.title;
      a.addEventListener("click", handleLessonClick);

      li.appendChild(a);
      ul.appendChild(li);
    });

    card.appendChild(ul);
    lessonGrid.appendChild(card);
  });
};

// Close lesson and return to grid
if (closeLessonBtn) {
  closeLessonBtn.addEventListener("click", () => {
    lessonDisplayArea.classList.add("hidden");
    lessonGrid.classList.remove("hidden");
    lessonGrid.scrollIntoView({ behavior: "smooth" });
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  generateLessonCategories();
});