//Set Game Mode
var winCondition = `Normal Mode`;
var setGameMode = `Player 1 Turn`;

//Declare 4 global variable for Player 1 and 2 dices
var playerDice = [0, 0];
var playerResult = ``,
  playerOneResult = ``,
  playerTwoResult = ``;
var gamesPlayed = 0;
var gamesWonArray = [0, 0];

//Function to automate dice roll
var rollOneToSix = function () {
  var randomNumber = Math.random() * 6;
  var randomInteger = Math.ceil(randomNumber);
  return randomInteger;
};

//function is called to assign 2 dice rolls for either Player 1 or 2 and ouput instruction for them to choose dice order
var rollDicesforPlayers = function (input) {
  playerDice[0] = rollOneToSix();
  playerDice[1] = rollOneToSix();
  console.log(` Dice 1: ${playerDice[0]} <br> Dice 2: ${playerDice[1]}`);
  var myOutputValue = `, <br> You rolled ${playerDice[0]} for Dice 1 and ${playerDice[1]} for Dice 2. <br>
  Choose the order of the dice.`;
  return myOutputValue;
};

//function is called to assign either Player 1 or 2 dice order
var playerDiceChoice = function (input) {
  var myOutputValue = `, you have entered an invalid input. Only Enter "1" or "2".`;

  if (input == 1) {
    playerResult = `${playerDice[0]}${playerDice[1]}`;
    myOutputValue = `, you chose Dice ${input} first.<br/>
    Your number is ${playerResult}.`;
  } else if (input == 2) {
    playerResult = `${playerDice[1]}${playerDice[0]}`;
    myOutputValue = `, you chose Dice ${input} first.<br/>
    Your number is ${playerResult}.`;
  }
  console.log(`${playerResult}`);
  console.log(`${myOutputValue}`);
  return myOutputValue;
};

//function to compare the results of both Players
var comparingResult = function (input) {
  var myOutputValue;
  var difference = playerOneResult - playerTwoResult;
  gamesPlayed++;
  console.log(`difference in score ${difference}`);

  if (playerOneResult == playerTwoResult) {
    myOutputValue = `It's a tie!!<br/>
    Player 1 number is ${playerOneResult}.<br/>
    Player 2 number is ${playerTwoResult}.<br/>
    You can continue to play the game again. It is now Player 1's turn.`;
  } else if (winCondition == `Lowest Combi Wins`) {
    // To set reverse win condition for lowest dice combination will win
    if (playerOneResult > playerTwoResult) {
      gamesWonArray[1] += 1;
      console.log(`Games won: ${gamesWonArray}`);
      myOutputValue = `Player 2 won with the lowest roll.<br/>
      Player 1 number is ${playerOneResult}.<br/>
      Player 2 number is ${playerTwoResult}.<br/>
      You can continue to play the game again. It is now Player 1's turn.`;
    } else if (playerOneResult < playerTwoResult) {
      gamesWonArray[0] += 1;
      console.log(`Games won: ${gamesWonArray}`);
      myOutputValue = `Player 1 won!!<br/>
      Player 1 number is ${playerOneResult}.<br/>
      Player 2 number is ${playerTwoResult}.<br/>
      You can continue to play the game again. It is now Player 1's turn.`;
    }
  } else if (winCondition == `Normal Mode`) {
    if (playerOneResult < playerTwoResult) {
      gamesWonArray[1] += 1;
      console.log(`Games won: ${gamesWonArray}`);
      myOutputValue = `Player 2 won!!<br/>
    Player 1 number is ${playerOneResult}.<br/>
    Player 2 number is ${playerTwoResult}.<br/>
    You can continue to play the game again. It is now Player 1's turn.`;
    } else if (playerOneResult > playerTwoResult) {
      gamesWonArray[0] += 1;
      console.log(`Games won: ${gamesWonArray}`);
      myOutputValue = `Player 1 won!!<br/>
    Player 1 number is ${playerOneResult}.<br/>
    Player 2 number is ${playerTwoResult}.<br/>
    You can continue to play the game again. It is now Player 1's turn.`;
    }
  }
  console.log(`${myOutputValue}`);
  return myOutputValue;
};

var main = function (input) {
  var myOutputValue = `Welcome, <br> You rolled ${playerDice[0]} for Dice 1 and ${playerDice[1]} for Dice 2. <br>
  Choose the order of the dice.`;

  // if user input `change mode`, the program will change mode to lowest dice combination will win
  if (input == `change mode`) {
    winCondition = `Lowest Combi Wins`;
    return (myOutputValue = `Now the lowest combination of dices will win!.`);
  }

  // Game mode is per normal game
  if (setGameMode == `Player 1 Turn`) {
    myOutputValue = `Welcome Player 1` + rollDicesforPlayers();
    setGameMode = `Player 1 Dice Choice`;
  } else if (setGameMode == `Player 1 Dice Choice`) {
    if (input == 1 || input == 2) {
      myOutputValue =
        `Welcome Player 1` +
        playerDiceChoice(input) +
        `<br/>
    Now it's Player 2 Turn.`;
      playerOneResult = playerResult;
      console.log(playerOneResult);
      setGameMode = `Player 2 Turn`;
    } else {
      return (myOutputValue = `Player 1, you have entered an invalid input. Only Enter "1" or "2". <br> Player 1, you rolled ${playerDice[0]} for Dice 1 and ${playerDice[1]} for Dice 2. <br>
        Choose the order of the dice.`);
    }
  } else if (setGameMode == `Player 2 Turn`) {
    myOutputValue = `Welcome Player 2` + rollDicesforPlayers();
    setGameMode = `Player 2 Dice Choice`;
  } else if (setGameMode == `Player 2 Dice Choice`) {
    if (input == 1 || input == 2) {
      myOutputValue =
        `Welcome Player 2` +
        playerDiceChoice(input) +
        `<br> Now it's time to compare result.`;
      playerTwoResult = playerResult;
      console.log(playerOneResult);
      setGameMode = `Compare Result`;
    } else {
      return (myOutputValue = `Player 2, you have entered an invalid input. Only Enter "1" or "2". <br><br> Player 2, you rolled ${playerDice[0]} for Dice 1 and ${playerDice[1]} for Dice 2. <br>
        Choose the order of the dice.`);
    }
  } else if (setGameMode == `Compare Result`) {
    myOutputValue = comparingResult();
    setGameMode = `Player 1 Turn`;
  }

  // To output their win stats
  if (gamesWonArray[0] == gamesWonArray[1]) {
    myOutputValue =
      myOutputValue +
      `<br><br> Games played: ${gamesPlayed} <br> Player 1 and 2 games won: ${gamesWonArray[0]}`;
  } else if (gamesWonArray[0] < gamesWonArray[1]) {
    myOutputValue =
      myOutputValue +
      `<br><br> Games played: ${gamesPlayed} <br> Player 2 is in the lead, won: ${gamesWonArray[1]} games. <br> Player 1 won: ${gamesWonArray[0]} games.`;
  } else {
    myOutputValue =
      myOutputValue +
      `<br><br> Games played: ${gamesPlayed} <br> Player 1 is in the lead,  won: ${gamesWonArray[0]} games. <br> Player 2 won: ${gamesWonArray[1]} games.`;
  }
  return myOutputValue;
};
