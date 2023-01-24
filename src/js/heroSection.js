const effectDisplay = document.getElementById("effectDisplay");
const bar = document.getElementById("bar");

var i = 0;
var txt = 'Love & Passion'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter1() {
  if (i < txt.length) {
    effectDisplay.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
  
}


window.onload = function() {
    typeWriter1();
    setTimeout(function(){bar.innerText="";}, 1500);
  };