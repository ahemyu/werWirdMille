// Game State
let gameState = {
    players: [
        { name: 'Player 1', score: 0 },
        { name: 'Player 2', score: 0 }
    ],
    currentPlayer: 0,
    currentQuestionIndex: 0,
    usedQuestions: [],
    lifelines: {
        fiftyFifty: true,
        skip: true
    }
};

// Points for each difficulty level
const POINTS = {
    easy: 100,
    medium: 250,
    hard: 500
};

// Difficulty progression (15 questions total)
const DIFFICULTY_PROGRESSION = [
    'easy', 'easy', 'easy', 'easy', 'easy',      // Q1-5: Easy
    'medium', 'medium', 'medium', 'medium', 'medium',  // Q6-10: Medium
    'hard', 'hard', 'hard', 'hard', 'hard'       // Q11-15: Hard
];

// Get random question for difficulty
function getRandomQuestion(difficulty) {
    const questionsForDifficulty = QUESTIONS[difficulty].filter(
        (q, index) => !gameState.usedQuestions.includes(`${difficulty}-${index}`)
    );

    if (questionsForDifficulty.length === 0) {
        gameState.usedQuestions = gameState.usedQuestions.filter(
            id => !id.startsWith(difficulty)
        );
        return QUESTIONS[difficulty][Math.floor(Math.random() * QUESTIONS[difficulty].length)];
    }

    const randomIndex = Math.floor(Math.random() * questionsForDifficulty.length);
    const question = questionsForDifficulty[randomIndex];
    const originalIndex = QUESTIONS[difficulty].indexOf(question);
    gameState.usedQuestions.push(`${difficulty}-${originalIndex}`);

    return question;
}

// Initialize game
function initGame() {
    const player1Name = document.getElementById('player1Name').value.trim() || 'Player 1';
    const player2Name = document.getElementById('player2Name').value.trim() || 'Player 2';

    gameState.players[0].name = player1Name;
    gameState.players[1].name = player2Name;
    gameState.players[0].score = 0;
    gameState.players[1].score = 0;
    gameState.currentPlayer = 0;
    gameState.currentQuestionIndex = 0;
    gameState.usedQuestions = [];
    gameState.lifelines.fiftyFifty = true;
    gameState.lifelines.skip = true;

    document.getElementById('player1NameDisplay').textContent = player1Name;
    document.getElementById('player2NameDisplay').textContent = player2Name;

    showScreen('gameScreen');
    loadQuestion();
}

// Show screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Update UI
function updateUI() {
    document.getElementById('p1Score').textContent = gameState.players[0].score;
    document.getElementById('p2Score').textContent = gameState.players[1].score;
    document.getElementById('currentPlayer').textContent = gameState.players[gameState.currentPlayer].name;
    document.getElementById('questionNum').textContent = gameState.currentQuestionIndex + 1;

    // Update lifeline buttons
    document.getElementById('fiftyFifty').disabled = !gameState.lifelines.fiftyFifty;
    document.getElementById('skipQuestion').disabled = !gameState.lifelines.skip;

    // Highlight current player
    if (gameState.currentPlayer === 0) {
        document.getElementById('player1Score').style.transform = 'scale(1.1)';
        document.getElementById('player2Score').style.transform = 'scale(1)';
    } else {
        document.getElementById('player1Score').style.transform = 'scale(1)';
        document.getElementById('player2Score').style.transform = 'scale(1.1)';
    }
}

// Load question
function loadQuestion() {
    if (gameState.currentQuestionIndex >= 15) {
        endGame();
        return;
    }

    const difficulty = DIFFICULTY_PROGRESSION[gameState.currentQuestionIndex];
    const question = getRandomQuestion(difficulty);

    document.getElementById('question').textContent = question.question;

    // Update difficulty badge
    const badge = document.getElementById('difficultyBadge');
    badge.textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    badge.className = 'difficulty-badge ' + difficulty;

    // Shuffle answers
    const answers = [...question.answers];
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }

    // Display answers
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';

    answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = `${String.fromCharCode(65 + index)}: ${answer}`;
        button.onclick = () => checkAnswer(answer, question.correct, difficulty);
        answersContainer.appendChild(button);
    });

    updateUI();
}

// Check answer
function checkAnswer(selected, correct, difficulty) {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.disabled = true);

    const isCorrect = selected === correct;

    buttons.forEach(btn => {
        if (btn.textContent.includes(correct)) {
            btn.classList.add('correct');
        }
        if (btn.textContent.includes(selected) && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        gameState.players[gameState.currentPlayer].score += POINTS[difficulty];
    }

    setTimeout(() => {
        gameState.currentPlayer = 1 - gameState.currentPlayer;
        gameState.currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

// 50:50 Lifeline
function useFiftyFifty() {
    if (!gameState.lifelines.fiftyFifty) return;

    gameState.lifelines.fiftyFifty = false;

    const difficulty = DIFFICULTY_PROGRESSION[gameState.currentQuestionIndex];
    const question = QUESTIONS[difficulty].find(q =>
        document.getElementById('question').textContent === q.question
    );

    const buttons = Array.from(document.querySelectorAll('.answer-btn'));
    const correctButton = buttons.find(btn => btn.textContent.includes(question.correct));
    const incorrectButtons = buttons.filter(btn => !btn.textContent.includes(question.correct));

    // Remove 2 incorrect answers
    for (let i = 0; i < 2 && incorrectButtons.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * incorrectButtons.length);
        incorrectButtons[randomIndex].remove();
        incorrectButtons.splice(randomIndex, 1);
    }

    updateUI();
}

// Skip Question Lifeline
function skipQuestion() {
    if (!gameState.lifelines.skip) return;

    gameState.lifelines.skip = false;
    gameState.currentPlayer = 1 - gameState.currentPlayer;
    gameState.currentQuestionIndex++;
    loadQuestion();
}

// End game
function endGame() {
    const player1 = gameState.players[0];
    const player2 = gameState.players[1];

    document.getElementById('finalPlayer1Name').textContent = player1.name;
    document.getElementById('finalPlayer2Name').textContent = player2.name;
    document.getElementById('finalP1Score').textContent = player1.score;
    document.getElementById('finalP2Score').textContent = player2.score;

    const winnerEl = document.getElementById('winnerAnnouncement');
    if (player1.score > player2.score) {
        winnerEl.textContent = `🎉 ${player1.name} WINS! 🎉`;
    } else if (player2.score > player1.score) {
        winnerEl.textContent = `🎉 ${player2.name} WINS! 🎉`;
    } else {
        winnerEl.textContent = `🤝 IT'S A TIE! 🤝`;
    }

    showScreen('endScreen');
}

// Event Listeners
document.getElementById('startBtn').addEventListener('click', initGame);
document.getElementById('playAgainBtn').addEventListener('click', () => {
    showScreen('startScreen');
});
document.getElementById('fiftyFifty').addEventListener('click', useFiftyFifty);
document.getElementById('skipQuestion').addEventListener('click', skipQuestion);
