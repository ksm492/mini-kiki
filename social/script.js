let textArray = ["BORED, HUH?", "LIKE MY POST!", "LOL YOU THOUGHT", "PRODUCTIVITY? NEVER HEARD OF THAT.", "HERE WE GO AGAIN..."];
let imageArray = ["images/sitting.jpg", "images/like.jpg", "images/lol.jpg","images/hearing.jpg", "images/chillin.jpg"];

  function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let i = getRandom(textArray.length);
  let randomText = textArray[i];
  let randomImage = imageArray[i];

  document.getElementById("text").innerHTML = textArray[i];
  document.getElementById("image").innerHTML = '<img src="' + imageArray[i] + '">';
