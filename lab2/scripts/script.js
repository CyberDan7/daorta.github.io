console.log("running.js");

// Add event listener to the button
let correctNumber = 13;
let correctMessage = "Correct!";
let incorrectMessage = "Incorrect. Enter a number. Try again!";
let userGuesses = []; // this is an array to store all the user guesses.
let attemptsLeft = 7; // number of attempts allowed

// the next 3 lines of code are used to select the input element, button element, and result display element from the HTML document using their respective IDs. These variables will be used later to get the user's guess, handle button clicks, and display the result of the guess.

let guessInput = document.querySelector("#guessInput");
// let guessInput = document.getElementById("guessInput"); --> this is an another way to find/select the input element by its ID

let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");
let outputElement = document.querySelector("#outputElement"); // this selects the output element to display the list of guesses

guessButton.addEventListener("click", function displayWinMessage() {
    // Read and normalize the guess
    let inputValue = guessInput.value;
    let guess = Number(inputValue);

    // Validate input first (don't consume an attempt on invalid input)
    if (inputValue === "" || isNaN(guess)) {
        guessResult.textContent = incorrectMessage;
        guessResult.style.color = "red";
    } else {
        // record the guess and consume an attempt
        userGuesses.push(inputValue);
        attemptsLeft--;

        // Correct guess (win)
        if (guess === correctNumber) {
            guessResult.textContent = correctMessage;
            guessResult.style.color = "green";
            guessButton.disabled = true;
        }
        // No attempts left -> lost
        else if (attemptsLeft <= 0) {
            guessResult.textContent = "You Lost";
            guessResult.style.color = "red";
            guessButton.disabled = true;
        }
        // Guess too high
        else if (guess > correctNumber) {
            guessResult.textContent = "Too high! Try again.";
            guessResult.style.color = "orange";
        }
        // Guess too low
        else {
            guessResult.textContent = "Too low! Try again.";
            guessResult.style.color = "orange";
        }
    }

    // Display all user guesses and attempts left
    outputElement.textContent = "Your guesses: " + userGuesses.join(", ") + " | Attempts left: " + attemptsLeft;
});






