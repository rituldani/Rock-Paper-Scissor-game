let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".img");
let msg = document.querySelector("#msg");
let Uscore = document.querySelector("#user-score");
let Cscore = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was ", userChoice);
        playGame(userChoice);
    });
});

const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
    console.log("user choice was ", userChoice);
    const compChoice = gencompChoice();
    console.log("computer choice was ", compChoice);

    if(userChoice === compChoice){
        // game draw
        drawGame();
    } else{
        userWin = true;
        if(userChoice === "rock"){
            // paper scissor
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // rock scissor
            userWin = compChoice === "scissors" ? false : true;
        } else if(userChoice === "scissors"){
            // rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        result(userWin);
    }
}
const result = (userWin) => {
    if(userWin){
        console.log("you won");
        userScore++;
        Uscore.innerText = userScore;
        msg.innerText = "You Won!";
        msg.style.backgroundColor = "Green";
    }
    else{
        compScore++;
        Cscore.innerText = compScore;
        console.log("you loss");
        msg.innerText = "Comp Won!";
        msg.style.backgroundColor = "Red";
    }
}