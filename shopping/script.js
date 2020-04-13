let textArray = ["HMM, SOMETHING FOR ME?", "I WOULDN'T GET THAT...", "DO YOU NEED THAT?", "MAKE IT RAIN!", "DISAPPOINTED, BUT NOT SURPISED."];
let imageArray = ["images/hmm.jpg", "images/shocked.jpg", "images/seriously.jpg", "images/money.jpg", "images/dead.jpg"];

  function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let i = getRandom(textArray.length);
  let randomText = textArray[i];
  let randomImage = imageArray[i];

  document.getElementById("text").innerHTML = textArray[i];
  document.getElementById("image").innerHTML = '<img src="' + imageArray[i] + '">';
