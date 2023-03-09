
let playerScoreBoardEL = document.getElementById("playerScoreBoard-el")
let computerScoreBoardEl = document.getElementById("computerScoreBoard-el")
let computerChoiceEl = document.getElementById("computerChoice-el")
let playerChoiceEl = document.getElementById("playerChoice-el")
let resultEl = document.getElementById("result-el")
const possibleChoices = document.querySelector ("button-el")
let message = " "
let playerMessage = " "
let playerChoice = " "
let randomComputerChoices = " " 
let playerScore = "Player Score" +  " " + 0
let computerScore = "Computer Score" +  " " + 0

function computerChoice(){
    let randomComputerChoices =  Math.floor( Math.random() * 3) + 1
       if (randomComputerChoices > 2) {
        computerChoiceEl.textContent = "Computer:" + " " + "Rock"
        randomComputerChoices = "Rock"
    } else if (randomComputerChoices === 2){
        computerChoiceEl.textContent = "Computer:" + " " + "Scissors"
        randomComputerChoices = "Scissors"
    } else {
        computerChoiceEl.textContent = "Computer:" + " " + "Paper"
        randomComputerChoices = "Paper"
    }
        result()
        console.log (message)
        console.log(randomComputerChoices)
       
}

function buttonPaper(){
    playerChoice =  "Rock"
    playerMessage = "Player:" + " " + "Rock"
    playerChoiceEl.textContent = playerMessage

    console.log(playerMessage)
    
}
function buttonRock(){
    playerChoice = "Scissors"
    playerMessage = "Player:" + " " + "Scissors"
    playerChoiceEl.textContent = playerMessage
    
    console.log(playerMessage)
}
function buttonScissors(){
    playerChoice = "Paper"
    playerMessage = "Player:" + " " + "Paper"
    playerChoiceEl.textContent = playerMessage
    
    console.log(playerMessage)
}

function result(){
    
    if (randomComputerChoices === playerChoice){
        resultEl.textContent = "Result:" + " " + "Tie!"
    }else if(playerChoice == "rock"){
        if(randomComputerChoices == "paper"){
            resultEl.textContent = "Computer Won";
            computerScore++;
            computerScoreBoardEl.textContent = computerScore;

        }else{
            resultEl.textContent = "Player Won"
            playerScore++;
            playerScoreBoardEl.textContent = playerScore;
        }
    }
    else if(playerChoice == "scissors"){
        if(randomComputerChoices == 'rock'){
            resultEl.textContent = "Computer Won";
            computerScore++;
            computerScoreBoardEl.textContent = computerScore;
        }else{
            resultEl.textContent = "Player Won";
            playerScore++;
            playerScoreBoardEl.textContent = playerScore;
        }
    }
    else if(playerChoice == "paper"){
        if(randomComputerChoices == "scissors"){
            resultEl.textContent = "Computer Won";
            computerScore++;
            computerScoreBoardEl.textContent = computerScore;
        }else{
            resultEl.textContent = "Player Won";
            playerScore++;
            playerScoreBoardEl.textContent = playerScore;
        }
    }
}


