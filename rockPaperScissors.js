"use strict";

//game();

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
            scoreboard.textContent = "";
            result.textContent = (playerScore === 5) ? "VICTORY" : "DEFEAT";
            playerScore = 0;
            computerScore = 0;
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
            roundResult = `You Lose! ${computerChoice} beats ${playerChoice}`;
            break;
        case 1:
            playerScore += 1;
            roundResult = `You Win! ${playerChoice} beats ${computerChoice}`;
            break;
        case -1:
            roundResult = `You Draw! ${playerChoice} equals ${computerChoice}`;
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

function game() {
    for(let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = promptPlayerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
}