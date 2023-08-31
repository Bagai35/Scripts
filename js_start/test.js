//alert("hi");
document.write("<H2> Wasaaap </H2>");
console.log("Hi");

document.write("<H2> Wasaaap </H2>");
document.write("<hr/>")

///////////////////////////////////////

document.write("<h2>Before</>")
let a = 10;
let b = 11;

console.log("a =", a);
console.log("b =", b);

document.write("<h2> A= "+a +" <h2>");
document.write("<h2> B= "+b +" <h2>");

let temp = a;
a = b;
b = temp;

document.write("<h2>After</>")

console.log("a =", a);
console.log("b =", b);

document.write("<h2> A= "+a +" <h2>");
document.write("<h2> B= "+b +" <h2>");
document.write("<hr/>")

///////////////////////////////////////

let Fahrenheit = +prompt("Enter temperature in Fahrenheit:");

let Celsius = Math.round((Fahrenheit - 32)/1.8);
alert("Temperature in Celsius: " + Celsius);

console.log("Temperature in Fahrenheit : ", Fahrenheit );
console.log("Temperature in Celsius: ", Celsius);

document.write("<h2> Temperature in Fahrenheit: "+Fahrenheit +"</h2>");
document.write("<h2> Temperature in Celsius: "+Celsius +"</h2>");
document.write("<hr/>")

///////////////////////////////////////

let gameName = "Death Stranding";
alert("Best game ever is \"" + gameName+ "\"!");
document.write("Best game ever is \"" + gameName+ "\"!")

document.write("<hr/>")

///////////////////////////////////////