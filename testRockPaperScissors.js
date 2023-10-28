"use strict";

// Test computerChoice Equals 'rock' OR 'paper' OR 'scissors'
let computerChoice = getComputerChoice();
console.assert(
    computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors'
    , "computer choice does not equal 'rock' or 'paper' or 'scissors' "
);

/*
// Test playerChoice Equals randomChoice
let choices = new Array('rock','paper','scissors');
let randomChoice = Math.floor(Math.random() * 2);
console.assert(
    promptPlayerChoice(choices[randomChoice]) === choices[randomChoice]
    , "player choice does not equal random choice"
);

// Test playerChoice is case insensitive
console.assert(
    promptPlayerChoice("rOcK") === 'rock'
    , "player choice is not case insensitive"
);
*/

// Test 'rock' beats 'scissors'
console.assert(
    matchOutcome('rock', 'scissors')
    , "rock does not beat scissors" 
);

// Test 'scissors' beats 'paper'
console.assert(
    matchOutcome('scissors', 'paper')
    , "scissors does not beat paper" 
);

// Test 'paper' beats 'rock'
console.assert(
    matchOutcome('paper', 'rock')
    , "paper does not beat rock" 
);

// Test round result of player choice = 'rock' and computer choice = 'paper'
console.assert(
    playRound('rock', 'paper' === "You Lose! paper beats rock")
    , "round result of playerChoice = 'rock' and computerChoice = 'paper' is incorrect" 
);

// Test round result of player choice = 'paper' and computer choice = 'rock'
console.assert(
    playRound('paper', 'rock' === "You Win! paper beats rock")
    , "round result of playerChoice = 'paper' and computerChoice = 'rock' is incorrect" 
);

// Test round result of player choice = 'rock' and computer choice = 'rock'
console.assert(
    playRound('paper', 'rock' === "You Draw! rock equals rock")
    , "round result of playerChoice = 'rock' and computerChoice = 'rock' is incorrect" 
);