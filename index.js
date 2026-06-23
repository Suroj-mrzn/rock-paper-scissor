//Rock paper scissor

const choices= ["rock", "paper", "scissor"];
const PlayerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const resultDisplay = document.getElementById("Result");
const PlayerScoreDisplay = document.getElementById("PlayerScoreDisplay");
const ComputerScoreDisplay = document.getElementById("ComputerScoreDisplay");
let PlayerScore = 0;
let ComputerScore = 0;

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
    ComputerDisplay.textContent = `COMPUTER: ${ComputerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.style.display = "block";

    resultDisplay.classList.remove("greentext", "redtext");
    
    switch(result){
        case "You win.":
            resultDisplay.classList.add("greentext");
            PlayerScore++;
            PlayerScoreDisplay.textContent = PlayerScore;
            break;

        case "You lose.":
            resultDisplay.classList.add("redtext");
             ComputerScore ++;
             ComputerScoreDisplay.textContent = ComputerScore;
            break;
    }
}
    function resetGame()
     {
    PlayerScore = 0;
    ComputerScore = 0;
    PlayerScoreDisplay.textContent = 0;
    ComputerScoreDisplay.textContent = 0;
    resultDisplay.style.display = "none";
    PlayerDisplay.textContent = "PLAYER: ";
    ComputerDisplay.textContent = "COMPUTER: "; 
}