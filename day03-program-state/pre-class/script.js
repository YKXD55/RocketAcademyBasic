// global variables
var globalVariable = 0;

// Store previous dice Number
var previousDiceNum;

// Store number of rolls and number of wins
var numberOfRolls = 0,
  numberOfWins = 0;

// Used by mostRolledMain. Create array for dice number and second row to store number of rolls
var diceArray = [0, 0, 0, 0, 0, 0];

//Used by guessingMain. Create variable to store points if player guess correctly
var pointSystem = 0;

//Used by advancedGuessingMain. Create variable to store points if player guess correctly
var advancedPointSystem = 0;

// Used in redModeMain. we set the initial state of mode
var mode = "green";

// Used in followAlongMain. Set the initial game states
var currentGameMode = "waiting for user name";
var bankRoll = 10;
var userName = "";

var main = function (input) {
  var randomDiceNumber = rollDice();

  var myOutputValue = "you lose. current bank roll: " + bankRoll;

  // change bankRoll state if the dice matches the randomDice
  if (randomDiceNumber == input) {
    bankRoll = bankRoll + 1;

    myOutputValue = "you win. current bank roll: " + bankRoll;
  }

  return myOutputValue;
};

// randomise the roll value
var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  // function scope
  console.log(`globalVariable has a value of ${globalVariable}`);
  // we can manipulate the value of a global varaible
  // without having to re-declare using the var keyword:
  globalVariable += 1;
  console.log(`globalVariable now has a value of ${globalVariable}`);
  var myOutputValue;
  if (globalVariable % 2 == 0) {
    // block scope
    // we can access both myOutputValue and globalVariable within block scope
    myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
  } else {
    myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
  }
  return myOutputValue;
};

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue = "you lose";

  if (randomDiceNumber == input) {
    myOutputValue = "you win";
  }
  return myOutputValue;
};

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue = `Your last roll was ${previousDiceNum}. You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`;

  if (randomDiceNumber == input) {
    myOutputValue = `Your last roll was ${previousDiceNum}. You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`;
  }
  previousDiceNum = randomDiceNumber;
  console.log(`Last Roll is ${previousDiceNum}`);
  return myOutputValue;
};

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var myOutputValue;
  var randomDiceNumber = rollDice();

  //Add 1 each time dice is rolled
  numberOfRolls++;
  var percentageWin = (numberOfWins / numberOfRolls) * 100;
  var myOutputValue;

  if (randomDiceNumber == input) {
    //Add 1 each time guess correctly
    numberOfWins++;
    percentageWin = (numberOfWins / numberOfRolls) * 100;

    return (myOutputValue = `You win ${percentageWin}% of the time. You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`);
  }
  previousDiceNum = randomDiceNumber;
  console.log(`Last Roll is ${previousDiceNum}`);

  return (myOutputValue = `You win ${percentageWin}% of the time. You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`);
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue;
  var randomDiceNumber = rollDice();
  //declare array position to be inserted
  var arrayPosition = randomDiceNumber - 1;
  // To add one into the number that dice just rolled into array
  diceArray[arrayPosition] += 1;
  console.log(diceArray);
  var maxOutcome = 0;
  var mostRolledDice;

  for (var i = 0; i < 5; i += 1) {
    if (diceArray[i] > maxOutcome) {
      maxOutcome = diceArray[i];
      mostRolledDice = i + 1;
      console.log(`Most rolled Dice is` + mostRolledDice);
    }
  }
  if (randomDiceNumber == input) {
    return (myOutputValue = `You just rolled a ${randomDiceNumber}. ${mostRolledDice} is the number you roll the most at ${maxOutcome} times. You guessed ${input}. You win!`);
  }

  myOutputValue = `You just rolled a ${randomDiceNumber}. ${mostRolledDice} is the number you roll the most at ${maxOutcome} times. You guessed ${input}. You lose!`;
  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. <br> You lose! <br> Your current points is ${pointSystem}`;
  var differenceInRoll = Math.abs(randomDiceNumber - input);
  console.log(`Dice number is ${randomDiceNumber}`);
  if (randomDiceNumber == input) {
    pointSystem += 2;
    return (myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. <br> You Win 2 points! <br> Your current points is ${pointSystem}.`);
  } else if (differenceInRoll <= 1) {
    pointSystem += 1;
    return (myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. <br> You Win 1 point! <br> Your current points is ${pointSystem}.`);
  } else return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.

  var randomDiceNumber = rollDice();
  var myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. <br> You lose! <br> Your current points is ${advancedPointSystem}`;
  var differenceInRoll = Math.abs(randomDiceNumber - input);
  console.log(`Dice number is ${randomDiceNumber}`);
  console.log(`Difference in roll and input is ${differenceInRoll}`);
  if (randomDiceNumber == input) {
    advancedPointSystem += 5;
    return (myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. <br> You Win 5 points! <br> Your current points is ${advancedPointSystem}.`);
  } else if (differenceInRoll <= 1) {
    pointSystem += 4;
    return (myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. <br> You Win 4 point! <br> Your current points is ${pointSystem}.`);
  } else if (differenceInRoll <= 2) {
    pointSystem += 3;
    return (myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. <br> You Win 3 point! <br> Your current points is ${pointSystem}.`);
  } else if (differenceInRoll <= 3) {
    pointSystem += 2;
    return (myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. <br> You Win 2 point! <br> Your current points is ${pointSystem}.`);
  } else if (differenceInRoll <= 4) {
    pointSystem += 1;
    return (myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. <br> You Win 1 point! <br> Your current points is ${pointSystem}.`);
  }
  return myOutputValue;
};

//For a program with only one input field, the program must be 'smart' enough to understand the context of the inputs based on the prevailing game states.

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  var myOutputValue = "";
  var userGuess;
  if (currentGameMode == "waiting for user name") {
    // set the name
    userName = input;

    // now that we have the name, switch the mode
    currentGameMode = "dice game";

    myOutputValue = "Hello " + userName;
  } else if (currentGameMode == "dice game") {
    // dice game logic
    var randomDiceRoll = rollDice();
    userGuess = input;
    myOutputValue =
      userName +
      " you lost! you guessed: " +
      input +
      "you rolled: " +
      randomDiceRoll +
      " current bank roll: " +
      bankRoll;

    if (userGuess == randomDiceRoll) {
      bankRoll = bankRoll + 1;
      myOutputValue =
        userName +
        " you won! you guessed: " +
        input +
        "you rolled: " +
        randomDiceRoll +
        " your current bank roll: " +
        bankRoll;
    }
  }

  return myOutputValue;
};

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  } else if (input == "redmode") {
    mode = "red";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  // reassign the value of myOutputValue is mode is at state 'blue'
  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  } else if (mode == "red") {
    myOutputValue = `Oh noooo, you are damned, trapped in a world of codes.`;
  }
  return myOutputValue;
};
