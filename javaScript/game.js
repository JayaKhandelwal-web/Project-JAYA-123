// Initialize scores
let userscore = 0;
let computerscore = 0;

// Select all elements having class "choices"
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

// Function to generate computer choice randomly
let GenComChoice = () => {
    let options = ["rock", "paper", "scissor"];

    // Math.random() gives value between 0 and 1
    // Multiply by 3 → range becomes 0 to 2.999
    // Math.floor() converts it into 0, 1, or 2 (integer index)
    const randIdx = Math.floor(Math.random() * 3);

    return options[randIdx]; // return random choice
};

let DrawGame = () => {
    console.log("game was Draw");
    msg.innerText="game was Draw";
     msg.style.backgroundColor = "gray";
}


let showWinner = (userWin) => {
    if (userWin) {
        console.log("You Win");
        msg.innerText = "You Win 🎉";
        msg.style.backgroundColor = "green";
        userscore++;
    } else {
        console.log("Computer Wins");
        msg.innerText = "You Lose 😢";
        msg.style.backgroundColor = "red";
        computerscore++;
    }
};

let playGame = (userChoice) => {
    console.log("userChoice =", userChoice);
    const computerChoice = GenComChoice();
    console.log("computer choice is ", computerChoice);
    if (userChoice === computerChoice) {
    // If both choices same → draw
    DrawGame();
   
} 
else {
    let userWin = true;

    if (userChoice === "rock") {
        // rock vs paper → lose
        // rock vs scissor → win
        userWin = computerChoice === "paper" ? false : true;
    } 
    else if (userChoice === "paper") {
        // paper vs scissor → lose
        // paper vs rock → win
        userWin = computerChoice === "scissor" ? false : true;
    } 
    else {
        // scissor vs rock → lose
        // scissor vs paper → win
        userWin = computerChoice === "rock" ? false : true;
    }
 showWinner(userWin);
    // Result
    if (userWin) {
        console.log("You Win 🎉");
    } else {
        console.log("Computer Wins 🤖");
    }
}
}
// Add click event on each choice
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        // Get id of clicked element (rock / paper / scissor)
        const userChoice = choice.querySelector("img").id;
        // console.log("Choice was clicked:", userChoice);
        // Call game function
        playGame(userChoice);
         
        
    });
});