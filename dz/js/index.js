const a = 7;
const b = 12;
const ab = a * b;
console.log("Множення A на B :>> ", ab);

const c = 84;
const d = 12;
const cd = c / d;
console.log("Ділення C на D:>> ", cd);

const e = 84;
const f = 12;
const ef = e + f;
console.log("Додавання E до F :>> ", ef);

const j = 11;
const k = true;
const l = "java script";
const m = "100";
console.log("Додавання E до F :>> ", j, k, l, m);

let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;

console.log(
  "object :>> ",
  (num += 11),
  (num -= 11),
  (num *= 11),
  (num /= 11),
  num++,
  num--
);

const inputValue = Number(prompt("Введіть 1 число"));

const result = inputValue ** 2;
// console.log("You summ is :>> ", result);
const kv = alert("Ваше число у квадраті = " + result);

const inputValue1 = Number(prompt("Введіть 1 число"));
const inputValue2 = Number(prompt("Введіть 2 число"));
const resultSumm = inputValue1 + inputValue2;
const result1 = resultSumm / 2;
const kvResult1 = alert("Ваше середнє число = " + result1);

const inputMinute = Number(prompt("Введіть кількість хвилин"));
const resultMinute = inputMinute * 60;
const kvMinute = alert("Кількість секунд у хвилин = " + resultMinute);

const greeting = "Hello, ";
const userName = prompt("Введіть Ім'я");
const kvName = alert(greeting + userName);

// const y = "Htllo!";
// const x = "2";
// console.log(y + x);
