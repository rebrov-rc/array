// 1. Сделать реверс массива (массив в обратном направлении)

let a2 = Math.floor(Math.random()*20),
b2 = Math.floor(Math.random()*20);

let array2 = [1, 2, 3, a2, 5, 6, 7, 8, b2, 10, 11];
console.log(array2);


console.log('//===========================>')

for (let i = array2.length - 1; i >= 0; i--) {
    console.log(array2[i]);
}




