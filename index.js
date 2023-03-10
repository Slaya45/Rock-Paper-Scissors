
let playerScoreBoardEl = document.getElementById("playerScoreBoard-el")
let computerScoreBoardEl = document.getElementById("computerScoreBoard-el")
let computerChoiceEl = document.getElementById("computerChoice-el")
let playerChoiceEl = document.getElementById("playerChoice-el")
let resultEl = document.getElementById("result-el")

let playerChoice = ""
let randomComputerChoices = "" 
let playerScore = 0
let computerScore = 0


function buttonPaper(){
    playerChoice =  "Rock"
    playerChoiceEl.textContent = "Player:" + " " + "Rock"
    computerChoice()
    
}
function buttonRock(){
    playerChoice = "Scissors"
    playerChoiceEl.textContent = "Player:" + " " + "Scissors"
    computerChoice()
    
}
function buttonScissors(){
    playerChoice = "Paper"
    playerChoiceEl.textContent = "Player:" + " " + "Paper"
    computerChoice()
    
}
function computerChoice(){
    let randomComputerChoices =  Math.floor( Math.random() * 3) + 1
       if (randomComputerChoices > 2) {
        computerChoiceEl.textContent = "Computer:" + " " + "Rock"
        randomComputerChoices = "Rock"
        result()
    } else if (randomComputerChoices === 1){
        computerChoiceEl.textContent = "Computer:" + " " + "Scissors"
        randomComputerChoices = "Scissors"
        result()
    } else {
        computerChoiceEl.textContent = "Computer:" + " " + "Paper"
        randomComputerChoices = "Paper"
        result()
    }   
    
        console.log(randomComputerChoices)
        console.log(playerChoice)
}



function result(){
    
    if (randomComputerChoices == playerChoice){
        resultEl.textContent = "Tie!"
    }else if(playerChoice = "Rock"){
        if(randomComputerChoices == "Paper"){
            resultEl.textContent = "Computer Won";
            computerScore++;
            computerScoreBoardEl.textContent = computerScore;

        }else{
            resultEl.textContent == "Player Won"
            playerScore++;
            playerScoreBoardEl.textContent = playerScore;
        }
    }
    else if(playerChoice == "Scissors"){
        if(randomComputerChoices == "Rock"){
            resultEl.textContent = "Computer Won";
            computerScore++;
            computerScoreBoardEl.textContent = computerScore;
        }else{
            resultEl.textContent = "Player Won";
            playerScore++;
            playerScoreBoardEl.textContent = playerScore;
        }
    }
    else if(playerChoice == "Paper"){
        if(randomComputerChoices == "Scissors"){
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


