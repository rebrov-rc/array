
let a, b, c, d, guess, p;

for ( let i = 0; ;i++ ) {
    guess = Math.floor(Math.random()*100);

    for (let ii = 0; ii <= 10; ii++  ) {

        if( ii == 10 ){
            alert('ВЫ ПРОИГРАЛИ!(( ' + guess);
            break;
        }else {
            p = prompt('угадайте число от 0 до 100');

        }

        if ( p > guess ) {
            alert('МЕНЬШЕ!! ' + 'Осталось ' + (9-ii) + ' попыток');
        } else if ( p < guess ) {
            alert('БОЛЬШЕ!! ' + 'Осталось ' + (9-ii) + ' попыток');
        }else if( p == guess ) {
            alert('УГАДАЛИ!!! ' + guess);
            break;
        } 

    }

    console.log(guess);
}
