console.log("running.js");

// Add event listener to the button
let correctNumber = 13;
let correctMessage = "Correct!";
let incorrectMessage = "Incorrect. Enter a number. Try again!";
let userGuesses = []; // this is an array to store all the user guesses.

// the next 3 lines of code are used to select the input element, button element, and result display element from the HTML document using their respective IDs. These variables will be used later to get the user's guess, handle button clicks, and display the result of the guess.

let guessInput = document.querySelector("#guessInput");
// let guessInput = document.getElementById("guessInput"); --> this is an another way to find/select the input element by its ID

let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");
let outputElement = document.querySelector("#outputElement"); // this selects the output element to display the list of guesses

guessButton.addEventListener("click", function displayWinMessage() {
    userGuesses.push(guessInput.value); // this line adds the user's guess to the userGuesses array using the push method.
    console.log(userGuesses); // this line logs the userGuesses array to the console, allowing you to see all the guesses made by the user.
    
    // Check if input is a valid number
    if (isNaN(guessInput.value) || guessInput.value === "") {
        guessResult.textContent = incorrectMessage; 
        guessResult.style.color = "red";
    }
    // Check if guess is correct
    else if (correctNumber == guessInput.value) {
        guessResult.textContent = correctMessage;
        guessResult.style.color = "green";
    }
    // Check if guess is too high
    else if (guessInput.value > correctNumber) {
        guessResult.textContent = "Too high! Try again.";
        guessResult.style.color = "orange";
    }
    // Check if guess is too low
    else if (guessInput.value < correctNumber) {
        guessResult.textContent = "Too low! Try again.";
        guessResult.style.color = "orange";
    }
    
    // Display all user guesses below the result message
    outputElement.textContent = "Your guesses: " + userGuesses.join(", ");
}); // note right here we add a ")" to close the encapsulated function that we created for the event listener.






