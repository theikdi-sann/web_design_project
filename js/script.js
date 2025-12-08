document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Mobile Menu Toggle Logic ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            const icon = menuToggle.querySelector('i');
            if (mobileNav.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- 2. Scroll-to-Top Button Logic ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    window.onscroll = function() {
        if (scrollToTopBtn) {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollToTopBtn.classList.remove('hidden');
            } else {
                scrollToTopBtn.classList.add('hidden');
            }
        }
    };

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- 3. Smooth Scrolling for Internal Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // --- 4. Quiz Logic (Only runs on quiz.html) ---
    const quizArea = document.getElementById('quiz-area');
    const submitBtn = document.getElementById('submit-quiz');
    const resultsDiv = document.getElementById('quiz-results');
    const scoreText = document.getElementById('score-text');
    const retakeBtn = document.getElementById('retake-quiz');

    const quizQuestions = [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Which CSS property is used for controlling the layout?",
            options: ["color", "font-size", "display"],
            answer: "display"
        },
        {
            question: "How do you declare a constant variable in JavaScript?",
            options: ["var", "let", "const"],
            answer: "const"
        }
    ];

    const renderQuiz = () => {
        if (!quizArea) return;

        quizArea.innerHTML = '';
        resultsDiv.classList.add('hidden');
        submitBtn.classList.remove('hidden');
        submitBtn.removeEventListener('click', submitQuiz);

        quizQuestions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('quiz-question');
            questionDiv.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;

            q.options.forEach(option => {
                const label = document.createElement('label');
                label.classList.add('answer-option');
                label.innerHTML = `
                    <input type="radio" name="question-${index}" value="${option}">
                    ${option}
                `;
                questionDiv.appendChild(label);
            });
            quizArea.appendChild(questionDiv);
        });

        submitBtn.addEventListener('click', submitQuiz);
    };

    const submitQuiz = () => {
        let score = 0;
        const totalQuestions = quizQuestions.length;

        quizQuestions.forEach((q, index) => {
            const questionDiv = quizArea.querySelectorAll('.quiz-question')[index];
            const selector = `input[name="question-${index}"]:checked`;
            const selectedInput = questionDiv.querySelector(selector);
            const allOptions = questionDiv.querySelectorAll('.answer-option');
            
            // Disable buttons
            questionDiv.querySelectorAll('input[type="radio"]').forEach(input => {
                input.disabled = true;
            });
            
            // Visual feedback
            allOptions.forEach(optionLabel => {
                const optionInput = optionLabel.querySelector('input');
                
                if (optionInput.value === q.answer) {
                    optionLabel.classList.add('correct-answer');
                }
                
                if (selectedInput) {
                    if (selectedInput.value !== q.answer && optionInput === selectedInput.querySelector('input')) {
                        optionLabel.classList.add('incorrect-answer');
                    }
                }
            });

            if (selectedInput && selectedInput.value === q.answer) {
                score++;
            }
        });

        scoreText.textContent = `You scored ${score} out of ${totalQuestions} (${Math.round((score / totalQuestions) * 100)}%)!`;
        
        submitBtn.classList.add('hidden');
        resultsDiv.classList.remove('hidden');
    };

    if (retakeBtn) {
        retakeBtn.addEventListener('click', renderQuiz);
    }
    
    renderQuiz();
    
    
    // --- 5. Accordion Logic for lessons.html (Keeping the hook, though not used in final lessons.html structure) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const lessonList = header.nextElementSibling;
            
            if (lessonList) { 
                lessonList.classList.toggle('hidden');
                header.classList.toggle('open');
            }
        });
    });
    
    // --- 6. Lesson Content Display Logic (Runs on lessons.html) ---
    const lessonLinks = document.querySelectorAll('.lesson-categories-grid a');
    const lessonDisplayArea = document.getElementById('lesson-content-display');
    const lessonTitleElement = document.getElementById('lesson-title');
    const lessonTextElement = document.getElementById('lesson-text');
    const closeLessonBtn = document.getElementById('close-lesson-btn');
    const lessonGrid = document.querySelector('.lesson-categories-grid');

    // Data structure holding all lesson content
    const lessonData = {
        "The Document Structure": {
            title: "HTML 1.1: Core Document Structure",
            content: "<h3>The Bare Bones of HTML</h3><p>Every HTML document starts with the `<!DOCTYPE html>` declaration. The content inside the `<head>` is metadata, and the visible content goes inside the `<body>`.</p><h4>Head vs. Body</h4><p>The **`<head>`** contains metadata (non-visible data) like the `<title>` and links to your CSS. The **`<body>`** contains all the visible page content, including text, images, and semantic tags like `<header>` and `<footer>`.</p>"
        },
        "Forms and Inputs": {
            title: "HTML 1.2: Interactive Forms",
            content: "<p>The `<form>` tag is essential for collecting user input. Key input types include `type='text'`, `type='email'`, and `type='submit'`. Always use the `<label>` tag for accessibility.</p>"
        },
        "Semantic Tags": {
            title: "HTML 1.3: Semantic Tags (Divs vs. Section)",
            content: "<h3>What is Semantic HTML?</h3><p>Semantic HTML uses tags like `<header>`, `<footer>`, `<article>`, and `<nav>` to clearly define the content's purpose, improving SEO and accessibility. Avoid using generic `<div>` tags everywhere.</p>"
        },
        "Selectors and Specificity": {
            title: "CSS 2.1: Selectors and Specificity",
            content: "<p>Specificity is the system browsers use to determine which CSS rule applies to an element. Rules are calculated based on their components: **IDs**, **Classes/Attributes**, and **Elements**.</p><h4>Best Practice</h4><p>Aim for low specificity by using clear class names.</p>"
        },
        "The Box Model": {
            title: "CSS 2.2: The CSS Box Model",
            content: "<h3>The Foundation of Layout</h3><p>Every element in HTML is a rectangular box governed by the CSS Box Model, which consists of **Content**, **Padding** (space around content), **Border**, and **Margin** (space outside the border). Understanding this is crucial for accurate spacing and sizing.</p>"
        },
        "Media Queries (Responsiveness)": {
            title: "CSS 2.3: Media Queries",
            content: "<p>Media Queries allow you to apply different CSS rules based on the device characteristics, most commonly screen width. The standard syntax is `@media (max-width: 768px) { ... }`.</p><h4>Mobile First</h4><p>A 'Mobile First' approach involves designing for small screens first, then using media queries to add styles for larger screens.</p>"
        }
    };

    lessonLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const linkText = e.target.textContent.trim();
            const data = lessonData[linkText];

            if (data) {
                lessonGrid.classList.add('hidden');
                lessonDisplayArea.classList.remove('hidden');

                lessonTitleElement.textContent = data.title;
                lessonTextElement.innerHTML = data.content;

                lessonDisplayArea.scrollIntoView({ behavior: 'smooth' });
            } else {
                lessonTitleElement.textContent = `Lesson Content Missing: ${linkText}`;
                lessonTextElement.innerHTML = "<p>The content for this lesson has not been added yet. Please check back soon!</p>";
                lessonGrid.classList.add('hidden');
                lessonDisplayArea.classList.remove('hidden');
                lessonDisplayArea.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    if (closeLessonBtn) {
        closeLessonBtn.addEventListener('click', () => {
            lessonDisplayArea.classList.add('hidden');
            lessonGrid.classList.remove('hidden');
            
            lessonGrid.scrollIntoView({ behavior: 'smooth' });
        });
    }
});