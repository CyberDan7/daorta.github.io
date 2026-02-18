//Event Listeners (the buttons will trigger the functions when clicked)
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

alert("running external JS code!")

//Global variables
let randomNumber;
let attempts = 0;
let wins = 0;
let losses = 0;



initializeGame();

function initializeGame() {
   randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);
   attempts = 0;
   
   //hiding the Reset button
   document.querySelector("#resetBtn").style.display = "none";

   //showing the Guess button
   document.querySelector("#guessBtn").style.display = "inline";

   let playerGuess = document.querySelector("#playerGuess");
   playerGuess.focus();         // puts cursor in the input box when the game starts
   playerGuess.value = "";      //clearing the textbox when the game starts

   let feedback = document.querySelector("#feedback");
   feedback.textContent = "";   //clearing the feedback message when the game starts
  
   //adding focus to textbox basically puts cursor in the box and highlights textbox.
    document.querySelector("#playerGuess").focus();

    let guesses = document.querySelector("#guesses");
    guesses.textContent = ""; //clears the list of  guesses from previous game when the new game starts.
}

// we dont declare the gameOver() function like the initializeGame() function because it will hide the Guess button and show the Reset button only when the game is over, which happens when the player either wins or loses. The gameOver() function will be called from within the checkGuess() function when the game ends, so it doesn't need to be declared at the top of the script. By declaring it later in the code, we can keep our code organized and easier to read, as related functions are grouped together.

function gameOver() {
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");

    guessBtn.style.display = "none"; //hides Guess button
    resetBtn.style.display = "inline"; //shows Reset button


}


function checkGuess() {
    let feedback = document.querySelector("#feedback"); // declares variable "feedback" and uses document.querySelector() to select the HTML id #feedback.
     feedback.textContent = "";                         // clears any previous feedback message by setting the text content of the feedback element to an empty string
    
    let guess = document.querySelector("#playerGuess").value;       // retrieves the value entered by the player in the input field with id "playerGuess" and stores it in the variable guess
    console.log("Player guess: " + guess);

    if (guess < 1 || guess > 99 || isNaN(guess)) {  // if guess is neither a btwn 1-99 nor a number, then red feedback.
        let feedback = document.querySelector("#feedback");         // previously alert("Guess out of range!");
        feedback.textContent = "Enter a number between 1 and 99.";  // this line displays the message on the webpage instead of an alert box
        feedback.style.color = "red";                               // changes the color of the feedback message to red
        return;
    }

    attempts++;                             // increments the attempts variable by 1 each time the player makes a guess
    console.log("Attempts:" + attempts);
    feedback.style.color = "orange";        // changes the color of the feedback message to orange

    if (guess == randomNumber) {
        feedback.textContent = "You guessed it! You Won!"
        feedback.style.color = "darkgreen";
        wins++;
        displayStats();
        gameOver();

    } else {
        document.querySelector("#guesses").textContent += guess + " "; // uses DOM to grab the current guess, use += to add it to the list of previous guesses displayed on the webpage.
        if (attempts == 7) {
            feedback.textContent = "Sorry, you lost! The number was " + randomNumber;
            feedback.style.color = "darkred";
            losses++;
            displayStats();
            gameOver();
        } else if (guess > randomNumber) {
            feedback.textContent = "Guess was high";
        } else {
            feedback.textContent = "Guess was low";
        }
    }

    let attemptCount = document.querySelector("#attemptCount");
    attemptCount.textContent = 7 - attempts; // updates the text content of the element with id "attemptCount" to show the number of remaining attempts, which is calculated by subtracting the current number of attempts from 7 (the total allowed attempts).

}

function displayStats() {
    let stats = document.querySelector("#stats");
    stats.textContent = "Wins: " + wins + " Losses: " + losses;
}


/*

//Document Object Model (DOM) manipulation - specifically, changing the color of the h1 element to red
document.querySelector("h1").style.color = "red";

document.querySelector("#guessBtn").style.backgroundColor = "orange";
document.querySelector("#guessBtn").style.fontSize = "20px";
document.querySelector("#guessBtn").style.fontWeight = "bold";

*/