document.addEventListener("DOMContentLoaded", function (event) {
  var dataText = ["PIYUSH ANAND"];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector("h1").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 250);
    } else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 700);
    }
  }
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 2000000);
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});

var i = 0;
var txt = ` I'm a Full-Stack Web-Developer from India, who focused on creating clean\n
 & user‑friendly experiences, I am passionate about building excellent software that\n
 improves the lives of those around me. I believe my enthusiasm and specialized\n
 experience would make me an asset to your team.`;
var speed = 10;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("writing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
