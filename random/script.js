
let textArray = ["DO NOT DISTURB", "CLEAN UP YOUR WORKSPACE", "NAMASTE B*TCHES", "WHOMP WHOMP WHOMP"];
let imageArray = ["images/sleep.jpg", "images/clean.jpg", "images/yoga.jpg", "images/yell.jpg"];

  function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let i = getRandom(textArray.length);
  let randomText = textArray[i];
  let randomImage = imageArray[i];

  document.getElementById("text").innerHTML = textArray[i];
  document.getElementById("image").innerHTML = '<img src="' + imageArray[i] + '">';
