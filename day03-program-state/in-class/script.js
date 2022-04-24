//Randomise computer to choose between three different words

var rollZeroToTwo = function () {
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.floor(randomNumber);
  return randomInteger;
};

//Randomise computer to choose between three different words

var rollTwoToFour = function () {
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.floor(randomNumber) + 2;
  return randomInteger;
};

//assign win rate
var gamesPlayed = 0;
var gamesWon = 0;
var differenceToWin = 0;

//create array for "banana", "chisel","faucet"
var arrayValue = [0, 1, 2];
var outputArray = ["banana", "chisel", "faucet"];
var previousGuessValue;

//Used in Dice within. to generate Dice roll and withinNumber
var rollDice = function () {
  var randomNumber = Math.random() * 6;
  var randomInteger = Math.ceil(randomNumber);
  return randomInteger;
};
var rollOneToThree = function () {
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.ceil(randomNumber);
  return randomInteger;
};

// Used in Dice4d. To create a mode for dice and 4d
var gameMode = `dice`;
var diceGamesWon = 0;

var rollFourDigits = function () {
  var randomNumber = Math.random() * 9999;
  var randomInteger = Math.floor(randomNumber);
  return randomInteger;
};

//--------------------------------------------------------------------------

var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var comChosenValue = rollZeroToTwo();

  console.log(`output computer choice is ${comChosenValue}.`);
  var comChoice = outputArray[comChosenValue];
  console.log(`output computer choice is ${comChoice}.`);
  var myOutputValue;
  var inputValue = 0;
  gamesPlayed++;
  console.log(`games played: ${gamesPlayed}`);

  // Assign a value to each input and User can only input scissor, paper and stone
  if (input == "banana") {
    inputValue = 0;
  } else if (input == "chisel") {
    inputValue = 1;
  } else if (input == "faucet") {
    inputValue = 2;
  } else {
    myOutputValue =
      "You entered an invalid input. Enter only 'banana', 'chisel' or 'faucet'.";
    return myOutputValue;
  }

  if (comChosenValue == inputValue) {
    gamesWon++;
    if (gamesWon == 2) {
      myOutputValue = `You have won the game. you guessed ${input} and computer chose ${comChoice}. You can play the game again.`;
      gamesWon = 0;
      return myOutputValue;
    }

    console.log(`output comChosenValue: ${comChosenValue}`);
    differenceToWin = 2 - gamesWon;
    myOutputValue = `You have made the correct guess. you guessed ${input} and computer chose ${input}. You still need ${differenceToWin} games to win.`;
    return myOutputValue;
  } else if (comChosenValue != inputValue) {
    differenceToWin = 2 - gamesWon;
    console.log(`output comChosenValue: ${comChosenValue}`);
    myOutputValue = `You have made the wrong guess. you guessed ${input} and computer chose ${input}. You still need ${differenceToWin} games to win.`;
    return myOutputValue;
  }

  return myOutputValue;
};

//--------------------------------------------------------------------------

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var comChosenValue = rollZeroToTwo();
  console.log(`output computer choice is ${comChosenValue}.`);
  var comChoice = outputArray[comChosenValue];
  console.log(`output computer choice is ${comChoice}.`);
  var myOutputValue;
  var inputValue = 0;
  gamesPlayed++;
  console.log(`games played: ${gamesPlayed}`);

  // Assign a value to each input and User can only input scissor, paper and stone
  if (input == "banana") {
    inputValue = 0;
  } else if (input == "chisel") {
    inputValue = 1;
  } else if (input == "faucet") {
    inputValue = 2;
  } else {
    myOutputValue =
      "You entered an invalid input. Enter only 'banana', 'chisel' or 'faucet'.";
    return myOutputValue;
  }

  if (comChosenValue == inputValue) {
    gamesWon++;
    if (gamesWon == 2) {
      myOutputValue = `You have won the game. you guessed ${input} and computer chose ${comChoice}. You can play the game again.`;
      gamesWon = 0;
      return myOutputValue;
    }

    console.log(`output comChosenValue:,${comChosenValue}`);
    differenceToWin = 2 - gamesWon;
    myOutputValue = `You have made the correct guess. you guessed ${input} and computer chose ${comChoice}. You still need ${differenceToWin} games to win.`;
    return myOutputValue;
  } else if (comChosenValue != inputValue) {
    gamesWon = 0;
    differenceToWin = 2 - gamesWon;
    console.log(`output comChosenValue: ${comChosenValue}`);
    myOutputValue = `You have made the wrong guess. you guessed ${input} and computer chose ${comChoice}. You still need ${differenceToWin} games to win.`;
    return myOutputValue;
  }
};

//--------------------------------------------------------------------------

var secretWordXRowMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var comChosenValue = rollZeroToTwo();
  var roundsToWin = rollTwoToFour();
  console.log(`Rounds to Win: ${roundsToWin}.`);
  console.log(`output computer choice is ${comChosenValue}.`);
  var comChoice = outputArray[comChosenValue];
  console.log(`output computer choice is ${comChoice}.`);
  var myOutputValue;
  var inputValue = 0;
  gamesPlayed++;
  console.log(`games played: ${gamesPlayed}`);

  // Assign a value to each input and User can only input scissor, paper and stone
  if (input == "banana") {
    inputValue = 0;
  } else if (input == "chisel") {
    inputValue = 1;
  } else if (input == "faucet") {
    inputValue = 2;
  } else {
    myOutputValue =
      "You entered an invalid input. Enter only 'banana', 'chisel' or 'faucet'.";
    return myOutputValue;
  }

  if (comChosenValue == inputValue) {
    gamesWon++;
    if (gamesWon == roundsToWin) {
      myOutputValue = `You have won the game. You guessed ${input} and computer chose ${comChoice}.<br>You can play the game again.`;
      gamesWon = 0;
      return myOutputValue;
    }

    console.log(`output comChosenValue:,${comChosenValue}`);
    differenceToWin = roundsToWin - gamesWon;
    myOutputValue = `You have made the correct guess. you guessed ${input} and computer chose ${comChoice}. You still need ${differenceToWin} games to win.`;
    return myOutputValue;
  } else if (comChosenValue != inputValue) {
    differenceToWin = roundsToWin - gamesWon;
    console.log(`output comChosenValue: ${comChosenValue}`);
    myOutputValue = `You have made the wrong guess. you guessed ${input} and computer chose ${comChoice}. You still need ${differenceToWin} games to win.`;
    return myOutputValue;
  }

  return myOutputValue;
};

//--------------------------------------------------------------------------

var diceWithinMain = function (input) {
  var diceRoll = rollDice();
  var withinNumber = rollOneToThree();
  var myOutputValue = `Nice Try~~ <br>Your guess is ${input}, while dice number is ${diceRoll}. <br> The within number is ${withinNumber}. You can try again. `;
  var differenceInValue = Math.abs(input - diceRoll);

  if (differenceInValue <= withinNumber) {
    myOutputValue = `Congrats, You Won~~ <br>Your guess is ${input}, while dice number is ${diceRoll}. <br> The within number is ${withinNumber}. `;
  }
  return myOutputValue;
};

//--------------------------------------------------------------------------

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var diceRoll1 = rollDice();
  var diceRoll2 = rollDice();
  var withinNumber = rollOneToThree();
  var myOutputValue = `Nice Try~~ <br>Your guess is ${input}, while dice 1 number is ${diceRoll1} and dice 2 number is ${diceRoll2}. <br> The within number is ${withinNumber}. You can try again. `;
  var differenceInValue1 = Math.abs(input - diceRoll1);
  var differenceInValue2 = Math.abs(input - diceRoll2);

  if (
    differenceInValue1 <= withinNumber ||
    differenceInValue2 <= withinNumber
  ) {
    myOutputValue = `Congrats, You Won~~ <br>Your guess is ${input}, while dice number is ${diceRoll1} and dice 2 number is ${diceRoll2}. <br> The within number is ${withinNumber}. `;
  }
  return myOutputValue;
};

//---------------------------------------------------------------------------

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue;

  if (gameMode == `4d`) {
    var fourDNumber = rollFourDigits();
    if (fourDNumber == input) {
      myOutputValue = `Wow you are one lucky fellow. The 4D is ${fourDNumber}. Can go buy real 4D now.`;
      gameMode = `dice`;
    } else {
      myOutputValue = `Nice try, anyway there is only 0.01% chance of winning. 
      The 4D is ${fourDNumber}, while your guess is ${input}.
      Dont be sad. You can guess the dice roll again.`;
    }
    gameMode = `dice`;
    return myOutputValue;
  } else if (gameMode == `dice`) {
    var diceValue = rollDice();
    if (diceValue == input) {
      diceGamesWon++;
      myOutputValue = `Congrats, you have correctly guessed the first dice.<br> You guessed ${input} and computer rolled ${diceValue}.
      You need one more win to play 4D game!!`;
      if (diceGamesWon == 2) {
        myOutputValue = `You have correctly guessed the dice twice. <br> You guessed ${input} and computer chose ${diceValue}. 
        You can play 4D game now.`;
        diceGamesWon = 0;
        gameMode = `4d`;
      }
    } else {
      myOutputValue = `Nice try.You guessed ${input} and computer rolled ${diceValue}.<br> Try guessing the dice number again.`;
    }
    return myOutputValue;
  }
};

//-----------------------------------------------------------------------------

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var comChosenValue = rollZeroToTwo();
  //comChosenValue = 0;
  console.log(`output computer choice is ${comChosenValue}.`);
  var comChoice = outputArray[comChosenValue];
  console.log(`output computer choice is ${comChoice}.`);
  var myOutputValue;
  var inputValue = 0;
  previousGuessValue = comChosenValue;
  gamesPlayed++;
  console.log(`games played: ${gamesPlayed}`);

  // Assign a value to each input and User can only input scissor, paper and stone
  if (input == "banana") {
    inputValue = 0;
  } else if (input == "chisel") {
    inputValue = 1;
  } else if (input == "faucet") {
    inputValue = 2;
  } else {
    myOutputValue =
      "You entered an invalid input. Enter only 'banana', 'chisel' or 'faucet'.";
    return myOutputValue;
  }

  if (comChosenValue == inputValue) {
    gamesWon++;
    if (gamesWon == 2 && previousGuessValue !== inputValue) {
      myOutputValue = `You have won the game. you guessed ${input} and computer chose ${comChoice}. <br>You can play the game again.`;
      gamesWon = 0;
      return myOutputValue;
    } else if (gamesWon == 2 && previousGuessValue == inputValue) {
      myOutputValue = `You cannot choose the same input twice! You need to restart the game now!`;
      gamesWon = 0;
      return myOutputValue;
    }

    console.log(`output comChosenValue: ${comChosenValue}`);
    differenceToWin = 2 - gamesWon;
    myOutputValue = `You have made the correct guess. you guessed ${input} and computer chose ${comChoice}. You still need ${differenceToWin} games to win.`;
    return myOutputValue;
  } else if (comChosenValue != inputValue) {
    gamesWon = 0;
    differenceToWin = 2 - gamesWon;
    console.log(`output comChosenValue: ${comChosenValue}`);
    myOutputValue = `You have made the wrong guess. you guessed ${input} and computer chose ${comChoice}. You still need "${differenceToWin} games to win.`;
    return myOutputValue;
  }

  return myOutputValue;
};
