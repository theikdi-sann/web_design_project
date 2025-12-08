import data from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Mobile Menu Toggle Logic ---
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      const icon = menuToggle.querySelector("i");
      if (mobileNav.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // --- 2. Scroll-to-Top Button Logic ---
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    if (scrollToTopBtn) {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        scrollToTopBtn.classList.remove("hidden");
      } else {
        scrollToTopBtn.classList.add("hidden");
      }
    }
  };

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // --- 3. Smooth Scrolling for Internal Links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // --- 4. Quiz Logic (Only runs on quiz.html) ---
  const quizArea = document.getElementById("quiz-area");
  const submitBtn = document.getElementById("submit-quiz");
  const resultsDiv = document.getElementById("quiz-results");
  const scoreText = document.getElementById("score-text");
  const retakeBtn = document.getElementById("retake-quiz");

  let quizQuestions = [];

  const renderQuiz = () => {
    if (!quizArea) return;

    quizArea.innerHTML = "";
    resultsDiv.classList.add("hidden");
    submitBtn.classList.remove("hidden");
    submitBtn.removeEventListener("click", submitQuiz);

    quizQuestions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("quiz-question");
      questionDiv.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;

      q.options.forEach((option) => {
        const label = document.createElement("label");
        label.classList.add("answer-option");
        label.innerHTML = `
                    <input type="radio" name="question-${index}" value="${option}">
                    ${option}
                `;
        questionDiv.appendChild(label);
      });
      quizArea.appendChild(questionDiv);
    });

    submitBtn.addEventListener("click", submitQuiz);
  };

  const submitQuiz = () => {
    let score = 0;
    const totalQuestions = quizQuestions.length;

    quizQuestions.forEach((q, index) => {
      const questionDiv = quizArea.querySelectorAll(".quiz-question")[index];
      const selector = `input[name="question-${index}"]:checked`;
      const selectedInput = questionDiv.querySelector(selector);
      const allOptions = questionDiv.querySelectorAll(".answer-option");

      // Disable buttons
      questionDiv.querySelectorAll('input[type="radio"]').forEach((input) => {
        input.disabled = true;
      });

      // Visual feedback
      allOptions.forEach((optionLabel) => {
        const optionInput = optionLabel.querySelector("input");

        if (optionInput.value === q.answer) {
          optionLabel.classList.add("correct-answer");
        }

        if (selectedInput) {
          if (
            selectedInput.value !== q.answer &&
            optionInput === selectedInput.querySelector("input")
          ) {
            optionLabel.classList.add("incorrect-answer");
          }
        }
      });

      if (selectedInput && selectedInput.value === q.answer) {
        score++;
      }
    });

    scoreText.textContent = `You scored ${score} out of ${totalQuestions} (${Math.round((score / totalQuestions) * 100)}%)!`;

    submitBtn.classList.add("hidden");
    resultsDiv.classList.remove("hidden");
  };

  if (retakeBtn) {
    retakeBtn.addEventListener("click", renderQuiz);
  }

  // --- 5. Accordion Logic for lessons.html (Keeping the hook, though not used in final lessons.html structure) ---
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const lessonList = header.nextElementSibling;

      if (lessonList) {
        lessonList.classList.toggle("hidden");
        header.classList.toggle("open");
      }
    });
  });

  // --- 6. Lesson Content Display Logic (Runs on lessons.html) ---
  const lessonDisplayArea = document.getElementById("lesson-content-display");
  const lessonTitleElement = document.getElementById("lesson-title");
  const lessonTextElement = document.getElementById("lesson-text");
  const closeLessonBtn = document.getElementById("close-lesson-btn");
  const lessonGrid = document.querySelector(".lesson-categories-grid");

  let lessonData = {};

  const handleLessonClick = (e) => {
    e.preventDefault();
    const linkText = e.target.textContent.trim();
    const data = lessonData[linkText];

    if (data) {
      lessonGrid.classList.add("hidden");
      lessonDisplayArea.classList.remove("hidden");

      lessonTitleElement.textContent = data.title;
      lessonTextElement.innerHTML = data.content;

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

  // Setup Quiz
  if (data.quiz) {
    quizQuestions = data.quiz;
    if (quizArea) renderQuiz();
  }

  // Setup Lessons
  if (lessonGrid && data.lessons) {
    lessonGrid.innerHTML = "";
    data.lessons.forEach((category) => {
      const card = document.createElement("div");
      card.classList.add("category-card");

      const h2 = document.createElement("h2");
      h2.textContent = category.category;
      card.appendChild(h2);

      const ul = document.createElement("ul");
      ul.classList.add("lesson-list");

      category.topics.forEach((topic) => {
        if (topic.content) {
          lessonData[topic.title] = {
            title: topic.detail_title,
            content: topic.content,
          };
        }

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
  }

  if (closeLessonBtn) {
    closeLessonBtn.addEventListener("click", () => {
      lessonDisplayArea.classList.add("hidden");
      lessonGrid.classList.remove("hidden");

      lessonGrid.scrollIntoView({ behavior: "smooth" });
    });
  }
});
