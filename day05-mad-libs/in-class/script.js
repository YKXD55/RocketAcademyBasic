//Create global array to store adjective, adverb, exclamation, noun
var randomAdjectiveArray = [
  `decisive`,
  `perfect`,
  `naughty`,
  `ugly`,
  `amusing`,
  `charming`
];
var randomAdverbArray = [`excitedly`, `furiously`, `confusingly`];
var randomExclamationArray = [`Wow`, `Nooo`, `Damn`];
var randomNounArray = [`Payaya`, `Cancer`, `Doge`];
var setMultipleGameMode = `input Exclamation Mode`;

var inputArray = [];

//Create game mode for "input" and "normal" mode
var setGameMode = `input mode`;

var getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
  //store adj
  var randomIndex = getRandomIndex(randomAdjectiveArray.length);
  var randomAdj = randomAdjectiveArray[randomIndex];
  if (input == "create") {
    var madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj} wife.`;
    return madLib;
  } else {
    randomAdjectiveArray.push(input);
    madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${input} wife.`;
    console.log(randomAdjectiveArray);
    return madLib;
  }
};

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
  //store adj
  var randomIndex = getRandomIndex(randomAdjectiveArray.length);
  var randomAdj = randomAdjectiveArray[randomIndex];

  if (input == `create`) {
    setGameMode = `create mode`;
    madLib = `You can now add in adjectives.`;
    return madLib;
  } else if (setGameMode == `create mode`) {
    var madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj} wife.`;
    return madLib;
  } else if (setGameMode == "input mode") {
    randomAdjectiveArray.push(input);
    madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${input} wife.`;
    console.log(randomAdjectiveArray);
    return madLib;
  }
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  var randomIndex = getRandomIndex(randomAdjectiveArray.length);
  var randomAdj = randomAdjectiveArray[randomIndex];
  inputArray = input.split(" ");
  console.log(inputArray);

  if (input == `create`) {
    setGameMode = `create mode`;
    madLib = `You can now add in adjectives.`;
    return madLib;
  } else if (setGameMode == `create mode`) {
    var madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj} wife.`;
    return madLib;
  } else if (setGameMode == "input mode") {
    //if (inputArray.length != 1) {
    for (var i = 0; i < inputArray.length; i++) {
      var newAdj = inputArray[i];
      randomAdjectiveArray.push(newAdj);
      madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${newAdj} wife.`;
      console.log(randomAdjectiveArray);
    }
    return madLib;
    // } else {
    //   randomAdjectiveArray.push(input);
    //   madLib = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${input} wife.`;
    //   console.log(randomAdjectiveArray);
    //   return madLib;
    // }
  }
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var randomIndexAdj = getRandomIndex(randomAdjectiveArray.length);
  var randomAdj = randomAdjectiveArray[randomIndexAdj];
  var randomIndexAdv = getRandomIndex(randomAdverbArray.length);
  var randomAdverb = randomAdverbArray[randomIndexAdv];
  var randomIndexExc = getRandomIndex(randomExclamationArray.length);
  var randomExclamation = randomExclamationArray[randomIndexExc];
  randomNounArray;
  var randomIndexNoun = getRandomIndex(randomNounArray.length);
  var randomNoun = randomNounArray[randomIndexNoun];
  var madLib = ``;
  inputArray = input.split(" ");
  console.log(inputArray);

  if (input == `create`) {
    setMultipleGameMode = `create mode`;
    madLib = `Click submit to automate the madLib.`;
    return madLib;
  }
  if (input == `input noun`) {
    setMultipleGameMode = `input noun Mode`;
    madLib = `You can input noun(s) into the sentence.`;
    return madLib;
  }
  if (input == `input adverb`) {
    setMultipleGameMode = `input adverb Mode`;
    madLib = `You can input adverb(s) into the sentence.`;
    return madLib;
  }
  if (input == `input adjective`) {
    setMultipleGameMode = `input adjective Mode`;
    madLib = `You can input adjective(s) into the sentence.`;
    return madLib;
  }

  if (setMultipleGameMode == `create mode`) {
    madLib = `${randomExclamation}! he said ${randomAdverb} as he jumped into his convertible ${randomNoun} and drove off with his ${randomAdj} wife.`;
    return madLib;
  } else if (setMultipleGameMode == `input Exclamation Mode`) {
    for (var i = 0; i < inputArray.length; i++) {
      var newExc = inputArray[i];
      randomExclamationArray.push(newExc);
      madLib = `${newExc}! he said ${randomAdverb} as he jumped into his convertible ${randomNoun} and drove off with his ${randomAdj} wife.`;
      console.log(randomExclamationArray);
    }
    return madLib;
  } else if (setMultipleGameMode == `input noun Mode`) {
    for (var i = 0; i < inputArray.length; i++) {
      var newNoun = inputArray[i];
      randomExclamationArray.push(newNoun);
      madLib = `${randomExclamation}! he said ${randomAdverb} as he jumped into his convertible ${newNoun} and drove off with his ${randomAdj} wife.`;
      console.log(randomNounArray);
    }
    return madLib;
  } else if (setMultipleGameMode == `input adverb Mode`) {
    for (var i = 0; i < inputArray.length; i++) {
      var newAdv = inputArray[i];
      randomAdverbArray.push(newAdv);
      madLib = `${randomExclamation}! he said ${newAdv} as he jumped into his convertible ${randomNoun} and drove off with his ${randomAdj} wife.`;
      console.log(randomAdverbArray);
    }
    return madLib;
  } else if (setMultipleGameMode == `input adjective Mode`) {
    for (var i = 0; i < inputArray.length; i++) {
      var newAdj = inputArray[i];
      randomAdjectiveArray.push(newAdj);
      madLib = `${randomExclamation}! he said ${randomAdverb} as he jumped into his convertible ${randomNoun} and drove off with his ${newAdj} wife.`;
      console.log(randomAdjectiveArray);
    }
    return madLib;
  }
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
