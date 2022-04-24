var fahrenheitToCelsiusMain = function (fahrenheit) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var myOutputValue = ((fahrenheit - 32) * 5) / 9;
  return myOutputValue;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  var kmtoMiles = input * 0.62;
  var myOutputValue = (kmtoMiles / 9) * 2.2;
  return myOutputValue;
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var costofCar = ((input * 0.62) / 9) * 2.2;
  var costofTrain = ((input * 0.62) / 9) * 2;
  return (myOutputValue = costofCar - costofTrain);
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var myOutputValue = (input * 2 * 4 * 1.5 * 0.0022) / 5;
  return myOutputValue;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var numberofPintsPerDay = input * 2;
  var numberofHalfBarrelPerDay = numberofPintsPerDay / 124;
  var myOutputValue = numberofHalfBarrelPerDay * 91;
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  if (input > 50) {
    var addGBPlan = Math.ceil(input / 50);
    var myOutputValue = (19.99 * addGBPlan) / input;
  } else {
    var myOutputValue = 19.99 / input;
  }
  return myOutputValue;
};
