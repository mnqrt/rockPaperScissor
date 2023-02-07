function getComputerChoice(){
    let randChoice=Math.floor(Math.random()*3);
    if(randChoice==0)return "Rock";
    else if(randChoice==1)return "Paper";
    else return "Scissor";
}

function playRound(playerSelection,computerSelection){
    let playerSelectionChar=playerSelection[0].toUpperCase();
    if(playerSelectionChar==computerSelection[0])return "Draw!";
    else if(playerSelectionChar=='R'){
        return computerSelection=='Scissor' ? "You Won! Rock beats Scissor" : "You Lost! Paper beats Scissor";
    }
    else if(playerSelectionChar=='P'){
        return computerSelection=='Rock' ? "You Won! Paper beats Rock" : "You Lost! Scissor beats Paper";
    }
    else{
        return computerSelection=='Paper' ? "You Won! Scissor beats Paper" : "You Lost! Rock beats Scissor";
    }
}

function game(){
    let scorePlayer=0,scoreComputer=0;
    for(let i=1;i<=5;i++){
        const playerSelection=prompt("Input Your Choice!");
        const computerSelection=getComputerChoice();
        const gameResult=playRound(playerSelection,computerSelection);
        if(gameResult.slice(4,7)=='Won')scorePlayer++;
        else if(gameResult.slice(4,8)=='Lost')scoreComputer++;
        console.log(gameResult);
    }
    if(scorePlayer>scoreComputer)console.log("You Won!!! Congrats");
    else if(scorePlayer==scoreComputer)console.log("Draw, GG");
    else console.log("You Lose!! NT");
}

game();



