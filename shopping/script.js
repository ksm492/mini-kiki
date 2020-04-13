let textArray = ["SOMETHING FOR ME?", "SERIOUSLY?", "DO YOU NEED THAT?", "MAKE IT RAIN!", "DISAPPOINTED, BUT NOT SURPISED."];
let imageArray = ["images/yahoo.jpg", "images/seriously.jpg", "images/what.jpg", "images/money.jpg", "images/chillin.jpg"];

  function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let i = getRandom(textArray.length);
  let randomText = textArray[i];
  let randomImage = imageArray[i];

  document.getElementById("text").innerHTML = textArray[i];
  document.getElementById("image").innerHTML = '<img src="' + imageArray[i] + '">';
