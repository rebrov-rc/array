// Авто-угадыватель

let a, b, c, d, guess;

for ( let i = 0; ;i++ ) {
    guess = Math.floor(Math.random()*100);
    // guess = 17;
    let p = 50, min = 0, max = 100;

    for (let ii = 0; ii <= 10; ii++  ) {
        if( ii == 10 ){
            alert('ВЫ ПРОИГРАЛИ!(( ' + guess);
            break;
        }else {
            p;

        }

        if ( p > guess ) {
            // alert('МЕНЬШЕ!! ' + p + ' Осталось ' + (9-ii) + ' попыток');
            max = p;
            p = (p - min) / 2;
            p = Math.floor(p);
            p = max - p;
        } else if ( p < guess ) {
            // alert('БОЛЬШЕ!! ' + p + ' Осталось ' + (9-ii) + ' попыток');
            min = p;
            p = (max - min) / 2;
            p = Math.floor(p);
            p = min + p;


        }else if( p == guess ) {
            alert('УГАДАЛИ!!! ' + guess);
            break;
        } 

    }

    console.log(guess);
}
