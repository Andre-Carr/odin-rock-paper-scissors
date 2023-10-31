"use strict";

//game();

const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.value;
        let computerSelection = getComputerChoice();
        div.textContent = playRound(playerSelection, computerSelection);
    })
});

function getComputerChoice() {
    let choices = new Array('rock', 'paper', 'scissors');
    return choices[Math.floor(Math.random() * 3)];
}

function promptPlayerChoice(testValue) {
    let playerChoice = "";
    do {
        playerChoice = prompt("Enter a choice of rock, paper, or scissors: ", testValue).toLowerCase();
    } while(playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors');
    return playerChoice;
}

function playRound(playerChoice, computerChoice) {
    let roundResult = "";
    switch (matchOutcome(playerChoice, computerChoice)) {
        case 0:
            roundResult = `You Lose! ${computerChoice} beats ${playerChoice}`;
            break;
        case 0.5:
            roundResult = `You Draw! ${playerChoice} equals ${computerChoice}`;
            break;
        case 1:
            roundResult = `You Win! ${playerChoice} beats ${computerChoice}`;
            break;
    }

    return roundResult;
}

function matchOutcome(choiceOne, choiceTwo) {
    let result = 0;
    switch (choiceOne) {
        case 'rock':
            if(choiceTwo === 'scissors') {
                result = 1;
            }
            break;
        case 'paper':
            if(choiceTwo === 'rock') {
                result = 1;
            }
            break;
        case 'scissors':
            if(choiceTwo === 'paper') {
                result = 1;
            }
            break;
    }

    if (choiceOne === choiceTwo) {
        result = 0.5;
    }

    return result;
}

function game() {
    for(let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = promptPlayerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
}