// 1. string => number
/*function myParseInt(str,base) {
    base = base || 10;
    let res = 0;
    for ( let i = 0; i< str.length; i++){
        res = res* base + getCode(str[i]);
    }
    return res;
}
function getCode(symbol){
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();
    const res = symbol<='9'? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}
*/
function myParseInt(str,base) {
    base = base || 10;
    let res = 0;
    if (str[0]=="-"){return console.log("The negative number, error");}
    else{
        let i;
    while ( i< str.length && (str[i].charCodeAt()<10||(str[i].charCodeAt()>96 && str[i].charCodeAt()<122 ) )){ 
        res = res* base + getCode(str[i]);
        i++;
    }
    return res;
}
}
function getCode(symbol){
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();
    const res = symbol<='9'? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}
let str1="ff";
let str2="123";
let str22="Java";
let str3="123m";  
let str4="123.5";
let num=parseInt(str1,16);
let myNum=myParseInt(str1,16);
num=parseInt(str2);
myNum=myParseInt(str2);
num=parseInt(str22,36);
myNum=myParseInt(str22,36);
num=parseInt(str3);
myNum=myParseInt(str3);
num=parseInt(str4);
myNum=myParseInt(str4);


/**************************************************************** */
// 2. number=>string
//let number = 255;
//let str = ""+ number;
//str = number.toString(16)   //  255=>'ff'

/*function myToString(number,base){
    let res = '';
    base = base|| 10;
    number = Math.trunc(Math.abs(number));
    do{
        const digit = number%base;
        const symbol = getSymbol(digit);
        res = symbol + res;
    
    } while(number);
    return res;
}
function getSymbol(digit){
    const codeA = 'a'.charCodeAt();
    let symbol;
    if(digit<10){
        symbol="" + digit;
    }
    else {
        const codeAscii = digit - 10 + codeA;
        symbol=String.fromCharCode(codeAscii);
    }
    return symbol;
}
*/
function myToString(number,base){
    let res = '';
    base = base|| 10;
    const sign=number<0?"-":"";
    number= Math.abs(number);
    const intPart = Math.trunc(Math.abs(number));
    const fractionPart=number-intPart;
    res=convertIntPart(intPart,base)+'.' + convertFractionPart(fractionPart,base);
    return sign + res;   
}

function convertIntPart(number,base){
    let res = '';
    do {
    const digit = number%base;
    const symbol = getSymbol(digit);
    res = symbol + res;
    number=Math.trunc(number/base);
      } while(number);
    return res;
}
function convertFractionPart(number,base,precision){
    let res = '';
    precision=precision || 4;
    let count =0;
    let intPart;
    do{
        number*=base;
        intPart=Math.trunc(number);
        if (intPart !=0){
            if (count == precision && intPart>= base/2){
                intPart++;
            } 
             const symb = getSymbol(intPart);
            res +=symb;
            number = number - intPart;
        }
            count++;
      }  while (intPart && count <= precision);
            return res;
        }
function getSymbol(digit){
    const codeA = 'a'.charCodeAt();
    let symbol;
    if(digit<10){
        symbol="" + digit;
    }
    else {
        const codeAscii = digit - 10 + codeA;
        symbol=String.fromCharCode(codeAscii);
    }
    return symbol;
}
let num100=990500;
let str100=num100.toString();
let myStr100=myToString(num100);
str100=num100.toString(36);
myStr100=myToString(num100,36);
num100=123.45;
str100=num100.toString();
myStr100=myToString(num100);
str100=num100.toString(16);
myStr100=myToString(num100,16);

console.log(myToString("1.1",10));//?
console.log(myToString("1.1",16));//?
console.log(myToString(1.1,10));
console.log(myToString(1.1,16));