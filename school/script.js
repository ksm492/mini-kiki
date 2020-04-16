
let textArray = ["ABSOLUTELY NOT!", "DISGUSTING!", "*ATTEMPTING TO WORK*", "NOT THIS AGAIN!", "TOO TIRED FOR THIS"];
let imageArray = ["images/shocked.jpg", "images/yuck.jpg", "images/school.jpg", "images/crying.jpg", "images/dead.jpg"  ];

  function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let i = getRandom(textArray.length);
  let randomText = textArray[i];
  let randomImage = imageArray[i];

  document.getElementById("text").innerHTML = textArray[i];
  document.getElementById("image").innerHTML = '<img src="' + imageArray[i] + '">';
