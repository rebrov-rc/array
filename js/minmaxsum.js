// 4. В массиве найти сумму элементов, находящихся между 
// минимальным и максимальным элементами. Сами минимальный 
// и максимальный элементы в сумму не включать.



let a4 = Math.floor(Math.random()*7),
    b4 = Math.floor(Math.random()*20);

let array4 = [a4, 5, 6, 7, 8, b4, 10, 11, 12 , 13, 14];

let min = array4[0], max = array4[0];
let iNmin = 0, iNmax = 0;

console.log(array4);

console.log('==========================================');

for (let i = 0; i < array4.length; i++) {
    if ( min > array4[i] ) {
        min = array4[i];
        iNmin = i;
    }
}
console.log('Индекс мин = ' + iNmin);
// 

for ( let i = 0; i < array4.length; i++ ) {
    if ( max < array4[i] ) {
        max = array4[i];
        iNmax = i;
    }
}
console.log('Индекс макс = ' + iNmax);
console.log('==========================================');


console.log('Число min = ' + min);
console.log('Числло max = ' + max);
console.log('==========================================');

// найти индексы которые пренадлежат min max


// узнать к какому индексу принадлежит Мин число!
// Условие = числа с меньшей или = суммой не считать!
// Нахожу номер индекса Мин и Макс  ===== ПОЛУЧЕНЫ!!
sum = 0;
console.log('Числа от мин до макс: ');

for (let i = iNmin + 1; i < iNmax; i++) {
        sum = sum + array4[i];
        
        console.log(array4[i]);
}
console.log('==========================================');
console.log('Общая сумма между мин до макс: ');

console.log(sum);
