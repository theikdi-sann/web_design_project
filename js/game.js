// Starship Command - Game Logic
let currentLevelId = 1;

const gameLevels = [
    // --- MODULE 1: FLEX FLOW ---
    {
        id: 1,
        type: 'flex',
        title: 'Mission 1: Orientation',
        description: 'The docking bay is on the LEFT, but the ships are on the RIGHT. Reverse the flow to bring them home.',
        hint: 'Use `flex-direction: row-reverse`.',
        targetCSS: 'flex-direction: row-reverse;',
        containerStyles: { display: 'flex' },
        wrapperSelector: '.hangar-bay',
        ships: 3,
        shipType: 'fa-fighter-jet',
        validProps: ['flex-direction'], // Legacy hint support
        validValues: ['row-reverse']    // Legacy hint support
    },
    {
        id: 2,
        type: 'flex',
        title: 'Mission 2: The Swap',
        description: 'We are entering a narrow canyon! Change the formation from horizontal to vertical to fit through.',
        hint: 'Use `flex-direction: column`.',
        targetCSS: 'flex-direction: column;',
        containerStyles: { display: 'flex' },
        wrapperSelector: '.hangar-bay',
        ships: 3,
        shipType: 'fa-fighter-jet',
        validProps: ['flex-direction'],
        validValues: ['column']
    },
    {
        id: 3,
        type: 'flex',
        title: 'Mission 3: Overflow Containment',
        description: 'Commander! We have too many fighter drones for a single line. They are shrinking! Force them to wrap to new lines.',
        hint: 'Use `flex-wrap`.',
        targetCSS: 'flex-wrap: wrap;',
        containerStyles: {
            display: 'flex',
            width: '300px', // Constrained width forces wrapping
            borderRight: '2px dashed red' // Visual boundary
        },
        wrapperSelector: '.hangar-bay',
        ships: 8,
        shipType: 'fa-fighter-jet',
        validProps: ['flex-wrap'],
        validValues: ['wrap']
    },
    // --- MODULE 2: ALIGNMENT ---
    {
        id: 4,
        type: 'flex',
        title: 'Mission 4: Main Axis Alignment',
        description: 'Center the fleet within the sector using the Main Axis.',
        hint: 'Use `justify-content` to center.',
        targetCSS: 'justify-content: center;',
        containerStyles: { display: 'flex' },
        wrapperSelector: '.hangar-bay',
        ships: 3,
        shipType: 'fa-satellite',
        validProps: ['justify-content'],
        validValues: ['center']
    },
    {
        id: 5,
        type: 'flex',
        title: 'Mission 5: Cross Axis Combo',
        description: 'The Hero Ship needs to be perfectly centered in the view. Center it on BOTH axes.',
        hint: 'Use both `justify-content` and `align-items`.',
        targetCSS: 'justify-content: center; align-items: center;',
        containerStyles: { display: 'flex', height: '100%' },
        wrapperSelector: '.hangar-bay',
        ships: 1,
        shipType: 'fa-rocket',
        validProps: ['justify-content', 'align-items'],
        validValues: ['center']
    },
    // --- MODULE 3: GRID ---
    {
        id: 6,
        type: 'grid',
        title: 'Mission 6: Grid Blueprint',
        description: 'Initialize a Grid Matrix with 3 equal columns.',
        hint: 'Use `grid-template-columns`.',
        targetCSS: 'display: grid; grid-template-columns: 1fr 1fr 1fr;',
        containerStyles: { display: 'block' }, // Wait for user to enable grid or set it default flex? Guide says "Engage Grid Matrix"
        wrapperSelector: '.sector-grid',
        ships: 6,
        shipType: 'fa-space-shuttle',
        validProps: ['grid-template-columns'],
        validValues: ['1fr 1fr 1fr', 'repeat(3, 1fr)']
    }
];

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

    gameLevels.forEach(level => {
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

    // Live Preview & HUD Listener
    cssInput.addEventListener('input', (e) => {
        const code = e.target.value;
        const normalizedCode = code.toLowerCase();

        // Visual Feedback for Axis
        if (normalizedCode.includes('column')) {
            gameBoard.classList.add('show-vertical-axis');
        } else {
            gameBoard.classList.remove('show-vertical-axis');
        }

        // Live Preview (Sandbox Mode)
        try {
            const level = gameLevels.find(l => l.id === currentLevelId);
            if (level) {
                // For child levels, we'd need to target the child. 
                // For simplicity in Sandbox, we apply to Board if it's the container level
                if (!level.isChildLevel) {
                    gameBoard.style.cssText = ''; // Clear previous user styles but keep base?
                    // Re-apply base styles then user code
                    Object.assign(gameBoard.style, level.containerStyles);
                    gameBoard.style.cssText += code;
                } else {
                    // For Child Levels (like Grid Span), finding the child to update live might be tricky 
                    // unless we query it fresh.
                    const target = document.querySelector(level.wrapperSelector);
                    if (target) target.style.cssText += code;
                }

                // Run collision check silently to show "Docked" status live?
                // checkCollision(true); // Argument 'silent' to not show alert
            }
        } catch (err) {
            // Ignore invalid CSS while typing
        }
    });
}

function loadLevel(id) {
    currentLevelId = id;
    const level = gameLevels.find(l => l.id === id);

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
    gameBoard.innerHTML = ''; // Clear board

    // Remove existing Target Overlay if any
    const existingTarget = document.querySelector('.target-board');
    if (existingTarget) existingTarget.remove();

    // 1. Create Target Overlay (Ghost Board)
    const targetBoard = document.createElement('div');
    targetBoard.className = 'target-board'; // Basic class
    // Copy placement styles from gameBoard (if needed) or just fill parent

    // Apply Solved Styles to Target Board
    Object.assign(targetBoard.style, level.containerStyles);
    targetBoard.style.cssText += level.targetCSS; // Apply the solution!

    // 2. Apply Base Styles to Real Board
    Object.assign(gameBoard.style, level.containerStyles);
    // Allow 'Sandbox' feel: don't restrict styles heavily

    // 3. Render Ships AND Targets
    const shipIcon = level.shipType || 'fa-space-shuttle';

    for (let i = 0; i < level.ships; i++) {
        // --- REAL SHIP ---
        const ship = document.createElement('div');
        ship.className = 'ship';
        ship.dataset.index = i + 1;

        if (level.id === 5 && i === 0) { // Legacy id check, might need update for new levels if ID changes. Level 5 is now Flex Combo.
            // Wait, level IDs changed. Flagship logic needs to match new Level 5 or 6?
            // Level 5 is now "Cross Axis Combo" with 1 ship. 
            // Let's keep the special logic generic or tied to a property.
            // But for now, let's stick to the styling logic
            if (level.shipType === 'fa-rocket') {
                ship.innerHTML = '<i class="fas fa-rocket"></i>';
                ship.style.setProperty('--ship-color', '#ff00ff');
            } else {
                ship.innerHTML = `<i class="fas ${shipIcon}"></i>`;
            }
        } else {
            ship.innerHTML = `<i class="fas ${shipIcon}"></i>`;
        }
        gameBoard.appendChild(ship);

        // --- GHOST TARGET ---
        const target = document.createElement('div');
        target.className = 'target-zone';
        // Add Grid Child styles to target if this is a child-styling level
        if (level.isChildLevel && i === 0) { // Assuming first child is target
            target.style.cssText += level.targetCSS;
        }
        target.innerHTML = '<i class="fas fa-crosshairs"></i>'; // Optional icon
        targetBoard.appendChild(target);
    }

    // Insert Target Board BEFORE Game Board (so it's behind)
    // gameBoard is in .game-board-container.
    gameBoard.parentElement.insertBefore(targetBoard, gameBoard);
}

function checkSolution() {
    checkCollision(false);
}

function checkCollision(silent = false) {
    const ships = document.querySelectorAll('.game-board .ship');
    const targets = document.querySelectorAll('.target-board .target-zone');
    let allDocked = true;

    // Safety check
    if (ships.length !== targets.length) return;

    ships.forEach((ship, index) => {
        const shipRect = ship.getBoundingClientRect();
        const targetRect = targets[index].getBoundingClientRect();

        // Overlap Detection
        // Margin of error: ship center should be within target box? 
        // Or simple intersection? Let's be generous: 50% overlap.

        const overlapX = Math.max(0, Math.min(shipRect.right, targetRect.right) - Math.max(shipRect.left, targetRect.left));
        const overlapY = Math.max(0, Math.min(shipRect.bottom, targetRect.bottom) - Math.max(shipRect.top, targetRect.top));
        const overlapArea = overlapX * overlapY;
        const shipArea = shipRect.width * shipRect.height;

        // If > 50% of ship is inside target
        const isDocked = (overlapArea > (shipArea * 0.5));

        if (isDocked) {
            ship.classList.add('docked');
        } else {
            allDocked = false;
            ship.classList.remove('docked');
        }
    });

    if (allDocked && !silent) {
        logMessage("All ships docked successfully! Warp Drive Active.", true);
        successAnimation();
    } else if (!silent) {
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

    // 1. Play Sound (Optional - see Step 5)
    // playWarpSound(); 

    ships.forEach((ship, index) => {
        // Stagger the warp for a "fleet jump" effect
        setTimeout(() => {
            ship.style.transition = "all 0.4s cubic-bezier(0.6, -0.28, 0.735, 0.045)";

            // The Warp Effect: Stretch Y, squish X, move up fast, fade out
            ship.style.transform = "scaleX(0.5) scaleY(5) translateY(-500px)";
            ship.style.opacity = "0";
            ship.style.filter = "blur(4px)";

        }, index * 100); // 100ms delay between each ship
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
