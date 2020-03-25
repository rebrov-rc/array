
// 4. Вывести число, которое является зеркальным отображением 
// последовательности цифр заданного числа, например, 
// задано число 123, вывести 321. Числа к строке приводить 
// нельзя - ищите другие пути). 




function renum (x) {
    let n = 0, y = 0;
    for ( let i = 0 ; ; i++ ) {
        if( x == undefined ) {
            console.log( 'Enter some number!' );
            break;
        }else   if ( x <= 10 ) {
            n = x%10 + y;
            y = n
            
            return y ;
        }else if ( x > 10 ) {
           n = (x%10 + y) * 10 ; 
           x = Math.floor( x / 10 ); 
           y = n; 

        } 
    } 

}

console.log(renum( 987 ));