function testaa(){

var num1 = document.getElementById("k1").value;
var num2 = document.getElementById("k2").value;
var num3 = document.getElementById("k3").value;
var num4 = document.getElementById("k4").value;
var num5 = document.getElementById("k5").value;
var summa;
var keskiarvo;
console.log (num1, num2, num3, num4, num5);
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
num4 = parseInt(num4);
num5 = parseInt(num5);

summa = num1 + num2 + num3 + num4 + num5;
keskiarvo = summa / 5;

alert("lukujen summa on: " + summa + " ja keskiarvo on: " + keskiarvo);

}
