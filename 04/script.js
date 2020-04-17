
let textArray = ["ABSOLUTELY NOT!", "DISGUSTING!", "*ATTEMPTING TO WORK*", "NOT THIS AGAIN!", "TOO TIRED FOR THIS"];
let imageArray = ["images/mad.jpg", "images/yuck.jpg", "images/school.jpg", "images/crying.jpg", "images/tired.jpg"  ];

  function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let i = getRandom(textArray.length);
  document.getElementById("text").innerHTML = textArray[i];
  document.getElementById("image").innerHTML = '<img src="' + imageArray[i] + '">';
