var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var orangeJuiceMain = function (numOfGuests, numOfGlasses) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var myOutputValue = numOfGuests * 4 * numOfGlasses;
  return myOutputValue;
};

var paintMain = function (costPerLitre, numOfRooms, numOfCoats) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var myOutputValue = (costPerLitre * 3 * 3 * numOfCoats * numOfRooms) / 300;
  return myOutputValue;
};

var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  // Generate a random dice number

  // Assign random dice roll to 2 variables and setting snake Eyes as a winning condition
  var randomDiceNumber1 = rollDice();
  var randomDiceNumber2 = rollDice();
  var gotSnakeEyes = randomDiceNumber1 == 1 && randomDiceNumber2 == 1;

  var myOutputValue =
    "You just rolled a " +
    randomDiceNumber1 +
    " and a " +
    randomDiceNumber2 +
    ". Your Guess is " +
    input +
    ". ";
  if (
    randomDiceNumber1 == input &&
    randomDiceNumber2 == input &&
    !gotSnakeEyes
  ) {
    myOutputValue += "Your are correct.";
  } else {
    myOutputValue += "Your are wrong.";
    return myOutputValue;
  }
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  // Set a default value for myOutputValue
  var myOutputValue = "hello world";
  // If input is our secret phrase, change the value of myOutputValue
  if (input == "palatable papaya") {
    myOutputValue = "you wrote the secret phrase!";
  }
  // return myOutputValue as output
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  // set a input value for myOutputValue
  var diceNumber = rollDice();
  var myOutputValue = `Its wrong, the dice is ${diceNumber}.`;
  // if input is the same as rollDice then set it as correct
  if (input == diceNumber) {
    myOutputValue = `Its ${diceNumber}! Congrats you guessed it correctly!`;
  }
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  // set a input value for myOutputValue
  var diceNumber = rollDice();
  var myOutputValue = `The roll is ${diceNumber}. Your guess is ${input}.`;
  var twiceDiceNumber = input * 2;
  // if input is the same as rollDice then set it as correct
  if (twiceDiceNumber == diceNumber) {
    myOutputValue += ` Congrats you guessed it correctly!`;
  } else if (twiceDiceNumber > 6) {
    myOutputValue += ` Maybe lower your guess.`;
  } else {
    myOutputValue += ` Totally wrong!`;
  }
  return myOutputValue;
};
