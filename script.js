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
        showResults(humanScore,computerScore,rounds);
    }else{
        renderResults(computerScore,humanScore);
        rounds = 0;
        humanScore = 0;
        computerScore = 0;
    }
}
const showResults = (humanScore, computerScore, round) => {
    const showResultsContainer = document.getElementById("showResults");
    
    // Eliminar todos los elementos hijos existentes
    while (showResultsContainer.firstChild) {
        showResultsContainer.removeChild(showResultsContainer.firstChild);
    }
    
    // Crear y agregar el nuevo resultado
    const result = document.createElement("h4");
    result.innerHTML = `Round: ${round}  Human Score: ${humanScore} ---- Computer Score: ${computerScore}`;
    showResultsContainer.appendChild(result);
}

const renderResults = (computer,human) =>{
    const showAns = document.getElementById("showAns");
    const ans = document.createElement("h3");
    ans.classList.add("ans");
    
    if(computer > human){
        ans.innerHTML = 'Computer WINS!!!'
    }
    else{
        ans.innerHTML = 'Human WINS!!!'
    }
    
    showAns.appendChild(ans);
}
playButton.addEventListener("click",playRound);