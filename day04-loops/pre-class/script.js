// Store guesses in a global array that persists across Submits.
var guesses = [];

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  // Add the user's guess to the guesses array.
  guesses.push(input);

  // Generate a random dice number.
  var randomDiceNumber = rollDice();

  // Initialise output to communicate loss.
  // Output the record of all guesses regardless of loss or win.
  var myOutputValue = "You lose. Your guesses: " + guesses;

  // If the guess matches the dice roll, change output to communicate win.
  if (randomDiceNumber == input) {
    myOutputValue = "You win. Your guesses: " + guesses;
  }
  // Return output value.
  return myOutputValue;
};

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  var myOutputValue = "";

  for (var Counter = 0; Counter <= 6; Counter++) {
    myOutputValue = myOutputValue + `Hello `;
  }
  return myOutputValue;
};

var loopWithinLoopMain = function (input) {
  // Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.
  var myOutputValue = "";
  for (var outerCounter = 0; outerCounter < input; outerCounter++) {
    for (var innerCounter = 0; innerCounter < input * 2; innerCounter++) {
      myOutputValue = myOutputValue + `Hello `;
    }
    myOutputValue = myOutputValue + `<br>`;
  }
  return myOutputValue;
};

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var myOutputValue = "";
  for (var outerCounter = 0; outerCounter < input; outerCounter++) {
    for (var innerCounter = 0; innerCounter == true; innerCounter++) {
      myOutputValue = myOutputValue + `Hello `;
    }
    myOutputValue = myOutputValue + `<br>`;
  }
  return myOutputValue;
};
