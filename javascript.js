console.log("hello world")

function getComputerChoice() {
    //GET computer choice with random number generator from 1 to 3//
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    //IF number is 1, return with the string 'Rock'//
    //ELSE IF number is 2, return with the string 'Paper'//
    //ELSE return 'Scissors'//
    if(computerChoice === 1) {
        return 'Rock';
    } else if ( computerChoice === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    //GET human choice with prompt and return the same input//
    let humanChoice = prompt('What do you choose? Rock, Paper, or Scissors', '');
    return humanChoice;
}