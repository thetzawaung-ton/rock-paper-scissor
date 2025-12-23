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

//SET initial values for human and computer selections
let humanSelection = '';
let computerSelection = getComputerChoice();

//CREATE elements and put them in body
const rockButton = document.createElement('button');
rockButton.textContent = 'rock';

const paperButton = document.createElement('button');
paperButton.textContent = 'paper';

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'scissors';

const result = document.createElement('div');

const score = document.createElement('div');

const body = document.querySelector('body');
body.append(result,score,rockButton, paperButton, scissorsButton);


//FUNCTION for deciding human or computer wins and add scores
function playRound(humanChoice, computerChoice) {
    if(humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'rock'
    ) {
        result.textContent = `You lose because ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
    } else if (humanChoice === computerChoice) {
        result.textContent = `It's a tie! You both chose ${humanChoice}`;
    } else {
        result.textContent = `You win because ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    }
    score.textContent = `Human Score: ${humanScore}   Computer Score: ${computerScore}`
}

const buttons = document.querySelectorAll('button');

//CREATE addEventListener to connect human selection and buttons
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        humanSelection = e.target.textContent;
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    })
})