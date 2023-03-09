
let playerScoreBoardEL = document.getElementById("playerScoreBoard-el")
let computerScoreBoardEl = document.getElementById("computerScoreBoard-el")
let computerChoiceEl = document.getElementById("computerChoice-el")
let playerChoiceEl = document.getElementById("playerChoice-el")
let resultEl = document.getElementById("result-el")
const possibleChoices = document.querySelector ("button-el")
let message = " "
let playerMessage = " "
let playerNumber = []
let randomComputerChoices = []


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
}

function buttonPaper(){
    playerNumber =  "Rock"
    playerMessage = "Player:" + " " + "Rock"
    playerChoiceEl.textContent = playerMessage

    console.log(playerMessage)
}
function buttonRock(){
    playerNumber = "Scissors"
    playerMessage = "Player:" + " " + "Scissors"
    playerChoiceEl.textContent = playerMessage
    
    console.log(playerMessage)
}
function buttonScissors(){
    playerNumber = "Paper"
    playerMessage = "Player:" + " " + "Paper"
    playerChoiceEl.textContent = playerMessage
    
    console.log(playerMessage)
}

function result(){
    
    if (randomComputerChoices === playerNumber){
        resultEl.textContent = "Result:" + " " + "Tie!"
    }else if(playerNumber == 'rock'){
        if(computer == 'paper'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;

        }else{
            result.textContent = 'Player Won'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
}


