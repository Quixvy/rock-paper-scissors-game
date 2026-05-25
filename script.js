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

function getHumanChoice() {
    return prompt("Enter a move (rock, paper, scissors)").toLowerCase()
}

function playround(humanChoice,computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! Rock beats Scissors")
        humanScore ++
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock")
        computerScore ++
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock")
        humanScore ++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose! Scissors beats Paper")
        computerScore ++
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beats Paper")
        humanScore ++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lose! Rock beats Scissors")
        computerScore ++
    } else if (humanChoice === computerChoice) {
        console.log("Tie! Both have the same move")
    }
}

function playGame() {
    for (let i = 1; i<=5; i++) {
        playround(getHumanChoice(),getComputerChoice())
    }
    console.log(`Your Score is: ${humanScore}`)
    console.log(`The Computer Score is: ${computerScore}`)
    if (humanScore > computerScore) {
        console.log("You Win!")
    } else if (humanScore < computerScore) {
        console.log("You Lose!")
    } else if (humanScore === computerScore) {
        console.log("It's a Tie Game!")
    }
}

let humanScore = 0
let computerScore = 0


playGame()


