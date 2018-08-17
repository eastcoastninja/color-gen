
// lodash npm package
let _ = require('lodash');

console.log(_);
let array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.querySelector(".btn");

setGradient();

const setGradient = () => {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	
	css.textContent = body.style.background + ";";
}

const getRandomRgb() => {
	  let num = Math.round(0xffffff * Math.random());
	  let r = num >> 16;
	  let g = num >> 8 & 255;
	  let b = num & 255;
	  return 'rgb(' + r + ', ' + g + ', ' + b + ')';	
}

const getRandomHex = () => {
	  let letters = '0123456789ABCDEF'.split('');
      let color = '#';
        for (let i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
}

const randomColorGen = () => {
	color1.value = getRandomHex();
	color2.value = getRandomHex();

	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value; + ")";

	css.textContent = body.style.background + ";";
}

random.addEventListener("click", randomColorGen);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);