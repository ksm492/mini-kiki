
let textArray = ["BORED, HUH?", "LIKE MY POST!", "LOL YOU THOUGHT", "PRODUCTIVITY? NEVER HEARD OF IT.", "HERE WE GO AGAIN..."];
let imageArray = ["images/sitting.jpg", "images/like.jpg", "images/lol.jpg","images/hearing.jpg", "images/whip.jpg"];

  function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let i = getRandom(textArray.length);
  document.getElementById("text").innerHTML = textArray[i];
  document.getElementById("image").innerHTML = '<img src="' + imageArray[i] + '">';
