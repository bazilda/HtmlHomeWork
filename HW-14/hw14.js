function coloringString(str1,str2)
{
    const ar1 = Array.from(str1);
    const ar2 = Array.from(str2);
    
    return ar2.map(function(chr, i){
        if (chr == ar1[i])
        {
           return "green";
        }
        else
        {
            if (ar1.includes(chr))
                return "yellow";
            else
                return "red";
        }
    })

   
}


function getNumbersWithDigitsAmount(digitsAmount, array)
{
    return array.filter(function(num){
        let  digitsInNum=0;
        do
       {
        num=num/10;
        digitsInNum += 1;
       } 
       while(num >= 1 || num <=-1)

        return (digitsInNum == digitsAmount);
    }
    );
}

console.log(coloringString("pappy", "apple"));

console.log(getNumbersWithDigitsAmount(3, [1, 100, -100, 25, 1000]));