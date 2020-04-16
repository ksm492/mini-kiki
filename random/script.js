
let textArray = ["IT'S ME, MINI KIKI!", "PLEASE DO NOT DISTURB", "CLEAN UP YOUR WORKSPACE", "NAMASTE B*TCHES", "ASIAN LIVES MATTER"];
let imageArray = ["images/hello.jpg","images/sleep.jpg", "images/clean.jpg", "images/yoga.jpg", "images/yell.jpg"];

  function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let i = getRandom(textArray.length);
  document.getElementById("text").innerHTML = textArray[i];
  document.getElementById("image").innerHTML = '<img src="' + imageArray[i] + '">';
