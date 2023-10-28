"use strict";

function getComputerChoice() {
    let choices = new Array('rock', 'paper', 'scissors');
    return choices[Math.floor(Math.random() * 2)];
}

function promptPlayerChoice(testValue) {
    let playerChoice = "";
    do {
        playerChoice = prompt("Enter a choice of rock, paper, or scissors: ", testValue).toLowerCase();
    } while(playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors');
    return playerChoice;
}

function playRound(playerChoice, computerChoice) {

}

function matchOutcome(choiceOne, choiceTwo) {
    let result = 0;
    switch (choiceOne) {
        case 'rock':
            if( choiceTwo === 'scissors') {
                result = 1;
            }
            break;
        case 'paper':
            if( choiceTwo === 'rock') {
                result = 1;
            }
            break;
        case 'scissors':
            if( choiceTwo === 'paper') {
                result = 1;
            }
            break;
    }

    if (choiceOne === choiceTwo) {
        result = -1;
    }

    return result;
}