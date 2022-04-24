var main = function (input) {
  console.log("Dont say Hello");
  var pi = 3.14;
  var radius = 4;
  var area = pi * radius * radius;
  var myOutputValue =
    "World is flat. <br/> The area of circle is " +
    area +
    "<br/>Your input is " +
    input +
    ".";
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue =
    "Hello, " +
    input +
    "! Well " +
    input +
    ", that's an unique name. " +
    input +
    ", you have a nice day. :) ";
  return myOutputValue;
};

var metricMain = function (distanceinKm) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var distanceinMiles = distanceinKm * 0.62;
  var myOutputValue = input + "km equals to " + distanceinMiles + "miles.";
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var train2SpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var train1Speed = 200;
  var train1Time = 2;
  var train2Speed = (train1Speed * train1Time) / (train1Time - input);
  var myOutputValue =
    "Speed required to reach same time as Train 1 is " + train2Speed + "kph.";
  return myOutputValue;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  if (input > 60) {
    var timeinHour = Math.ceil(input / 60);
    var timeDifference = (input % 60) - timeinHour * 5;
    var angle = (timeDifference / 60) * 360;
    return angle;
  } else {
    var angle1 = ((input - 5) / 60) * 360;
    return angle1;
  }
};
