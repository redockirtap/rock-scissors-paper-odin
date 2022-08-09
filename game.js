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

function game() {
    for (let i = 0; i <= 4; i++) {
        ComputerChoice = getComputerChoice();  // Calling and Returning a Computer choice
        PlayerChoice = getPlayerChoice();  // Calling and Returning a Player Choice
        msg = playRound(PlayerChoice, ComputerChoice); // Calling and Returning a message about win/lose
        if (msg.startsWith('You win')) {
            PlayerWin.push(i);
            console.log(false);
        } else if (msg.startsWith('You lose')) {
            ComputerWin.push(i); 
            console.log(true);
        } else {
            continue;
        }
    }
    return checkScore(PlayerWin, ComputerWin);
}

function checkScore(PlayerWin, ComputerWin) {
    // game();
    if (PlayerWin > ComputerWin) {
        return "You win!"
    } else {
        return "You lose!"
    }
}
console.log(game());

