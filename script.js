var setGameMode = `Deal Cards`;
var deckOfCards;
var shuffledDeck;
// variables set aside for player
var playerCards = [];
var playerCardValue = 0;
var playerLowestCardValue = 0;
var numOfCardsDrew = 0;
var playerAutoWin = 0;
// variables set aside for com
var comCards = [];
var comCardValue = 0;
var comLowestCardValue = 0;
var numOfCardsComDrew = 0;
var comAutoWin = 0;
// Default statement to build up for output
var outputStatement = ``;

// create a deck function
var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["hearts", "diamonds", "clubs", "spades"];
  var specialCard = `normal`;
  // Loop over the suits array
  for (var i = 0; i < suits.length; i += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[i];
    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;
      var cardValue = rankCounter;
      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = `ace`;
        cardValue = 1;
        specialCard = `aceCard`;
      } else if (cardName == 10) {
        specialCard = `faceCard`;
        cardValue = 10;
      } else if (cardName == 11) {
        cardName = `jack`;
        specialCard = `faceCard`;
        cardValue = 10;
      } else if (cardName == 12) {
        cardName = `queen`;
        specialCard = `faceCard`;
        cardValue = 10;
      } else if (cardName == 13) {
        cardName = `king`;
        specialCard = `faceCard`;
        cardValue = 10;
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
        special: specialCard,
        value: cardValue
      };
      specialCard = `normal`;

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }
  // Return the completed card deck
  return cardDeck;
};

// card shuffling function
// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

//Do until here
var issueCards = function () {
  var myOutputValue;
  var playerTempValue = 0;
  var comTempValue = 0;
  // To issue 2 cards to player and com, check cards value and analyse auto winning condition
  if (setGameMode == `Deal Cards`) {
    playerCards[0] = shuffledDeck.pop();
    //playerCards[0] = {
    //name: `ace`,
    //suit: `spades`,
    // rank: 1,
    //special: `aceCard`,
    // value: 1
    //};
    comCards[0] = shuffledDeck.pop();
    playerCards[1] = shuffledDeck.pop();
    comCards[1] = shuffledDeck.pop();
    playerCardValue = playerCards[0].value + playerCards[1].value;
    // To include ace can be either one or 11 for player
    for (var a = 0; a < numOfCardsDrew + 2; a++) {
      if (playerCards[a].special == `aceCard`) {
        //playerLowestCardValue is meant for situation where player draw 2 aces later on.
        playerLowestCardValue = playerCardValue;
        playerTempValue = playerCardValue - 1 + 11;
        if (playerTempValue < 22 && playerTempValue > playerCardValue) {
          playerCardValue = playerTempValue;
        }
      }
    }
    // To include ace can be either one or 11 for com
    comCardValue = comCards[0].value + comCards[1].value;
    comLowestCardValue = comCardValue;
    for (var b = 0; b < numOfCardsComDrew + 1; b++) {
      if (comCards[b].special == `aceCard`) {
        //comLowestCardValue is meant for situation where com draw 2 aces later on.
        comLowestCardValue = comCardValue;
        comTempValue = comCardValue - 1 + 11;
        if (comTempValue < 22) {
          comCardValue = comTempValue;
        }
      }
    }
    console.log(`player cards:`);
    console.log(playerCards);
    console.log(playerCardValue);

    //The cards are analysed for game winning conditions, e.g. Blackjack.
    if (
      (playerCards[0].special == `aceCard` &&
        playerCards[1].special == `faceCard`) ||
      (playerCards[1].special == `aceCard` &&
        playerCards[0].special == `faceCard`)
    ) {
      playerAutoWin++;
    }
    if (
      (comCards[0].special == `aceCard` && comCards[1].special == `faceCard`) ||
      (comCards[1].special == `aceCard` && comCards[0].special == `faceCard`)
    ) {
      comAutoWin++;
    }
  }
  if (setGameMode == `Player Draw Card`) {
    numOfCardsDrew++;
    playerCards[numOfCardsDrew + 1] = shuffledDeck.pop();
    playerCardValue += playerCards[numOfCardsDrew + 1].value;
    playerLowestCardValue += playerCards[numOfCardsDrew + 1].value;
    if (playerCards[numOfCardsDrew + 1].special == `aceCard`) {
      playerTempValue = playerCardValue - 1 + 11;
      if (playerTempValue < 22) {
        playerCardValue = playerTempValue;
      } else {
        // When drawing ace equals to 11 and led to eventual burst.
        playerCardValue = playerLowestCardValue;
      }
    }
    // When drawing ace equals to 11 and led to eventual burst.
    if (playerCardValue > 21) {
      if (
        playerCards[0].special == `aceCard` ||
        playerCards[1].special == `aceCard` ||
        playerCards[2].special == `aceCard`
      ) {
        playerCardValue = playerLowestCardValue;
      }
    }
    console.log(`player cards:`);
    console.log(playerCards);
  }
  if (setGameMode == `Player Decision`) {
    numOfCardsDrew++;
    playerCards[numOfCardsDrew + 1] = shuffledDeck.pop();
    playerCardValue += playerCards[numOfCardsDrew + 1].value;
    playerLowestCardValue += playerCards[numOfCardsDrew + 1].value;
    console.log(`playerLowestCardValue`);
    console.log(playerLowestCardValue);
    if (playerCards[numOfCardsDrew + 1].special == `aceCard`) {
      playerTempValue = playerCardValue - 1 + 11;
      if (playerTempValue < 22) {
        playerCardValue = playerTempValue;
      } else {
        // When drawing ace equals to 11 and led to eventual burst.
        playerCardValue = playerLowestCardValue;
      }
    }
    // When drawing ace equals to 11 and led to eventual burst.
    if (playerCardValue > 21) {
      if (
        playerCards[0].special == `aceCard` ||
        playerCards[1].special == `aceCard` ||
        playerCards[2].special == `aceCard` ||
        playerCards[3].special == `aceCard`
      ) {
        playerCardValue = playerLowestCardValue;
      }
    }
    console.log(`player cards:`);
    console.log(playerCards);
  }
  return myOutputValue;
};

var generateEmoji = function (input) {
  var currentCard = input;
  var myOutputValue = "";
  if (currentCard.suit == `hearts`) {
    return (myOutputValue = `❤`);
  }
  if (currentCard.suit == `diamonds`) {
    return (myOutputValue = `♦`);
  }
  if (currentCard.suit == `clubs`) {
    return (myOutputValue = `♣`);
  }
  if (currentCard.suit == `spades`) {
    return (myOutputValue = `♠`);
  }
};

//The computer decides to hit or stand automatically based on game rules.
var comDrawCards = function () {
  console.log(`com drawing cards`);
  console.log(comCards);
  console.log(comCardValue);
  var comTempValue = 0;
  while (comCardValue < 17) {
    comCards[numOfCardsComDrew + 2] = shuffledDeck.pop();
    comCardValue += comCards[numOfCardsComDrew + 2].value;
    numOfCardsComDrew++;
    // variable b is initialised to be 2, because the first 2 cards are already checked against for any "ace" and change the "ace" within comCardValue to 11 instead of 1.
    //Therefore only need to check from third card onwards
    for (var b = 2; b < numOfCardsComDrew + 2; b++) {
      if (comCards[b].special == `aceCard`) {
        comTempValue = comCardValue - 1 + 11;
        if (comTempValue < 22) {
          comCardValue = comTempValue;
        } else {
          // When drawing ace equals to 11 and led to eventual burst.
          comCardValue = comLowestCardValue;
        }
      }
    }
  }
  if (comCardValue > 21) {
    if (
      comCards[0].special == `aceCard` ||
      comCards[1].special == `aceCard` ||
      comCards[2].special == `aceCard`
    ) {
      comCardValue = comLowestCardValue;
    }
  }
  if (playerCardValue < 22 && comCardValue < playerCardValue) {
    comCards[numOfCardsComDrew + 2] = shuffledDeck.pop();
    comCardValue += comCards[numOfCardsComDrew + 2].value;
    numOfCardsComDrew++;
    if (comCards[numOfCardsDrew + 2].special == `aceCard`) {
      comTempValue = comCardValue - 1 + 11;
      if (comTempValue < 22 && comTempValue > playerCardValue) {
        comCardValue = comTempValue;
      }
    }
  }
  console.log(`com finished drawing cards`);
  console.log(comCards);
  console.log(comCardValue);
};

var main = function (input) {
  deckOfCards = makeDeck();
  var myOutputValue = ``;
  var defaultWinStatement = ``;
  var outputStatement = ``;
  // Have not code for emoji function add in
  var emojiCreator = ``;
  //Deck is shuffled. User clicks Submit to deal cards.
  if (setGameMode == `Deal Cards`) {
    shuffledDeck = shuffleCards(deckOfCards);
    issueCards();
    //The cards are displayed to the user.
    if (playerAutoWin == 1 && comAutoWin == 1) {
      defaultWinStatement = `What a coincidence, both of you drew Blackjack together. <br>
      You have drew ${playerCards[0].name} of ${playerCards[0].suit} and ${playerCards[1].name} of ${playerCards[1].suit}. <br> Wanna play another round??`;
      //To restart the game and initialise the default value
      setGameMode = `Deal Cards`;
      (playerAutoWin = 0), (comAutoWin = 0);
      playerCards = [];
      playerCardValue = 0;
      numOfCardsDrew = 0;
      comCards = [];
      comCardValue = 0;
      numOfCardsComDrew = 0;
      return defaultWinStatement;
    } else if (playerAutoWin == 1) {
      defaultWinStatement = `You drew Blackjack. You Win!! <br>
      You have drew ${playerCards[0].name} of ${playerCards[0].suit} and ${playerCards[1].name} of ${playerCards[1].suit}. <br> Wanna play another round??`;
      //To restart the game and initialise the default value
      setGameMode = `Deal Cards`;
      playerAutoWin = 0;
      playerCards = [];
      playerCardValue = 0;
      numOfCardsDrew = 0;
      comCards = [];
      comCardValue = 0;
      numOfCardsComDrew = 0;
      return defaultWinStatement;
    } else if (comAutoWin == 1) {
      defaultWinStatement = `Com drew Blackjack. You Lose!! <br>
      You have drew ${playerCards[0].name} of ${playerCards[0].suit} and ${playerCards[1].name} of ${playerCards[1].suit}. <br> Wanna play another round?? `;
      //To restart the game and initialise the default value
      setGameMode = `Deal Cards`;
      comAutoWin = 0;
      playerCards = [];
      playerCardValue = 0;
      numOfCardsDrew = 0;
      comCards = [];
      comCardValue = 0;
      numOfCardsComDrew = 0;
      return defaultWinStatement;
    } else {
      if (playerCardValue < 17) {
        myOutputValue = `You have drew ${playerCards[0].name} of ${playerCards[0].suit} and ${playerCards[1].name} of ${playerCards[1].suit} <br>
      Your current card value is ${playerCardValue}.<br> You have insufficient point, click on Submit button to draw another card.`;
        setGameMode = `Player Draw Card`;
      } else {
        myOutputValue = `You have drew ${playerCards[0].name} of ${playerCards[0].suit} and ${playerCards[1].name} of ${playerCards[1].suit} <br>
 Your current card value is ${playerCardValue}.<br> Do you want to Hit or Stand?`;
        setGameMode = `Player Decision`;
      }
    }
  }

  // The user continue to draw cards until above 17 and decide to hit (draw a card) or stand (end their turn)
  else if (setGameMode == `Player Draw Card`) {
    myOutputValue = `You had ${playerCards[0].name} of ${playerCards[0].suit} and ${playerCards[1].name} of ${playerCards[1].suit} <br>`;
    issueCards();
    if (playerCardValue > 21) {
      myOutputValue = `You just drew ${
        playerCards[numOfCardsDrew + 1].name
      } of ${playerCards[numOfCardsDrew + 1].suit} <br>
Your current card value is ${playerCardValue}.<br> You have burst. Now pray the dealer also burst to draw.`;
      setGameMode = `Compare Result`;
    } else if (playerCardValue < 17) {
      myOutputValue += `You just drew ${
        playerCards[numOfCardsDrew + 1].name
      } of ${playerCards[numOfCardsDrew + 1].suit} <br>
      Your current card value is ${playerCardValue}.<br> You have insufficient point, click on Submit button to draw another card.`;
      setGameMode = `Player Draw Card`;
    } else {
      myOutputValue += `You just drew ${
        playerCards[numOfCardsDrew + 1].name
      } of ${playerCards[numOfCardsDrew + 1].suit} <br>
 Your current card value is ${playerCardValue}.<br> Do you want to Hit or Stand?<br>Enter "Hit" or "Stand"`;
      setGameMode = `Player Decision`;
    }
  }
  //The user decides whether to hit or stand, using the submit button to submit their choice.
  else if (setGameMode == `Player Decision`) {
    if (input == `Hit` || input == `hit`) {
      issueCards();
      if (playerCardValue > 21) {
        myOutputValue = `You just drew ${
          playerCards[numOfCardsDrew + 1].name
        } of ${playerCards[numOfCardsDrew + 1].suit} <br>
  Your current card value is ${playerCardValue}.<br> You have burst. Now pray the dealer also burst to draw.`;
        setGameMode = `Compare Result`;
      } else {
        myOutputValue += `You just drew ${
          playerCards[numOfCardsDrew + 1].name
        } of ${playerCards[numOfCardsDrew + 1].suit} <br>
Your current card value is ${playerCardValue}.<br> Do you want to Hit or Stand?<br>Enter "Hit" or "Stand"`;
        setGameMode = `Player Decision`;
      }
      outputStatement += `, ${playerCards[numOfCardsDrew + 1].name} of ${
        playerCards[numOfCardsDrew + 1].suit
      }`;
    } else if (input == `Stand` || input == `stand`) {
      myOutputValue = `You have decided to stand (End your turn). Click "submit" to challenge the Dealer cards.`;
      setGameMode = `Compare Result`;
    } else {
      myOutputValue = `You have entered an invalid input. <br> Enter only "Hit" or "Stand".<br> Your current card value is ${playerCardValue}.`;
      setGameMode = `Player Decision`;
    }
  }
  //The user's cards are analysed for winning or losing conditions.
  else if (setGameMode == `Compare Result`) {
    comDrawCards();
    outputStatement = `You have drew ${playerCards[0].name} of ${playerCards[0].suit}, ${playerCards[1].name} of ${playerCards[1].suit}`;
    for (var k = 0; k < numOfCardsDrew; k++) {
      outputStatement += `, ${playerCards[k + 2].name} of ${
        playerCards[k + 2].suit
      }`;
    }
    outputStatement += `<br> Com have drew ${comCards[0].name} of ${comCards[0].suit}, ${comCards[1].name} of ${comCards[1].suit}`;
    for (var j = 0; j < numOfCardsComDrew; j++) {
      outputStatement += `, ${comCards[j + 2].name} of ${comCards[j + 2].suit}`;
    }
    //The game either ends or continues.
    if (playerCardValue > 21 && comCardValue <= 21) {
      outputStatement += `<br> You burst and you lost.<br> Click on submit to restart the game.`;
    } else if (playerCardValue > 21 && comCardValue > 21) {
      outputStatement += `<br> Both of you burst and it is a draw.<br> Click on submit to restart the game.`;
    } else if (playerCardValue == comCardValue) {
      outputStatement += `<br> It is a tie.<br> Click on submit to restart the game.`;
    } else if (playerCardValue <= 21 && comCardValue > 21) {
      outputStatement += `<br> You won, com have burst its card.<br> Click on submit to restart the game.`;
    } else if (playerCardValue > comCardValue) {
      outputStatement += `<br> You won.<br> Click on submit to restart the game.`;
    } else if (playerCardValue < comCardValue) {
      outputStatement += `<br> You Lost.<br> Click on submit to restart the game.`;
    }
    //To restart the game and initialise the default value
    setGameMode = `Deal Cards`;
    playerCards = [];
    playerCardValue = 0;
    numOfCardsDrew = 0;
    comCards = [];
    comCardValue = 0;
    numOfCardsComDrew = 0;
    return outputStatement;
  }

  return myOutputValue;
};

var changeContent = function () {
  var instructionSelector = document.querySelector("#instructions");
  instructionSelector.innerHTML = "";
};
