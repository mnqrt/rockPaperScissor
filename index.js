function getComputerChoice(){
    let randChoice=Math.floor(Math.random()*3);
    if(randChoice==0)return "Rock";
    else if(randChoice==1)return "Paper";
    else return "Scissor";
}

function playRound(playerSelection,computerSelection=getComputerChoice()){
    let playerSelectionChar=playerSelection[0].toUpperCase();
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

var playerScore=0,computerScore=0;

const playerScoreTxt = document.querySelector("#playerScore");
const computerScoreTxt = document.querySelector("#computerScore");
const computersChoiceTxt = document.querySelector("#computersChoice")

const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    var playerChoice;
    if(button.id=="rock")playerChoice="ROCK";
    else if(button.id=="paper")playerChoice="PAPER";
    else playerChoice="SCISSOR";
    button.addEventListener("click",()=>{
        computerSelectResult=getComputerChoice();
        const result=playRound(playerChoice,computerSelectResult);
        if(result=="Win")playerScore++;
        if(result=="Lose") computerScore++;
        playerScoreTxt.textContent =  `Your Score: ${playerScore}`;
        computerScoreTxt.textContent =  `Your Score: ${computerScore}`;
        computersChoiceTxt.textContent = `The computer chose ${computerSelectResult}, so the result is ${result}`;
    });
});

