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

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var dice1 = rollDice();
  var dice2 = rollDice();
  var checkDice1 = input == dice1;
  var checkDice2 = input == dice2;
  var myOutputValue;
  if (checkDice1 || checkDice1 || dice1 + dice2 == 11) {
    return (myOutputValue =
      "You Win.The dice rolls are" + dice1 + " and " + dice2 + ".");
  }
  return (myOutputValue =
    "You Lose. The dice rolls are" + dice1 + " and " + dice2 + ".");
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  if (input == "chicken rice" || input == "nasi lemak") {
    var myOutputValue = "rice";
    return myOutputValue;
  } else if (input == "hokkien mee" || input == "laksa") {
    var myOutputValue = "noodle";
    return myOutputValue;
  } else {
    var myOutputValue = "others";
    return myOutputValue;
  }
};

var generateNumber = function (rigged = false) {
  if (rigged) {
    return 6;
  } else {
    var randomDecimal = Math.random() * 9;
    var randomNumber = Math.floor(randomDecimal) + 1;

    return randomNumber;
  }
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var randomNumberOne = generateNumber();
  var randomNumberTwo = generateNumber();
  var randomNumberThree = generateNumber();
  var randomNumberFour = generateNumber();

  if (
    input == randomNumberOne ||
    input == randomNumberTwo ||
    input == randomNumberThree ||
    input == randomNumberFour
  ) {
    var myOutputValue = "You won! Huat arh!";
    return myOutputValue;
  } else {
    var myOutputValue = "Close but no cigar.Stop wasting money";
    return myOutputValue;
  }
};

var foodList = [
  "chicken rice",
  "roti prata",
  "nasi lemak",
  "hokkien mee",
  "bak kut teh",
  "laksa"
];

// Determine uncle's choice at random
var uncleChoice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  console.log(randomInteger);
  var foodChoice = foodList[randomInteger];
  console.log(foodChoice);
  return foodChoice;
};

// Check if input matches uncle's choice
var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue;
  var foodChoice = uncleChoice();

  if (input == foodChoice) {
    return (myOutputValue = "Congrats you received " + input + " for free!");
  } else {
    return (myOutputValue = "Try again next time.");
  }
};

var rollFourD = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 9999;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var fourDigits = randomInteger;
  return fourDigits;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue;
  var fourDigit = rollFourD();
  var differenceLesshan1000 = Math.abs(input - fourDigit) <= 1000;
  if (differenceLesshan1000) {
    return (myOutputValue =
      "The 4 Digits is " + fourDigit + ". Congrats, you won.");
  }
  return (myOutputValue = "Nope you lost.The 4 Digits is " + fourDigit);
};

// Determine 2 of uncles' choices at random
var rollOneToFour = function () {
  var randomDecimal = Math.random() * 4;
  var randomInteger = Math.floor(randomDecimal);
  console.log("Uncle choice number: " + randomInteger);
  return randomInteger;
};

// Determine if there is sambal or not
var rollZeroToOne = function () {
  var randomDecimal = Math.random() * 2;
  var randomSambal = Math.floor(randomDecimal);
  console.log("Sambal or not: " + randomSambal);
  return randomSambal;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue;

  //Creating an array for Rice and Noodle
  var foodListRice = [
    "chicken rice",
    "nasi lemak",
    "bak kut teh",
    "roti prata"
  ];
  var foodListNoodle = ["hokkien mee", "laksa", "beef hor fun", "roti prata"];

  //Creating two random numbers to select from the arrays
  var randomIntegerOne = rollOneToFour();
  var randomIntegerTwo = rollOneToFour();

  //Declaring two variables for the Rice or Noodle Selection
  var foodChoiceOne;
  var foodChoiceTwo;

  //Declare one variable for sambal
  var sambalSelection = rollZeroToOne();

  //user input rice
  if (input == "rice") {
    foodChoiceOne = foodListRice[randomIntegerOne];
    foodChoiceTwo = foodListRice[randomIntegerTwo];
    console.log(foodChoiceOne + ` and ` + foodChoiceTwo);
    // compare rice food selection are eligible for sambal
    var compare =
      (foodChoiceOne || foodChoiceTwo) == ("chicken rice" || "nasi lemak");

    //check food are eligible for sambal and sambalSelection is true
    if (compare == 1 && sambalSelection == 1) {
      return (myOutputValue =
        "Uncle have selected " +
        foodChoiceOne +
        " and " +
        foodChoiceTwo +
        ". <br> You have sambal as well.");
    }
    return (myOutputValue =
      "Uncle have selected " + foodChoiceOne + " and " + foodChoiceTwo + ".");
  }

  //user input noodle
  if (input == "noodle") {
    foodChoiceOne = foodListNoodle[randomIntegerOne];
    foodChoiceTwo = foodListNoodle[randomIntegerTwo];
    console.log(foodChoiceOne + ` and ` + foodChoiceTwo);
    // compare noodle food selection are eligible for sambal
    var compare =
      (foodChoiceOne || foodChoiceTwo) ==
      ("hokkien mee" || "laksa" || "beef hor fun");
    //check food are eligible for sambal and sambalSelection is true
    if (compare == 1 && sambalSelection == 1) {
      return (myOutputValue =
        "Uncle have selected " +
        foodChoiceOne +
        " and " +
        foodChoiceTwo +
        ". <br> You have sambal as well.");
    }

    return (myOutputValue =
      "Uncle have selected " + foodChoiceOne + " and " + foodChoiceTwo + ".");
  } else {
    //anything other than rice or noodle are rejected.
    return (myOutputValue = "You have entered wrongly.");
  }
};
