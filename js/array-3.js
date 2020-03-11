// 3. Найти в массиве те элементы, значение которых меньше 
// среднего арифметического, взятого от всех элементов массива.

// сравнить и вывести


let a3 = Math.floor(Math.random()*20),
    b3 = Math.floor(Math.random()*20);

let array3 = [1, 2, 3, a3, 5, 6, 7, 8, b3, 10, 11];
// let array31 = [1, 2, 3, 4, 5];
console.log(array3);

let c3 = 0;

for (let i = 0; i < array3.length; i++) {
       c3 = c3 + array3[i];
}
// for (let i = 0; i < array3.length; i++) {
//     console.log(array3[i]);
// }

console.log('===========================');

console.log('Общая сумма = ' + c3);

console.log('===========================');


c3 = c3 / array3.length;

console.log('Среднее значение = ' + c3);
console.log('===========================');
console.log('элементы, значение которых меньше среднего арифметического: ');

 for (let i = 0; i < array3.length; i++) {
    if( array3[i] < c3 ) {
        console.log(array3[i]);
    }
 }
