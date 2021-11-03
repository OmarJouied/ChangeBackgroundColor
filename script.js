let HexNum = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

var r = 0
var g = 0
var b = 0

let red = document.querySelector("#red");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let body = document.querySelector("body");

var event = setInterval(() => {
    red.onclick = () => {
        r++;
        r %= 16;
        red.textContent = HexNum[r];
    }

    green.onclick = () => {
        g++;
        g %= 16;
        green.textContent = HexNum[g];
    }

    blue.onclick = () => {
        b++;
        b %= 16;
        blue.textContent = HexNum[b];
    }
    body.style.backgroundColor = '#' + HexNum[r] + HexNum[g] + HexNum[b];
},500);
