
var prevexpression = "";
var newexpression = "0";
var operator = "none";
const operatorArray = [ '+', '-', '*', '/', '%'];

display = ( preexp, newexp, optr) => {
    document.getElementById("prev_").innerHTML = preexp;
    document.getElementById("new_").innerHTML = newexp;

    if( optr == 'none'){
        document.getElementById("optr_").innerHTML = '';
    }else{
        document.getElementById("optr_").innerHTML = optr;
    }
}


const calculate = ( prev, new_, opr) => {
    let num1 = 0, num2 = 0;
    for( var i = 0; i < prev.length; i++){
        num1 = ( num1 * 10) + ( prev.charCodeAt( i) - '0'.charCodeAt( 0));
    }
    for( var i = 0; i < new_.length; i++){
        num2 = ( num2 * 10) + ( new_.charCodeAt( i) - '0'.charCodeAt( 0));
    }
    console.log( num1, num2);
    if( opr == '+'){
        return num1 + num2;
    }else if( opr == '-'){
        return num1 - num2;
    }else if( opr == '*'){
        return num1 * num2;
    }else if( opr == '/'){
        return num1 / num2;
    }else{
        return num1 % num2;
    }
}




const darken = ( eltId ) => {
    let elt = document.getElementById( eltId);
    elt.style.filter = 'contrast(50%)';
}

const restore = ( eltId ) => {
    let elt = document.getElementById( eltId);
    elt.style.filter = 'contrast(100%)';
}

const keyPressed = ( char ) => {

    console.log( "char : " + char);
    
    if( char == '+' || char == '-' || char == '*' || char == '/' || char == '%'){
        if( newexpression != "" && operator != 'none'){
            prevexpression = calculate( prevexpression, newexpression, operator).toString();
            newexpression = '0';
        }else if ( operator == 'none'){
            prevexpression = newexpression;
            newexpression = '0';
        }
        operator = char;
    }else if( char == '='){
        newexpression = calculate( prevexpression, newexpression, operator).toString();
        prevexpression = '';
        operator = 'none';
    }else{
        if( newexpression == '0'){
            newexpression = char;
        }else{
            newexpression += char;
        }
    }

    console.log( "p : " + prevexpression);
    console.log( "n : " + newexpression);
    console.log( "o : " + operator);

    display( prevexpression, newexpression, operator);
}

