const gameChoices = ['Rock', 'Paper', 'Scissors'];
let PlayerWin = [];
let ComputerWin = [];

function random() { 
    maxNum = Math.ceil(2);
    minNum = Math.floor(0);
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
}

function getComputerChoice() {
    ComputerChoice = gameChoices[random()].toLowerCase();
    console.log(ComputerChoice);
    return ComputerChoice;
}

function getPlayerChoice() {
    PlayerChoice = prompt('Your turn to choose (rock, paper, or scissors): ');
    PlayerChoice = PlayerChoice.toLowerCase();
    // while (PlayerChoice !== 'rock' || PlayerChoice !== 'paper' || PlayerChoice !== 'scissors') {
    //     PlayerChoice = prompt('You can choose only rock, paper, or scissors!');
    //     return PlayerChoice;
    // } 
    return PlayerChoice;
}

function playRound(PlayerChoice, ComputerChoice) {
    if (PlayerChoice === ComputerChoice) {
        msg = "It's a tie!";
        return msg;
    } else if (PlayerChoice === 'rock' && ComputerChoice === 'scissors' ||
    PlayerChoice === 'scissors' && ComputerChoice === 'paper' || 
    PlayerChoice === 'paper' && ComputerChoice === 'rock') {
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
    console.log(this.idList.value);
}


const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
rockBtn.addEventListener



console.log(game());

