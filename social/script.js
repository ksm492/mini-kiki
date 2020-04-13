let textArray = ["BORED, HUH?", "LIKE MY POST!", "LOL YOU THOUGHT"];
let imageArray = ["images/sitting.jpg", "images/like.jpg", "images/lol.jpg"];

  function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let i = getRandom([3]);
  let randomText = textArray[i];
  let randomImage = imageArray[i];

  document.getElementById("text").innerHTML = textArray[i];
  document.getElementById("image").innerHTML = '<img src="' + imageArray[i] + '">';
