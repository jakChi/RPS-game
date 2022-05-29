const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

const generateComputerChoice = function () {
    //here we add 1 to every randomized number for better readability, if we don't it's an array and count starts at index 0
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1); 
    
    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

const getResult = function () {
    if (computerChoice === userChoice) {
        result = "it's draw!";
        resultDisplay.style.color = "white";
    }
    if (userChoice === "rock" && computerChoice === "paper") {
        result = 'you lose!';
        resultDisplay.style.color = "red";
    }
    if (userChoice === "rock" && computerChoice === "scissors") {
        result = 'you win!';
        resultDisplay.style.color = "green";
    }
    if (userChoice === "paper" && computerChoice === "scissors") {
        result = 'you lose!';
        resultDisplay.style.color = "red";
    }
    if (userChoice === "paper" && computerChoice === "rock") {
        result = 'you win!';
        resultDisplay.style.color = "green";
    }
    if (userChoice === "scissors" && computerChoice === "paper") {
        result = 'you win!';
        resultDisplay.style.color = "green";
    }
    if (userChoice === "scissors" && computerChoice === "rock") {
        result = 'you lose!';
        resultDisplay.style.color = "red";
    }

    resultDisplay.innerHTML = result;
}