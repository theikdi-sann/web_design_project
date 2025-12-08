// Starship Command - Game Logic
let currentLevelId = 1;

// DOM Elements
const missionPanel = document.getElementById('mission-panel');
const gameBoard = document.getElementById('game-board');
const cssInput = document.getElementById('css-input');
const engageBtn = document.getElementById('engage-btn');
const messageLog = document.getElementById('message-log');
const wrapperPre = document.getElementById('wrapper-pre');

let levelBtns = [];
let levelTitle, levelDesc, hintText;

// Generate Mission Panel dynamically
function generateMissionPanel() {
    missionPanel.innerHTML = '';

    // Create heading
    const heading = document.createElement('h2');
    heading.innerHTML = '<i class="fas fa-user-astronaut"></i> Mission Log';
    missionPanel.appendChild(heading);

    // Create level selector buttons
    const levelSelector = document.createElement('div');
    levelSelector.className = 'level-selector';

    data.gameLevels.forEach(level => {
        const btn = document.createElement('button');
        btn.className = `level-btn ${level.id === 1 ? 'active' : ''}`;
        btn.dataset.level = level.id;
        btn.textContent = level.id;
        btn.addEventListener('click', (e) => {
            loadLevel(parseInt(e.target.dataset.level));
        });
        levelSelector.appendChild(btn);
    });

    missionPanel.appendChild(levelSelector);

    // Create mission instructions
    const instructions = document.createElement('div');
    instructions.className = 'mission-instructions';

    levelTitle = document.createElement('h3');
    levelTitle.id = 'level-title';
    instructions.appendChild(levelTitle);

    levelDesc = document.createElement('p');
    levelDesc.id = 'level-desc';
    instructions.appendChild(levelDesc);

    const hintBox = document.createElement('div');
    hintBox.className = 'hint-box';
    hintBox.innerHTML = '<i class="fas fa-lightbulb"></i> ';
    hintText = document.createElement('span');
    hintText.id = 'hint-text';
    hintBox.appendChild(hintText);
    instructions.appendChild(hintBox);

    missionPanel.appendChild(instructions);

    // Cache level buttons for later use
    levelBtns = document.querySelectorAll('.level-btn');
}

// Init
function initGame() {
    generateMissionPanel();
    loadLevel(1);
    engageBtn.addEventListener('click', checkSolution);
}

function loadLevel(id) {
    currentLevelId = id;
    const level = data.gameLevels.find(l => l.id === id);

    if (!level) {
        console.error(`Level ${id} not found`);
        return;
    }

    // Update Sidebar
    levelTitle.textContent = level.title;
    levelDesc.textContent = level.description;
    hintText.textContent = `Hint: ${level.hint}`;

    // Update Buttons
    levelBtns.forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.level) === id);
    });

    // Reset Input & Log
    cssInput.value = '';
    messageLog.textContent = '';
    messageLog.className = 'message-log';

    // Update Editor Context
    wrapperPre.textContent = `${level.wrapperSelector} {`;

    // Setup Board
    renderBoard(level);
}

function renderBoard(level) {
    gameBoard.style = ''; // Reset inline styles
    gameBoard.className = 'game-board'; // Reset classes
    gameBoard.innerHTML = ''; // Clear ships

    // Apply base styles for the level
    Object.assign(gameBoard.style, level.containerStyles);

    // Create Ships
    for (let i = 0; i < level.ships; i++) {
        const ship = document.createElement('div');
        ship.className = 'ship';

        // Add ship classes if defined (for grid areas)
        if (level.shipClasses && level.shipClasses[i]) {
            ship.classList.add(level.shipClasses[i]);
        }

        ship.innerHTML = '<i class="fas fa-space-shuttle"></i>';

        // Special styling for Level 5 Flagship
        if (level.id === 5 && i === 0) {
            ship.style.setProperty('--ship-color', '#ff00ff');
            ship.innerHTML = '<i class="fas fa-rocket"></i>';
        }

        gameBoard.appendChild(ship);
    }
}

function checkSolution() {
    const level = data.gameLevels.find(l => l.id === currentLevelId);
    const userCode = cssInput.value.trim();

    if (!userCode) {
        logMessage("System Error: No coordinates input.", false);
        return;
    }

    // 1. Apply styles to visual board to show user what happened
    try {
        if (level.isChildLevel) {
            const target = document.querySelector(level.wrapperSelector);
            if (target) target.style.cssText += userCode;
        } else {
            gameBoard.style.cssText += userCode;
        }
    } catch (e) {
        logMessage("Syntax Error: Invalid CSS command.", false);
        return;
    }

    // 2. Validate Logic (soft validation regex)
    const normalizedCode = userCode.toLowerCase().replace(/\s/g, '');

    let isCorrect = level.validValues.some(val =>
        normalizedCode.includes(val.replace(/\s/g, ''))
    );

    // Hard check for property presence
    const hasProp = level.validProps.some(prop =>
        normalizedCode.includes(prop)
    );

    if (hasProp && isCorrect) {
        logMessage("Systems Operational! Warp Drive Active.", true);
        successAnimation();
    } else {
        logMessage("Alignment Mismatch: Ships are drifting.", false);
        shakeBoard();
    }
}

function logMessage(msg, isSuccess) {
    messageLog.textContent = `> ${msg}`;
    messageLog.className = isSuccess ? 'message-log success-msg' : 'message-log';
}

function successAnimation() {
    const ships = document.querySelectorAll('.ship');
    ships.forEach((ship, index) => {
        setTimeout(() => {
            ship.style.transform = "scale(1.2) translateY(-20px)";
            ship.style.filter = "drop-shadow(0 0 20px #fff)";
            setTimeout(() => {
                ship.style.transform = "none";
                ship.style.filter = "none";
            }, 500);
        }, index * 100);
    });
}

function shakeBoard() {
    gameBoard.style.transform = "translateX(5px)";
    setTimeout(() => {
        gameBoard.style.transform = "translateX(-5px)";
        setTimeout(() => {
            gameBoard.style.transform = "none";
        }, 100);
    }, 100);
}

// Start
document.addEventListener('DOMContentLoaded', initGame);