function getComputerChoice(){
    const randChoice=Math.floor(Math.random()*3);
    if(randChoice==0)return "Rock";
    else if(randChoice==1)return "Paper";
    else return "Scissor";
}

function playRound(playerSelection,computerSelection=getComputerChoice()){
    const playerSelectionChar=playerSelection[0].toUpperCase();
    console.log(playerSelectionChar);
    if(playerSelectionChar==computerSelection[0])return "Draw";
    else if(playerSelectionChar=='R'){
        return computerSelection=='Scissor' ? "Win" : "Lose";
    }
    else if(playerSelectionChar=='P'){
        return computerSelection=='Rock' ? "Win" : "Lose";
    }
    else{
        return computerSelection=='Paper' ? "Win" : "Lose";
    }
}

var playerScore=0,computerScore=0,playerChoice;

const playerScoreTxt = document.querySelector("#playerScore");
const computerScoreTxt = document.querySelector("#computerScore");
const gameResult = document.querySelector(".gameResult");
const finalWinner = document.querySelector(".finalWinner"); 
const buttons = document.querySelectorAll(".btn");

gameResult.style["margin-bottom"] = 20; 

function getResult(e){
    if(this.id=="rock")playerChoice="ROCK";
    else if(this.id=="paper")playerChoice="PAPER";
    else playerChoice="SCISSOR";
    computerSelectResult=getComputerChoice();
    const result=playRound(playerChoice,computerSelectResult);

    if(result=="Win"){
        playerScore++;
        gameResult.textContent = `The computer chose ${computerSelectResult}, you Won.`
    }
    else if(result=="Lose"){
        computerScore++;
        gameResult.textContent = `The computer chose ${computerSelectResult}, you Lost.`
    } 
    else{
        gameResult.textContent = `The computer chose ${computerSelectResult}, Draw.` 
    }

    playerScoreTxt.textContent =  `Your Score: ${playerScore}`;
    computerScoreTxt.textContent =  `Computer's Score: ${computerScore}`;

    if(playerScore == 5){
        finalWinner.textContent = `You Won!!! 🥶🥶🥶🥶`;
    }
    if(computerScore == 5){
        finalWinner.textContent = `You Lost 😭😭😭😭`;
    }

    this.classList.add("playing");
}

function stopTransition(e){
    this.classList.remove("playing");
}

buttons.forEach((button)=>{
    // if(button.id=="rock")playerChoice="ROCK";
    // else if(button.id=="paper")playerChoice="PAPER";
    // else playerChoice="SCISSOR";
    button.addEventListener("click",getResult);
    button.addEventListener("transitionend",stopTransition);
});

// buttons.forEach(button => button.addEventListener("transitionend",stopTransition))







