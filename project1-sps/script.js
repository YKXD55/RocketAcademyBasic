//assign win rate
var gamesPlayed = 0;
var gamesWon = 0;
var winRate = 0;

//Set game mode for the scissor, paper and stone game
var setGameMode = `Enter Username`;
var username;

//Randomise computer to choose between scissor, paper and stone

var rollOneToThree = function () {
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.floor(randomNumber);
  return randomInteger;
};

//create array for scissor, paper and stone
var arraySPS = [0, 1, 2];
var outputSPSArray = ["scissors ✂️", "paper 🗒", "stone 🗿"];

var main = function (input) {
  var myOutputValue;

  if (setGameMode == `Enter Username`) {
    username = input;
    setGameMode = `SPSMode`;
    return (myOutputValue = `Hello ${input}, shall we begin our game of scissors ✂️, paper 🗒 or stone 🗿?`);
  }

  if (setGameMode == `SPSMode`) {
    var comSPSValue = rollOneToThree();
    var comChoice = outputSPSArray[comSPSValue];
    console.log(`output computer choice is ${comChoice}`);
    var inputValue = 0;

    // Assign a value to each input and User can only input scissor, paper and stone
    if (input == "scissor") {
      inputValue = 0;
    } else if (input == "paper") {
      inputValue = 1;
    } else if (input == "stone") {
      inputValue = 2;
    } else if (input == `reverse`) {
      setGameMode = `reverse SPS Mode`;
      myOutputValue = `${username}, you entered an invalid input. Enter only 'scissor', 'paper' or 'stone'.🙂 🙃`;
      console.log(`you are entering reverse SPS mode`);
      return myOutputValue;
    } else {
      myOutputValue = `${username}, you entered an invalid input. Enter only 'scissor', 'paper' or 'stone'.`;
      return myOutputValue;
    }

    var differenceInValue = inputValue - comSPSValue;

    // scissor = 0 , paper = 1, stone = 2
    // you choose scissor, com choose paper
    //inputValue = 0 , comValue = 1, differenceInValue = -1 (then you win)
    // you choose stone, com choose scissor
    //inputValue = 2 , comValue = 0, differenceInValue = 2 (then you win)

    if (inputValue == comSPSValue) {
      gamesPlayed++;
      winRate = Math.round((gamesWon / gamesPlayed) * 100);
      console.log(`win rate: ${winRate} <br> games played: ${gamesPlayed}`);
      myOutputValue = `The computer chose ${comChoice}. And you chose ${input}.<br>    
    You Draw! Nice Try.<br>
    ${username}, your current win rate is ${winRate}%.<br> 
    Now you can type "scissors" "paper" or "stone" to play another round!`;
      return myOutputValue;
    } else if (differenceInValue == -1 || differenceInValue == 2) {
      gamesPlayed++;
      gamesWon++;
      winRate = Math.round((gamesWon / gamesPlayed) * 100);
      console.log(`win rate: ${winRate} <br> games played: ${gamesPlayed}`);
      myOutputValue = `The computer chose ${comChoice}. And you chose ${input}.<br>
    You Won!!<br>
    ${username}, your current win rate is ${winRate}%.<br>
    Now you can type "scissors" "paper" or "stone" to play another round!`;
      return myOutputValue;
    } else if (differenceInValue == 1 || differenceInValue == -2) {
      gamesPlayed++;
      winRate = Math.round((gamesWon / gamesPlayed) * 100);
      console.log(`win rate: ${winRate} <br> games played: ${gamesPlayed}`);
      myOutputValue = `The computer chose ${comChoice}. And you chose ${input}.<br>
    You Lost! Try again.<br>
    ${username}, your current win rate is ${winRate}%.<br>
    Now you can type "scissors" "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
  }
  if (setGameMode == `reverse SPS Mode`) {
    console.log(`you are in reverse SPS mode`);
    var comSPSValue = rollOneToThree();
    var comChoice = outputSPSArray[comSPSValue];
    console.log(`output computer choice is ${comChoice}`);

    var inputValue = 0;

    // Assign a value to each input and User can only input scissor, paper and stone
    if (input == "scissor") {
      inputValue = 0;
    } else if (input == "paper") {
      inputValue = 1;
    } else if (input == "stone") {
      inputValue = 2;
    } else if (input == `normal`) {
      myOutputValue = `${username}, you entered an invalid input. Enter only 'scissor', 'paper' or 'stone'.🙂 🙃`;
      return myOutputValue;
    } else {
      myOutputValue = `${username}, you entered an invalid input. Enter only 'scissor', 'paper' or 'stone'.`;
      return myOutputValue;
    }
    var differenceInValue = inputValue - comSPSValue;

    if (inputValue == comSPSValue) {
      gamesPlayed++;
      winRate = Math.round((gamesWon / gamesPlayed) * 100);
      console.log(`win rate: ${winRate} <br> games played: ${gamesPlayed}`);
      myOutputValue = `The computer chose ${comChoice}. And you chose ${input}.<br>    
    You Draw! Nice Try.<br>
    ${username}, your current win rate is ${winRate}%.<br> 
    Now you can type "scissors" "paper" or "stone" to play another round!`;
      return myOutputValue;
    } else if (differenceInValue == 1 || differenceInValue == -2) {
      gamesPlayed++;
      gamesWon++;
      winRate = Math.round((gamesWon / gamesPlayed) * 100);
      console.log(`win rate: ${winRate} <br> games played: ${gamesPlayed}`);
      myOutputValue = `The computer chose ${comChoice}. And you chose ${input}.<br>
    You Won!!<br>
    ${username}, your current win rate is ${winRate}%.<br>
    Now you can type "scissors" "paper" or "stone" to play another round!`;
      return myOutputValue;
    } else if (differenceInValue == -1 || differenceInValue == 2) {
      gamesPlayed++;
      winRate = Math.round((gamesWon / gamesPlayed) * 100);
      console.log(`win rate: ${winRate} <br> games played: ${gamesPlayed}`);
      myOutputValue = `The computer chose ${comChoice}. And you chose ${input}.<br>
    You Lost! Try again.<br>
    ${username}, your current win rate is ${winRate}%.<br>
    Now you can type "scissors" "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
  }
};
