"use strict";

// 1

// let arr = [1,2,3,4,5];

// for (a=1; a<=arr.length;a++) {
//     console.log(a);
// }

// 2

// let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

// for (b=1;b<=arr2.length;b++) {
//     if (arr2[b]<-3 && arr2[b]>-10)
//     console.log(arr2[b]);
// }

// 3

// let arr = [];
// let result = 0;

// for (c=23;c<=57;c++) {
//     arr.push(c);
//     result=(result+c)
// }

// console.log (arr);
// console.log (result);

// 4

// let arr = ["10", "20", "30", "50", "235", "3000"];

// for(a=0;a<=arr.length;a++) {
//     let num = String(arr[a]);
//     if (num[0] == 1 || num[0] == 2 || num[0] == 5) {
//         console.log(num);
// }
// }

// 5

// let week = [" ПН "," ВТ ", " СР ", " ЧТ ", " ПТ ", " СБ "," ВС "];

// for (a=0;a<week.length;a++){
//     if (week[a] == " СБ " || week[a] == " ВС "){
//         document.write('<b>' + week [a] + '</b>' + '<br>')
//     }

//      else
//        document.write(week[a] + '<br>')
// }

// 6

// let w = [];
// for (r=0;r<=55;r+=4){
//     w.push(r);

// }
// console.log(w);
// w[w.length] = 100;
// console.log(w);

// last = w[w.length -1]
// console.log(last);

// 7

// {let num = [];
//     let q;

// for (i=0; ;i++) {
//     q = prompt("Введите число");
//     if ( q === ``) break;
//     if (isNaN(q)) { continue }
//     num.push(q);
// }
// console.log(num);

// num.sort((a,b)=> a - b);
// console.log(num)

// }

// 8

// let mas = [12, "false", "Текст", 4, 2, -5, 0];

// console.log (mas.reverse());

9

// let num = [5, 9, 21, , , 9, 78, , , , 6];
// let summ = 0

// for (i = 0; i <= num.length; i++) {

//     // if (isNaN(num[i])) {
//     //     continue 
//     // }
//     if (num[i] === undefined){
//         summ++;}
// }

// console.log(num);
// console.log(summ);

// 10

const mass = [48, 9, 0, 6, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
let summ1 = 0
let summ3 = 0
let total = 0

let i = 0
for (i; ; i++) {
    if (mass[i] !== 0) {
        summ1 = summ1 + mass[i];
    }
    if (mass[i] === 0) {
        break
    }
}
console.log(summ1)

let k = 0
for (k; k < mass.length; k++) {
    summ3 = summ3 + mass[k];
}
console.log(summ3);



console.log(mass.reverse())
let summ2 = 0
let h =0
for (h; ; h++) {
    if (mass[h] !== 0) {
        summ2 = summ2 + mass[h];
    }
    if (mass[h] === 0) {
        break;
    }
}
console.log(summ2)

console.log(total=(summ3-(summ1+summ2)))

