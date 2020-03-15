
let a, b, c, d, sum, x, y;


for (i = 0; ; i++ ) {
    x = prompt('Enter a number or symbol:');

    if ( x == '+' ) {
       y = prompt('plus');
       
        sum = +a + +y;
        a = sum;
        alert( sum );   

    }else  if ( x == '-' ) {
        y = prompt('minuse');
       
        sum = +a - +y;
        a = sum;
        alert( sum ); 
    }else if ( x == '*' ) {
        y = prompt('*');
       
        sum = +a * +y;
        a = sum;
        alert( sum ); 
    }else if( x == '/' ) {
        y = prompt('/');
            for (i = 0;  ; i++) {

                if ( y == '0' ) {
                    alert('На 0 делить нельзя!');
                    y = prompt('/');
                }else {
                    sum = +a / +y;
                    a = sum;
                    alert( sum ); 
                    break;
                }
        }


    }else  if( x == '0' ) {
        alert( 'STOP!' );
        break;  
    } else { a = +x }
}
console.log(a);
console.log(sum);