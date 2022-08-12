const gameChoices = ['Rock', 'Paper', 'Scissors'];
let PlayerWin = [];
let ComputerWin = [];

function random() { 
    maxNum = Math.ceil(2);
    minNum = Math.floor(0);
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
}

function getComputerChoice() {
    ComputerChoice = gameChoices[random()]; //.toLowerCase()
    return ComputerChoice;
}

function getPlayerChoice() {
    PlayerChoice = prompt('Your turn to choose (rock, paper, or scissors): ');
    PlayerChoice = PlayerChoice.toLowerCase();
    return PlayerChoice;
}

function playRound() {
    getComputerChoice();
    if (PlayerChoice === ComputerChoice) {
        msg = "It's a tie!";
        return msg;
    } else if (PlayerChoice === 'Rock' && ComputerChoice === 'Scissors' ||
    PlayerChoice === 'Scissors' && ComputerChoice === 'Paper' || 
    PlayerChoice === 'Paper' && ComputerChoice === 'Rock') {
        msg = `You win! ${PlayerChoice} beats ${ComputerChoice}!`;
        return msg;
    } else {
        msg = `You lose! ${ComputerChoice} beats ${PlayerChoice}!`;
        return msg;
    }
}


function checkScore(PlayerWin, ComputerWin) {
    // game();
    if (PlayerWin > ComputerWin) {
        return "You win!"
    } else {
        return "You lose!"
    }
}

// Buttonz event listeners
function logPlayerChoice(e) {
    
    switch (this.id) {
        case 'rock':
            e.stopPropagation();
            PlayerChoice = gameChoices[0];
            console.log(`I am ${PlayerChoice}!`);
            break;
        case 'paper':
            e.stopPropagation();
            PlayerChoice = gameChoices[1];
            console.log(`I am ${PlayerChoice}!`);
            break;
        case 'scissors':
            e.stopPropagation();   
            PlayerChoice = gameChoices[2];
            console.log(`I am ${PlayerChoice}!`);
            break;
    }

    console.log(playRound());
    // console.log(`I am ${this.id}!`);

}

const buttons = document.querySelectorAll('button');

// const rockBtn = document.querySelector('#rock');
// const paperBtn = document.querySelector('#paper');
// const scissorsBtn = document.querySelector('#scissors');

buttons.forEach(e => e.addEventListener('click', logPlayerChoice), {capture: false});



// console.log(game());

