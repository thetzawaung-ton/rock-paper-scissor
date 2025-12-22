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

//CREATE new variables for human and computer score and set initial value to 0//
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    //IF humanChoice is rock and computerChoice is paper//
    if(humanChoice === 'rock' && computerChoice === 'paper') {
        //DISPLAY human loses//
        console.log('You lose! Paper beats rock');
        //ADD computer score by 1//
        computerScore += 1;
    }
    //ELSE IF humanChoice is paper and computerChoice is scissors//
    else if(humanChoice === 'paper' && computerChoice === 'scissors') {
        //DISPLAY human loses//
        console.log('You lose! Scissors beats paper');
        //ADD computer score by 1//
        computerScore += 1;
    }
    //ELSE IF humanChoice is scissors and computerChoice is rock//
    else if(humanChoice === 'scissors' && computerChoice === 'rock') {
        //DISPLAY human loses//
        console.log('You lose! Rock beats scissors');
        //ADD computer score by 1//
        computerScore += 1;
    }
    //ELSE IF humanChoice is rock and computerChoice is scissors//
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        //DISPLAY human wins//
        console.log ('You win! Rock beats scissors');
        //ADD human score by 1//
        humanScore += 1;
    }
    //ELSE IF humanChoice is sicssors and computerChoice is paper//
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        //DISPLAY human wins//
        console.log ('You win! Scissors beats paper');
        //ADD computer score by 1//
        computerScore += 1;
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
        //ADD computer score by 1//
        computerScore += 1;
    }
}

let humanSelection = '';
let computerSelection = getComputerChoice();

const rockButton = document.createElement('button');
rockButton.textContent = 'rock';

const paperButton = document.createElement('button');
paperButton.textContent = 'paper';

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'scissors';

const body = document.querySelector('body');
body.append(rockButton, paperButton, scissorsButton);

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        humanSelection = e.target.textContent;
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    })
})