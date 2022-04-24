//assign win rate
var gamesPlayed = 0;
var gamesWon = 0;
var winRate = 0;

//Set game mode for the Dice Roll Game
var setGameMode = `Enter Username`;
var username;
var numOfRolls;

//Set array to be used for 2 player dice roll game mode
var setTwoPlayerGameMode = `Enter Player 1 Username`;
var userPlayerArray = [];
var usernameArray = [];
var gamesWonArray = [];
var winRateArray = [];

//Set array to be used for 2 player dice roll game mode
var setMultiPlayerGameMode = `Enter Number of Players`;
var multiUserPlayerArray = [``];
var multiUsernameArray = [``];
var multiGamesWonArray = [``];
var multiWinRateArray = [``];
var multiNumOfRolls = 0;
var numOfUsers = 0;
var numOfUsersCounter = 0;
var multiGamesPlayedArray = [``];

//Randomise computer to choose between a dice output of 1 to 6

var rollOneToSix = function () {
  var randomNumber = Math.random() * 6;
  var randomInteger = Math.ceil(randomNumber);
  return randomInteger;
};

//Randomise computer to choose between a dice output of 1 to 6
var guessDiceNumber = function (input) {
  var userGuessValue = input;
  var diceOutcome = 0;
  for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= numOfRolls; j++) {
      diceOutcome = rollOneToSix();
      if (diceOutcome == userGuessValue) {
        gamesWon++;
      }
    }
    console.log(`Games won : ${gamesWon}`);
    return gamesWon;
  }
};

var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var myOutputValue = "";

  for (var i = 0; i < input; i++) {
    myOutputValue = myOutputValue + "🚀";
  }
  return myOutputValue;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = ``;
  var outerCounter = 0;

  while (outerCounter < input) {
    var innerCounter = 0;

    while (innerCounter < input) {
      myOutputValue = myOutputValue + `🚀`;
      innerCounter += 1;
    }
    myOutputValue = myOutputValue + `<br>`;
    outerCounter += 1;
  }
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var myOutputValue = ``;
  for (var i = 0; i < input; i++) {
    for (var j = 0; j <= i; j++) {
      myOutputValue = myOutputValue + "🚀";
    }
    myOutputValue = myOutputValue + `<br>`;
  }
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = ``;
  for (var i = 0; i <= input; i++) {
    for (var j = 0; j <= input; j++) {
      if (i == 0) {
        myOutputValue = myOutputValue + "🚀";
      } else if (i == input) {
        myOutputValue = myOutputValue + "🚀";
      } else if (j == 0) {
        myOutputValue = myOutputValue + "🚀";
      } else if (j == input) {
        myOutputValue = myOutputValue + "🚀";
      } else {
        myOutputValue = myOutputValue + "📝";
      }
    }
    myOutputValue = myOutputValue + `<br>`;
  }
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = ``;
  var oddNumberCheck = input % 2;
  var medianNum = 0;
  medianNum = Math.ceil(input / 2);
  console.log(input);
  console.log(`input`);
  console.log(medianNum);
  if (oddNumberCheck == 1) {
    for (var i = 1; i <= input; i++) {
      for (var j = 1; j <= input; j++) {
        if (i == 1) {
          myOutputValue = myOutputValue + "🚀";
        } else if (i == input) {
          myOutputValue = myOutputValue + "🚀";
        } else if (j == 1) {
          myOutputValue = myOutputValue + "🚀";
        } else if (j == input) {
          myOutputValue = myOutputValue + "🚀";
        } else if (i == medianNum && j == medianNum) {
          myOutputValue = myOutputValue + `😊`;
        } else {
          myOutputValue = myOutputValue + `📝`;
        }
      }
      myOutputValue = myOutputValue + `<br>`;
    }
  } else {
    myOutputValue = `Error, enter an odd number.`;
  }
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = ``;
  if (setGameMode == `Enter Username`) {
    username = input;
    setGameMode = `Enter Number of Dices`;
    return (myOutputValue = `Hello ${username}, enter the number of dices you wished to roll.`);
  }

  if (setGameMode == `Enter Number of Dices`) {
    numOfRolls = input;
    setGameMode = `Guess the Dices`;
    return (myOutputValue = `Hello ${username}, guess the dice number.`);
  }
  if (setGameMode == `Guess the Dices`) {
    var userGuessValue = input;
    var diceOutcome = rollOneToSix();
    console.log(`Dice rolled is ${diceOutcome}`);
    for (var i = 1; i <= numOfRolls; i++) {
      if (diceOutcome == userGuessValue) {
        gamesPlayed++;
        gamesWon++;
        winRate = Math.round((gamesWon / gamesPlayed) * 100);
        myOutputValue = `Hello ${username}, you have won. <br> You guessed ${input} and dice rolled ${diceOutcome}. <br> Your win rate is ${winRate}%.`;
        return myOutputValue;
      } else {
        gamesPlayed++;
        winRate = Math.round((gamesWon / gamesPlayed) * 100);
        myOutputValue = `Hello ${username}, you have lost. <br> You guessed ${input} and dice rolled ${diceOutcome}. <br> Your win rate is ${winRate}%.`;
      }
    }
    return myOutputValue;
  }
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = ``;
  if (setGameMode == `Enter Username`) {
    username = input;
    setGameMode = `Enter Number of Dices`;
    return (myOutputValue = `Hello ${username}, enter the number of dices you wished to roll.`);
  }
  if (setGameMode == `Enter Number of Dices`) {
    numOfRolls = input;
    setGameMode = `Guess the Dices`;
    return (myOutputValue = `Hello ${username}, guess the dice number.`);
  }
  if (setGameMode == `Guess the Dices`) {
    var userGuessValue = input;
    var diceOutcome = 0;
    for (var i = 1; i <= 4; i++) {
      gamesPlayed++;
      for (var j = 1; j <= numOfRolls; j++) {
        diceOutcome = rollOneToSix();
        if (diceOutcome == userGuessValue) {
          gamesWon++;
        }
      }
      console.log(`Games played : ${gamesPlayed}`);
      console.log(`Games won : ${gamesWon}`);
    }
    winRate = Math.round((gamesWon / gamesPlayed) * 100);
    if (winRate >= 50) {
      myOutputValue = `Hello ${username}, you have won. <br> You guessed ${input} and dice rolled ${diceOutcome}. <br> Your win rate is ${winRate}%.`;
    } else {
      myOutputValue = `Hello ${username}, you have lost. <br> You guessed ${input} and dice rolled ${diceOutcome}. <br> Your win rate is ${winRate}%.`;
    }
    return myOutputValue;
  }
};

// Working on this, to review this
var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = ``;
  if (setTwoPlayerGameMode == `Enter Player 1 Username`) {
    usernameArray[0] = input;
    setTwoPlayerGameMode = `Player 1 Enter Number of Dices`;
    return (myOutputValue = `Hello ${usernameArray[0]}, enter the number of dices you wished to roll.`);
  }
  if (setTwoPlayerGameMode == `Player 1 Enter Number of Dices`) {
    numOfRolls = input;
    setTwoPlayerGameMode = `Player 1 Guess the Dices`;
    return (myOutputValue = `Hello ${usernameArray[0]}, guess the dice number.`);
  }
  if (setTwoPlayerGameMode == `Player 1 Guess the Dices`) {
    gamesWonArray[0] = guessDiceNumber();
    gamesPlayed += 4;
    console.log(`Games played : ${gamesPlayed}`);
    console.log(`Games won : ${gamesWonArray[0]}`);
    winRateArray[0] = Math.round((gamesWonArray[0] / gamesPlayed) * 100);
    setTwoPlayerGameMode = `Enter Player 2 Username`;
    return (myOutputValue = `Hello ${usernameArray[0]}. <br> You guessed ${input} and you won ${gamesWonArray[0]} games. <br> Your win rate is ${winRate}%.`);
  }
};

//not working beyond second player
var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = ``;

  if (setMultiPlayerGameMode == `Enter Number of Players`) {
    numOfUsers = input;
    setMultiPlayerGameMode = `Enter Players Username`;
    return (myOutputValue = `Hello, there will be ${numOfUsers} players that will play the game. <br> Player 1 you may enter the your username.`);
  }
  if (
    setMultiPlayerGameMode == `Enter Players Username` &&
    numOfUsers == numOfUsersCounter + 1
  ) {
    multiUsernameArray[numOfUsersCounter] = input;
    setMultiPlayerGameMode = `Players Guess the Dices`;
    numOfUsersCounter = 0;
    return (myOutputValue = `Hello ${
      multiUsernameArray[numOfUsers - 1]
    }, all playeres have entered their names. ${
      multiUsernameArray[0]
    }, you will enter the number of dices everyone will roll.`);
  } else if (setMultiPlayerGameMode == `Enter Players Username`) {
    multiUsernameArray[numOfUsersCounter] = input;
    numOfUsersCounter++;
    var difference = numOfUsers - numOfUsersCounter;
    return (myOutputValue = `Hello ${
      multiUsernameArray[numOfUsersCounter - 1]
    }, now Player ${numOfUsersCounter} will enter his/her name. There are ${difference} player(s) left to input his/her name.`);
  }
  if (setMultiPlayerGameMode == `Players Enter Number of Dices`) {
    multiNumOfRolls = input;
    setMultiPlayerGameMode = `Players Guess the Dices`;
    return (myOutputValue = `Hello ${multiUsernameArray[numOfUsersCounter]}, guess the dice number.`);
  }
  if (
    setMultiPlayerGameMode == `Players Guess the Dices` &&
    numOfUsers == numOfUsersCounter
  ) {
    var diceOutcome = 0;
    multiGamesPlayedArray[numOfUsersCounter] += 4;
    for (var i = 1; i <= 4; i++) {
      diceOutcome = rollOneToSix();
      if (diceOutcome == input) {
        multiGamesWonArray[numOfUsersCounter] += 1;
      }
    }
    console.log(`Games played : ${multiGamesPlayedArray[numOfUsersCounter]}`);
    console.log(`Games won : ${multiGamesWonArray[numOfUsersCounter]}`);
    multiWinRateArray[numOfUsersCounter] = Math.round(
      (multiGamesWonArray[numOfUsersCounter] /
        multiGamesPlayedArray[numOfUsersCounter]) *
        100
    );
    numOfUsersCounter = 0;
    return (myOutputValue = `Hello ${multiUsernameArray[numOfUsers]}. <br> You guessed ${input} and you won ${multiGamesWonArray[numOfUsers]} games. <br> Your win rate is ${multiWinRateArray[numOfUsers]}%. Everyone has finished the game`);
  } else if (setMultiPlayerGameMode == `Players Guess the Dices`) {
    var diceOutcome = 0;
    var localPosition = numOfUsersCounter;
    multiGamesPlayedArray[localPosition] += 4;
    for (var k = 1; k <= 4; k++) {
      diceOutcome = rollOneToSix();
      console.log(diceOutcome);
      if (diceOutcome == input) {
        multiGamesWonArray[localPosition] += 1;
      }
    }
    console.log(`User Counter : ${numOfUsersCounter}`);
    console.log(`local position : ${localPosition}`);
    console.log(`Games played : ${multiGamesPlayedArray[localPosition]}`);
    console.log(`Games won : ${multiGamesWonArray[localPosition]}`);
    multiWinRateArray[localPosition] = Math.round(
      (multiGamesWonArray[localPosition] /
        multiGamesPlayedArray[localPosition]) *
        100
    );
    numOfUsersCounter++;
    console.log(`User Counter : ${numOfUsersCounter}`);
    return (myOutputValue = `Hello ${multiUsernameArray[localPosition]}. <br> You guessed ${input} and you won ${multiGamesWonArray[localPosition]} games. <br> Your win rate is ${multiWinRateArray[localPosition]}%.`);
  }
};
