"use strict";

const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const scoreboard = document.querySelector('.scoreboard');
let playerScore = 0;
let computerScore = 0;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(playerScore < 5 && computerScore < 5) {
            let playerSelection = button.value;
            let computerSelection = getComputerChoice();
            result.textContent = playRound(playerSelection, computerSelection);
            scoreboard.textContent = `${playerScore} - ${computerScore}`;
        }

        if(playerScore === 5 || computerScore === 5){
            let endScreen = (playerScore === 5) ? "VICTORY\nPlay Again?" : "DEFEAT\nPlay Again?";
            if(window.confirm(endScreen)) {
                playerScore = 0;
                computerScore = 0;
                scoreboard.textContent = `${playerScore} - ${computerScore}`;
            }
        }
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
            computerScore += 1;
            roundResult = `You Lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(playerChoice)}`;
            break;
        case 1:
            playerScore += 1;
            roundResult = `You Win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}`;
            break;
        case -1:
            roundResult = `You Draw! ${capitalizeFirstLetter(playerChoice)} equals ${capitalizeFirstLetter(computerChoice)}`;
            break;
    }

    return roundResult;
}

function matchOutcome(choiceOne, choiceTwo) {
    let outcome = 0;
    if (choiceOne === choiceTwo) return -1;
    switch (choiceOne) {
        case 'rock':
            if(choiceTwo === 'scissors') {
                outcome = 1;
            }
            break;
        case 'paper':
            if(choiceTwo === 'rock') {
                outcome = 1;
            }
            break;
        case 'scissors':
            if(choiceTwo === 'paper') {
                outcome = 1;
            }
            break;
    }

    return outcome;
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}