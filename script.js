function getComputerChoice () {
    //simply returns one of the 3 choices for rock paper scissors
    let choice = Math.random() * 100
    
    if (choice < 33) 
        return "rock"
    else if (choice > 66)
        return "paper"
    else 
        return "scissors"
}

function getHumanChoice() {
    while (true) {
        let human_choice = prompt("Enter your choice")
        human_choice = human_choice.toLowerCase();
        console.log("This is the human_choice: " + human_choice)
        if (human_choice ==  "rock" || human_choice ==  "paper" || human_choice ==  "scissors"){
            return human_choice
        }

        console.log("Please enter a valid response")
    }

}

function playRound(humanChoice, computerChoice) {
    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function game() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);

        console.log(result);
        if (result === "You win!") {
            humanScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }

        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer is the overall winner!");
    } else {
        console.log("It's a draw!");
    }
}

game();