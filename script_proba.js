// if (4 == 4) {
//   console.log("Ok!");
// } else {
//   console.log("Error");
// }

// // const num = 50;

// // if (num < 49) {
// //   console.log("error");
// // } else if (num > 100) {
// //   console.log("mnogo");
// // } else {
// //   console.log("ok!");
// // }

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
const usdCurr = 28;

function convert(amont, curr) {
  console.log(curr * amont);
}
convert(500, usdCurr);

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return;
  }
  console.log("Done");
}
test();

//методы и свойства строк и чисел

const str = "test";
const arr = [1, 2, 4];
console.log(str.length); //4 dlina stroki
console.log(arr.length); //4 dlina stroki
console.log(str[2]);
console.log(str.toLocaleUpperCase());

let fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); //5
console.log(fruit.indexOf("l")); //5

const logg = "hello world";
console.log(logg.slice(6, 10));

console.log(logg.substring(6, 10));

//округление

const num = 12.2;
console.log(Math.round(num));

const testa = "12.2px";
console.log(parseInt(testa)); //12
console.log(parseFloat(testa)); //12.2
