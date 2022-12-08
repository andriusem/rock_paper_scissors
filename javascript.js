array = ['rock', 'scissors', 'paper'];
//random computer selection
function getComputerChoice() {
    newArray = array[Math.floor(Math.random() * array.length)]; 
    return(newArray);
}

const computerSelection = getComputerChoice(); 

let playerScore = 0;
let computerScore = 0; 
//plays one round and using users input and computer choice
//keeps score
function playRound(playerChoice, computerChoice) { 
    let playerSelection = prompt('Please enter your choice:'); 
    
        if ((computerSelection == 'scissors' && playerSelection == 'rock')
            || (computerSelection == 'paper' && playerSelection == 'scissors')
            || (computerSelection == 'rock' && playerSelection == 'paper')) {
                playerScore++
                console.log(`You win! ${playerSelection} beats ${computerSelection}. You: ${playerScore} - computer: ${computerScore}`);
        } else if (computerSelection == playerSelection) {
                console.log(`DRAW ${playerSelection} = ${computerSelection}. You: ${playerScore} - computer: ${computerScore}`); 
        } else {
                computerScore++
                console.log(`You loose ${computerSelection} beats ${playerSelection}. You: ${playerScore} - computer: ${computerScore}`); 
            } 
        }
//plays 5 rounds 
//displays result after each round
for (let i = 0; i < 5; i++) {
    playRound (); 
}