// Starship Command - Game Logic

const gameLevels = [
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
];

let currentLevelId = 1;

// DOM Elements
const levelBtns = document.querySelectorAll('.level-btn');
const levelTitle = document.getElementById('level-title');
const levelDesc = document.getElementById('level-desc');
const gameBoard = document.getElementById('game-board');
const cssInput = document.getElementById('css-input');
const engageBtn = document.getElementById('engage-btn');
const messageLog = document.getElementById('message-log');
const wrapperPre = document.querySelector('.code-area pre:first-child');
const closingPre = document.querySelector('.code-area pre:last-child');

// Init
function initGame() {
    loadLevel(1);

    levelBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const level = parseInt(e.target.dataset.level);
            loadLevel(level);
        });
    });

    engageBtn.addEventListener('click', checkSolution);
}

function loadLevel(id) {
    currentLevelId = id;
    const level = gameLevels.find(l => l.id === id);

    // Update Sidebar
    levelTitle.textContent = level.title;
    levelDesc.textContent = level.description;

    // Update Buttons
    levelBtns.forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.level) === id);
    });

    // Reset Input & Log
    cssInput.value = '';
    messageLog.textContent = '';
    messageLog.className = 'message-log';

    // Update Editor Context
    if (level.isChildLevel) {
        wrapperPre.textContent = `${level.wrapperSelector} {`;
    } else {
        wrapperPre.textContent = `${level.wrapperSelector} {`;
    }

    // Setup Board
    renderBoard(level);
}

function renderBoard(level) {
    gameBoard.style = ''; // Reset inline styles
    gameBoard.className = 'game-board'; // Reset classes
    gameBoard.innerHTML = ''; // Clear ships

    // Apply base styles for the level (so the starting state is correct)
    Object.assign(gameBoard.style, level.containerStyles);

    // Create Ships
    for (let i = 0; i < level.ships; i++) {
        const ship = document.createElement('div');
        ship.className = 'ship';
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
    const level = gameLevels.find(l => l.id === currentLevelId);
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
