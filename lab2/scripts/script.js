console.log("running.js");

// Add event listener to the button
let correctNumber = 13;
let correctMessage = "Correct!";
let incorrectMessage = "Incorrect. Try again!";


// the next 3 lines of code are used to select the input element, button element, and result display element from the HTML document using their respective IDs. These variables will be used later to get the user's guess, handle button clicks, and display the result of the guess.

let guessInput = document.querySelector("#guessInput");
// let guessInput = document.getElementById("guessInput"); --> this is an another way to find/select the input element by its ID

let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");



function displayWinMessage() {
    guessResult.textContent = correctMessage;
    guessResult.style.color = "green"; 
    
    // The above line is used to set the text content of the guessResult element to the value of the correctMessage variable, which is "Correct!". It also changes the color of the text to green using the computedStyleMap property.
    
    // this is an if statement to display Correct! or 
}

guessButton.addEventListener("click", function displayWinMessage() {
 
    if (correctNumber == guessInput.value) {
        guessResult.textContent = correctMessage;
        guessResult.style.color = "green";  // this line is used to change the color of the text to green using the computedStyleMap property.
    } else {
        guessResult.textContent = incorrectMessage; 
        guessResult.style.color = "red";  // this line is used to change the color of the text to red using the computedStyleMap property.
    }
}); // note right here we add a ")" to close the encapsulated function that we created for the event listener.

