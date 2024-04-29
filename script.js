const playButton = document.getElementById("playButton");
let humanScore = 0;
let computerScore = 0;
let rounds = 0;
const getComputerChoice = () =>{
    
    const random = Math.floor(Math.random()*3);
    switch(random){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors"
    } 
}
const getHumanChoice = () =>{
    const myChoice = (document.getElementById("myChoice").value).toLowerCase();
    if(myChoice !== 'rock' && myChoice !== 'paper' && myChoice !== 'scissors'){
        window.alert("You must enter a valid choice");
    }
    return myChoice;
}
const playRound = () =>{
    const human = getHumanChoice();
    const computer = getComputerChoice();
    rounds++;
    console.log(`Human choice: ${human}\nComputer choice: ${computer}`)
    if(rounds <5){
        if(human == computer){
            console.log("it's a tie");
            rounds--;
        }
        if (human == 'rock' && computer == 'paper'){
            console.log("computer wins");
            computerScore++;
        } else if(human == 'rock' && computer == 'scissors'){
            console.log("human wins");
            humanScore++;
        } else if(human == 'paper' && computer == 'rock'){
            console.log("human wins");
            humanScore++;
        }else if(human == 'paper' && computer == 'scissors'){
            console.log("computer wins");
            computerScore++;
        }else if(human == 'scissors' && computer == 'paper'){
            console.log("human wins");
            humanScore++;
        } else if(human == 'scissors' && computer == 'rock'){
            console.log("computer wins");
            computerScore++;
        }
        console.log(`Human Score: ${humanScore} ---- Computer Score: ${computerScore}`)
    }else{
        if(computerScore>humanScore){
            console.log("Computer WINS !!!!")
            rounds = 0;
            humanScore = 0;
            computerScore = 0;
        } else {
            console.log("Human WINS !!!!");
            rounds = 0;
            humanScore = 0;
            computerScore = 0;
        }
    }
    
}
playButton.addEventListener("click",playRound);