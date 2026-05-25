function getComputerChoice() {
    let n = Math.random()
    if (n < 0.33) {
        return "rock"
    } else if (n < 0.66) {
        return "paper"
    } else if (n < 1) {
        return "scissors"
    }
}

function playround(humanChoice,computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        displayWin.textContent = "You Win! Rock beats Scissors";
        humanScore ++
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        displayWin.textContent = "You Lose! Paper beats Rock";
        computerScore ++
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        displayWin.textContent = "You Win! Paper beats Rock";
        humanScore ++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        displayWin.textContent = "You Lose! Scissors beats Paper";
        computerScore ++
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        displayWin.textContent = "You Win! Scissors beats Paper";
        humanScore ++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        displayWin.textContent = "You Lose! Rock beats Scissors";
        computerScore ++
    } else if (humanChoice === computerChoice) {
        displayWin.textContent ="Tie! Both have the same move";
    }
}

function displayScore() {
    scoreDisplay.textContent = `Your Score is: ${humanScore} and the Computer Score is: ${computerScore}`;
}

function play(move) {
    const playerMove = move;
    const computerMove = getComputerChoice(); 
    displayMove.textContent = `Your Move is: ${playerMove} and The Computer Move is: ${computerMove}`;
    playround(playerMove, computerMove);
    displayScore();
}

const scoreDisplay = document.querySelector(".displayScore"); 
const displayMove = document.querySelector(".displayMove");
const displayWin = document.querySelector(".displayWin");
const btnRock = document.querySelector("#buttonRock");
const btnPaper = document.querySelector("#buttonPaper");
const btnScissors = document.querySelector("#buttonScissors");


btnRock.addEventListener("click", () => play("rock"));
btnPaper.addEventListener("click", () => play("paper"));
btnScissors.addEventListener("click", () => play("scissors"));

let humanScore = 0
let computerScore = 0




