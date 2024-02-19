function myFunction(p1, p2) {
  return p1 * p2;
}

console.log(myFunction(2, 3));

let x = myFunction(4, 3);
console.log(x);

// ()연산자

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(77);
console.log(value);

let g = toCelsius(77);
let text1 = "The temperature is " + g + " Celsius";
let text2 = "The temperature is " + toCelsius(77) + " Celsius";
console.log(text1);
console.log(text2);
