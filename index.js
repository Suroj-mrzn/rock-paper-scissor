//Rock paper scissor

const choices= ["rock", "paper", "scissor"];
const PlayerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const resultDisplay = document.getElementById("Result");

function play(PlayerChoice){

    const ComputerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(ComputerChoice);
    let result = "";

    if(PlayerChoice === ComputerChoice){

        result = "It's A Tie.";
    }
    else{
        switch(PlayerChoice){
            case "rock":
                 result = (ComputerChoice === "scissor") ? "You win." : "You lose.";
                 break;

            case "paper":
                 result = (ComputerChoice === "rock") ? "You win." : "You lose.";
                 break;

            case "scissor":
                 result = (ComputerChoice === "paper") ? "You win." : "You lose.";
                 break;
        }
    }
    PlayerDisplay.textContent = `PLAYER: ${PlayerChoice}`;
    ComputerDisplay.textContent = `COMPTER: ${ComputerChoice}`;
    resultDisplay.textContent = result;
}
//RESULT NOT sHOWING FIX
//ADD SCORE DISPLAYs
//IDK BETTER CSS 
//