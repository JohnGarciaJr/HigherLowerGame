/***** START PROVIDED CODE ******/
   
// Returns the current value the user has 
// entered into the guess input box.
function getGuessInput() {
  // This will get the value of an input element with the id "guess-input".
  let guessString = document.getElementById("guess-input").value;

  // Converts the string to a number.
  let guessNumber = Number(guessString);

  // Returns the number. 
  return guessNumber;
}

// Sets the current value  entered into the 
// guess input box to 'value'.
function setGuessInput(value) {
  document.getElementById("guess-input").value = value;
}

// Hides all messages shown to the user within
// the "message-container" element.
function hideAllMessages() {
  // Find all message elements.
  let messages = document.querySelectorAll("#message-container > *");

  // Add the "hidden" class to each of the message elements.
  for (let i = 0; i < messages.length; i++) {
    messages[i].classList.add("hidden");
  }
}

// Hides all messages and then shows the one
// with with the id attribute matching 'id' 
// parameter.
// Example: showMessage("higher-message")
function showMessage(id) {

  // Hide all the messages.
  hideAllMessages();

  // Find the message with 'id'.
  let message = document.getElementById(id);
  if (message != null) {
    // Show the message.
    message.classList.remove("hidden");
  } else {
    console.log(`${id} does not exist.`);
  }
}

// Shows the remaining guess count.
function showRemainingGuesses(value) {
  document.getElementById("remaining-guesses").innerHTML = value;
}

/***** END PROVIDED CODE ******/