const gameChoices = ['Rock', 'Paper', 'Scissors'];
let PlayerScore = 0;
let ComputerScore = 0;

function random() { 
    maxNum = Math.ceil(2);
    minNum = Math.floor(0);
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
}

function getComputerChoice() {
    ComputerChoice = gameChoices[random()]; //.toLowerCase()
    return ComputerChoice;
}

function playRound() {
    // console.log(PlayerChoice, ComputerChoice);
    if (PlayerChoice === ComputerChoice) {
        msg = "It's a tie!";
        return msg;
    } else if (PlayerChoice === 'Rock' && ComputerChoice === 'Scissors' ||
    PlayerChoice === 'Scissors' && ComputerChoice === 'Paper' || 
    PlayerChoice === 'Paper' && ComputerChoice === 'Rock') {
        msg = `You win! ${PlayerChoice} beats ${ComputerChoice}!`;
        PlayerScore++;
        return msg;
    } else {
        msg = `You lose! ${ComputerChoice} beats ${PlayerChoice}!`;
        ComputerScore++;
        return msg;
    }
}

function checkScore() {
    console.log(PlayerScore, ComputerScore);
    if (PlayerScore === 5) {
        alert("You win!");
        PlayerScore = 0;
        ComputerScore = 0;
        // return PlayerScore, ComputerScore;
    } else if (ComputerScore === 5) {
        alert("You lose!");
        PlayerScore = 0;
        ComputerScore = 0;
        // return PlayerScore, ComputerScore;
    }
}

// Buttonz event listeners
function logPlayerChoice() {
    
    
    switch (this.id) {
        case 'rock':
            // e.stopPropagation();
            PlayerChoice = gameChoices[0];
            break;
        case 'paper':
            // e.stopPropagation();
            PlayerChoice = gameChoices[1];
            break;
        case 'scissors':
            // e.stopPropagation();   
            PlayerChoice = gameChoices[2];
            break;
    }

    
    
    getComputerChoice();
    playRound();
    checkScore();


    msgDiv.classList.add('message');
    msgDiv.textContent = msg;
    scoreWindow.appendChild(msgDiv);
}

function addScoreWindow() {
    scoreWindow.classList.add('score-window');
    body.appendChild(scoreWindow);
};

function addScoresCount() {
    // Label
    label.classList.add('label');
    label.textContent = "Game Score";
    scoreWindow.appendChild(label);

    // Add player and computer score counter

    scoreCounters.classList.add('score-counter');
    scoreCounters.textContent = `Player Score: ${PlayerScore}\n Computer Score: ${ComputerScore}`;
    scoreWindow.append(scoreCounters);

};


// Buttons selector
const buttons = document.querySelectorAll('button');

// Score window selector
const body = document.querySelector('body');
const scoreWindow = document.createElement('div');

// Table of scores 
const label = document.createElement('p');
const scoreCounters = document.createElement('p');
const msgDiv = document.createElement('div');

buttons.forEach(e => e.addEventListener('click', logPlayerChoice), {capture: false});
buttons.forEach(e => e.addEventListener('click', addScoreWindow), {once: true});
buttons.forEach(e => e.addEventListener('click', addScoresCount), {once: true});
// buttons.forEach(e => e.addEventListener('click', checkScore), {once: true});


