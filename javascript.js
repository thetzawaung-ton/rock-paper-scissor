console.log("hello world")

function getComputerChoice() {
    //GET computer choice with random number generator from 1 to 3//
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    //IF number is 1, return with the string 'rock'//
    //ELSE IF number is 2, return with the string 'paper'//
    //ELSE return 'scissors'//
    if(computerChoice === 1) {
        return 'rock';
    } else if ( computerChoice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    //GET human choice with prompt//
    let humanChoice = prompt('What do you choose? Rock, Paper, or Scissors', '');
    //DISPLAY the human choice in lowercase letters//
    return humanChoice.toLowerCase();
}

//CREATE new variables for human and computer score and set initial value to 0//
let humanScore = 0;
let ComputerScore = 0;

function playRound(humanChoice, computerChoice) {
    //IF humanChoice is rock and computerChoice is paper//
    if(humanChoice === 'rock' && computerChoice === 'paper') {
        //DISPLAY human loses//
        console.log('You lose! Paper beats rock');
    }
    //ELSE IF humanChoice is paper and computerChoice is scissors//
    else if(humanChoice === 'paper' && computerChoice === 'scissors') {
        //DISPLAY human loses//
        console.log('You lose! Scissors beats paper');
    }
    //ELSE IF humanChoice is scissors and computerChoice is rock//
    else if(humanChoice === 'scissors' && computerChoice === 'rock') {
        //DISPLAY human loses//
        console.log('You lose! Rock beats scissors');
    }
    //ELSE IF humanChoice is rock and computerChoice is scissors//
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        //DISPLAY human wins//
        console.log ('You win! Rock beats scissors');
    }
    //ELSE IF humanChoice is sicssors and computerChoice is paper//
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        //DISPLAY human wins//
        console.log ('You win! Scissors beats paper');
    }
    //ELSE IF humanChoice is same as computerChoice//
    else if (humanChoice === computerChoice) {
        //DISPLAY as a tie//
        console.log ('Ooof! It is a tie');
    }
    //ELSE//
    else {
        //DISPLAY human wins//
        console.log ('You wins! Paper beats rock');
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)