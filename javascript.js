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
let computerScore = 0;

function playGame() {

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

    for(let i = 1; i < 6; i++) {
        //CALL getHumanChoice function and assign in variable humanSelection//
        const humanSelection = getHumanChoice();
        //CALL getComputerChoice function and assign in variable computerSelection//
        const computerSelection = getComputerChoice();

        //INVOKE playRound function with above variables as arguments//
        playRound(humanSelection, computerSelection);
    }

    // IF human score is greater than computer score//
    if( humanScore > computerScore) {
        //Display human as a winner//
        console.log(`Congrats! You win with the score of ${humanScore} - ${computerScore}`)
    }

    // ELSE IF human score is less than computer score//
    else if( humanScore > computerScore) {
        //Display human as a loser//
        console.log(`Ahhhh! You lose with the score of ${humanScore} - ${computerScore}`)
    }

    //ELSE //
    else {
        //Display a tie result//
        console.log(`Ooof! It is a tie with the score of ${humanScore} - ${humanScore} `)
    }
}

//INVOKE playGame function//
playGame();