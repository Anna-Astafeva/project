// if (4 == 4) {
//   console.log("Ok!");
// } else {
//   console.log("Error");
// }

// // const num = 50;

// if (num < 49) {
//   console.log("error");
// } else if (num > 100) {
//   console.log("mnogo");
// } else {
//   console.log("ok!");
// }

// // num === 50 ? console.log("ok") : console.log("error");

// const num = 50;

// switch (num) {
//   case 49:
//     console.log("no");
//     break;
//   case 100:
//     console.log("no");
//     break;
//   case 52:
//     console.log("yes");
//     break;
//   default:
//     console.log("hz");
//     break;
// }

// console.log(1 && 0); //0
// console.log(1 && 5); //5
// console.log(null && 5); //null
// console.log(0 && "hdgvhjd"); //0

// // console.log(NaN || 2 || undefined);
// // console.log(NaN && 2 && undefined);
// // console.log(1 && 2 && 3);
// // console.log((!1 && 2) || !3);
// // console.log(25 || (null && !3));
// // console.log(NaN || null || !3 || undefined || 5);
// // console.log(NaN || (null && !3 && undefined) || 5);
// // console.log((5 === 5 && 3 > 1) || 5);

// // let hamburger;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = 2;
// // if (hamburger && cola || fries === 3 && nuggets) {
// //  console.log('Done!');

// let nuh = 50;
// for (i = 1; i < 10; i++) {
//   if (i === 6) {
//     break;
//   }
//   console.log(nuh);
//   nuh++;
// }

// // *
// // **
// // ***
// // ****
// // *****
// // ******

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }

//   result += "\n";
// }

// console.log(result);

// функции
// const usdCurr = 28;

// function convert(amont, curr) {
//   console.log(curr * amont);
// }
// convert(500, usdCurr);

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) return;
//   }
//   console.log("Done");
// }
// test();

// //методы и свойства строк и чисел

// const str = "test";
// const arr = [1, 2, 4];
// console.log(str.length); //4 dlina stroki
// console.log(arr.length); //4 dlina stroki
// console.log(str[2]);
// console.log(str.toLocaleUpperCase());

// let fruit = "Some fruit";
// console.log(fruit.indexOf("fruit")); //5
// console.log(fruit.indexOf("l")); //5

// const logg = "hello world";
// console.log(logg.slice(6, 10));

// console.log(logg.substring(6, 10));

// //округление

// const num = 12.2;
// console.log(Math.round(num));

// const testa = "12.2px";
// console.log(parseInt(testa)); //12
// console.log(parseFloat(testa)); //12.2

// //callback function
// function learnJS(lang, callback) {
//   console.log(`я учу: ${lang}`);
//   callback();
// }

// learnJS("javascript", function () {
//   console.log("я прошел этот урок");
// });

// //или вариан с функцией
// function learnJS2(langg, callback) {
//   console.log(`я учу: ${langg}`);
//   callback();
// }
// function done() {
//   console.log("я прошел этот урок");
// }

// learnJS2("javascript", done);

// //обьекты

// const obj = new Object();

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: function () {
//     console.log("test");
//   },
// };
// options.makeTest();

// const { border, bg } = options.colors;
// console.log(border);

// console.log(options.name);
// //чтобы удалить из обьекта
// delete options.name;
// console.log(options);

// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Cvoistvo ${i} imeet znachenie ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Cvoistvo ${key} imeet znachenie ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);

// console.log(Object.keys(options).length);

// //МАССИВЫ
// const arr = [1, 2, 3];
// arr.pop();
// arr.push(280);
// console.log(arr);

// //перебор
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let elemets of arr) {
//   console.log(elemets);
// }
// arr[99] = 5;
// console.log(arr.length);

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// //формирование массива из строк (split)
// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products); // видим массив из того, что ввели в промпт через соотвествующий разделитель

// //сортировка
// products.sort();

// //формирование строки из массива (join)
// console.log(products.join(";")); // получаем строку из эементов сформированного массива, через соответвующий разделитель

//копирование объектов
const mainObj = {
  a: 7,
  b: 8,
};

function copy(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}
const newNumbers = copy(mainObj);
newNumbers.a = 9;
console.log(newNumbers);

//2 sposob
const numbers = {
  a: 10,
  b: 5,
  c: {
    x: 7,
    y: 9,
  },
};

const add = {
  d: 17,
  e: 20,
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);
console.log(clone);

//копирование массивов
//slice
const oldArray = [1, 1, 2];
const newArray = oldArray.slice();

newArray[1] = "jkecjke";
console.log(oldArray);
console.log(newArray);

//sprat - разварачивает структуру, превращая в набор данных и может объединить несколько массивов в один

const first = [1, 2, 3];
second = [4, 5, 6];
allNumbers = [...first, ...second, 7, 8];

console.log(allNumbers);

//еще пример с ... разворачивает и переводит а аргументы, отдельно не массив

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);
// //итак можно создать копию
// const array = ["a", "b"];
// const newarray = [...array];
// console.log(newarray);

// //аналогично с массивами создаем копию
// const q = {
//   one: 1,
//   two: 2,
// };
// const newQ = { ...q };
// console.log(newQ);

// //основы ООП
// const solider = {
//   a: 100,
//   b: 200,
// };

// // const jack = Object.create(solider);
// // console.log(jack.a);

// const john = {
//   a: 3,
// };
// Object.setPrototypeOf(john, solider);
// console.log(john.a);

// //динамическая типизация
// //to string
// //1)
// console.log(typeof String(4));

// //2)konkatenation
// console.log(typeof (null + ""));

// const num = 5;

// console.log("https:vt.com/catalog/" + num);

// const fontSize = 26 + "px";

// //to numder
// //1)
// console.log(typeof Number("djcvjd"));
// //2)
// console.log(typeof +"djcvjd");
// //3)
// console.log(typeof parseInt("15px", 10));

// let answ = +prompt("hello", "");

// //booolean
// let switcher = null;
// if (switcher) {
//   console.log("working");
// }
// switcher = 1;
// if (switcher) {
//   console.log("working");
// }

// //2)
// console.log(typeof Boolean("djcvjd"));

// //3)
// console.log(typeof (!!"djcvjd"));

let x = 1;
console.log(x++ + x++);

console.log([] + false - null + true);

let y = 1;
let x = (y = 2);
let a = 6;
let b = 8;
console.log(a && b);
