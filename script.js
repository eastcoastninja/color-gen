var _ = require('lodash');

console.log(_);
var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".btn");

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomRgb() {
	  var num = Math.round(0xffffff * Math.random());
	  var r = num >> 16;
	  var g = num >> 8 & 255;
	  var b = num & 255;
	  return 'rgb(' + r + ', ' + g + ', ' + b + ')';	
}

function getRandomHex() {
	  var letters = '0123456789ABCDEF'.split('');
      var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
}

function randomColorGen() {
	color1.value = getRandomHex();
	color2.value = getRandomHex();

	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value; + ")";

	css.textContent = body.style.background + ";";
}

random.addEventListener("click", randomColorGen);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);