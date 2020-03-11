
let arr = [123, 'Ram', 4, true, 25];




// for (let i = 0; i <= arr; i++ ) {
//     let c = 2;
//     // console.log(arr);
// }

    // let abc = arr[1];
    // arr[1] = arr[3];
    // arr[3] = abc;

    console.log(arr[1]);
    console.log(arr.length);


// =================================================>

    let today = new Date;
    let t = today.getHours();

    // console.log(today);
    console.log(t);

    if ( t < 10 || t > 20 ) {
        console.log('Магазин - закрыт!');
    } else { console.log('Магазин - открыт!'); }
    console.log('//=============================>');
// ===================================================>


    let w = document.querySelector('.out');
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0) {
            out += arr[i] + ' _ ';
        }
    }

    w.innerHTML = out;
    // console.log(i);

