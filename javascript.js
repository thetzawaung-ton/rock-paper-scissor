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