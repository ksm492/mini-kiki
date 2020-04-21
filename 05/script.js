let textArray = ["DANCE PARTY!", "BUST A MOVE!", "#FORYOUPAGE", "#TIKTOKFAMOUS", "Y'ALL NEED TO HYPE ME UP"];
let imageArray = ["images/dance.png", "images/slide.png", "images/nae.png", "images/whip.png", "images/dab.png"];

function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let i = getRandom(textArray.length);
document.getElementById("text").innerHTML = textArray[i];
document.getElementById("image").innerHTML = '<img src="' + imageArray[i] + '">';
