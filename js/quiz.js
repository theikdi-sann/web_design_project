// DOM Elements
const DOM = {
  quizArea: document.getElementById("quiz-area"),
  submitBtn: document.getElementById("submit-quiz"),
  resultsDiv: document.getElementById("quiz-results"),
  scoreText: document.getElementById("score-text"),
  retakeBtn: document.getElementById("retake-quiz"),
  quizHeading: document.getElementById("quiz-heading"),
};

let quizQuestions = [];

// Validate DOM elements
const isValidDOM = () => {
  const requiredElements = [DOM.quizArea, DOM.submitBtn, DOM.resultsDiv];
  const isValid = requiredElements.every((el) => el !== null);

  if (!isValid) {
    console.error("Required DOM elements are missing.");
  }
  return isValid;
};

// Get random questions
const getRandomQuestions = (questions, count) => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Show loading spinner
const showLoading = () => {
  DOM.quizHeading.classList.add("hidden");
  DOM.quizArea.innerHTML = `
    <div class="quiz-loading-content">
      <div class="spinner"></div>
      <p class="quiz-loading">Loading quiz...</p>
    </div>
  `;
};

// Create question element
const createQuestionElement = (question, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("quiz-question");
  questionDiv.innerHTML = `<h3>${index + 1}. ${question.question}</h3>`;

  // Iterate through key-value pairs
  Object.entries(question.options).forEach(([key, value]) => {
    const label = document.createElement("label");
    label.classList.add("answer-option");
    label.innerHTML = `
      <input type="radio" name="question-${index}" value="${key}">
      ${value}
    `;
    questionDiv.appendChild(label);
  });

  return questionDiv;
};

// Render quiz questions
const renderQuiz = () => {
  if (!isValidDOM()) return;

  showLoading();
  DOM.resultsDiv.classList.add("hidden");
  DOM.submitBtn.classList.remove("hidden");
  DOM.submitBtn.removeEventListener("click", submitQuiz);

  // Get 5 random questions
  quizQuestions = getRandomQuestions(data.quizzes, 5);

  if (quizQuestions.length === 0) {
    DOM.quizArea.innerHTML = "<p>No quiz questions available.</p>";
    return;
  }

  requestAnimationFrame(() => {
    const fragment = document.createDocumentFragment();
    quizQuestions.forEach((question, index) => {
      fragment.appendChild(createQuestionElement(question, index));
    });

    DOM.quizArea.innerHTML = "";
    DOM.quizArea.appendChild(fragment);
    
    // Show heading after quiz loads
    DOM.quizHeading.classList.remove("hidden");
    DOM.submitBtn.addEventListener("click", submitQuiz);
  });
};

// Check answer and provide visual feedback
const checkAnswer = (questionDiv, question, index) => {
  const selector = `input[name="question-${index}"]:checked`;
  const selectedInput = questionDiv.querySelector(selector);
  const allOptions = questionDiv.querySelectorAll(".answer-option");

  // Disable all radio buttons
  questionDiv.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.disabled = true;
  });

  // Apply visual feedback
  allOptions.forEach((optionLabel) => {
    const optionInput = optionLabel.querySelector("input");

    // Highlight correct answer
    if (optionInput.value === question.answer) {
      optionLabel.classList.add("correct-answer");
    }

    // Highlight incorrect user selection
    if (
      selectedInput &&
      selectedInput.value !== question.answer &&
      optionInput.value === selectedInput.value
    ) {
      optionLabel.classList.add("incorrect-answer");
    }
  });

  return selectedInput;
};

// Submit quiz and calculate results
const submitQuiz = () => {
  if (!isValidDOM()) return;

  let score = 0;
  let answeredQuestions = 0;
  const totalQuestions = quizQuestions.length;

  quizQuestions.forEach((question, index) => {
    const questionDiv = DOM.quizArea.querySelectorAll(".quiz-question")[index];
    const selectedInput = checkAnswer(questionDiv, question, index);

    if (selectedInput) {
      answeredQuestions++;
      // Compare selected key with answer key
      if (selectedInput.value === question.answer) {
        score++;
      }
    }
  });

  displayResults(score, answeredQuestions, totalQuestions);
};

// Display quiz results
const displayResults = (score, answered, total) => {
  const percentage = Math.round((score / total) * 100);

  DOM.scoreText.innerHTML = `
    <strong>You scored ${score} out of ${total} (${percentage}%)</strong>
    <p>Answered: ${answered} / ${total}</p>
  `;

  DOM.submitBtn.classList.add("hidden");
  DOM.resultsDiv.classList.remove("hidden");
};

// Event listeners
if (DOM.retakeBtn) {
  DOM.retakeBtn.addEventListener("click", renderQuiz);
}

document.addEventListener("DOMContentLoaded", () => {
  if (isValidDOM()) {
    renderQuiz();
  }
});