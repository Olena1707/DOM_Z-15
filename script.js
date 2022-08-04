"use strict";

let a = +prompt("Введите число");
let j = true;

for (let i = 2; i < a; i++) {
if (a % i === 0) {
    j = false;
    break
} 
}
if (j) {
    alert(true);
} else {
    alert(false);
}