// 1. Write function getDigitsSum that takes any number and returns sum of the digits in the integer part of the number.
function getDigitsSum(num){
    let sum = 0;

    if (num<0)
        num=(-1)*num;
    num=Math.trunc(num);
    // num = Math.trunc(Math.abs(num));
    while(num!=0){
        sum=sum + num%10 ;
        num = Math.trunc(num/10);
    }

    return sum;
}
console.log("number is 124.8, sum=" + getDigitsSum(124.8));
console.log("number is -124, sum=" + getDigitsSum(124));
console.log("number is 0, sum=" + getDigitsSum(0));


// 2. Write function computeExpression that takes a string containing any mathematical expression and returns a result of the calculation. 

function computeExpression(expessionStr){
   
    let res = eval(expessionStr);
    return res;
}
console.log("" + computeExpression(10+20));


// 3. Write function printAnanas() that takes and returns nothing. It prints on the console the word “ananas” with chars "a" and "s" only.

function printAnanas() {
    let a;
   let str = ("a" + (a/2) + "as");
   return  console.log ( str.toLowerCase());
//const str = ("A"+ +"A" + "AS").toLoverCase();
//return  console.log (str);
}
printAnanas();


// 4. Write function reverse that takes any number and returns string comprising of the digits of the integer part of the given number in the reversed order. 
//    Sign “-” should be kept in the result.

function reverse(number){
let res = number < 0 ? "-" : " ";
let revnumber=0;
    number=Math.trunc(Math.abs(number));
    do{
     (number%10===0)?(res=res + "0"):res;
     revnumber = (revnumber + number%10)*10;
     number=Math.trunc(number/10);
    }
    while(number);
    //revnumber = revnumber/10;
    return res + (revnumber/10);
}
console.log(" Return number of -4536.34 is " + reverse(-4536.34));
console.log(" Return number of -4530 is " + reverse(-4530));
console.log(" Return number of -45300 is " + reverse(-45300));
