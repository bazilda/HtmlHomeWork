
function letterIndex(letter)
{
    return letter.charCodeAt() - 'a'.charCodeAt();
}

function isItAnagr(Word1, Word2){
    if(Word1.length!=Word2.length)
        return false;
    let ar=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let arW1=Array.from(Word1.toLowerCase());
    let arW2=Array.from(Word2.toLowerCase());
    for( i=0; i<arW1.length; i++){
        let index=letterIndex(arW1[i]);
        ar[index]++;
    }

    for (i=0; i< arW2.length; i++){
        let index=letterIndex(arW2[i]);
        if (ar[index] == 0)
            return false;
        ar[index]--;
    }

    return true;
}

console.log(isItAnagr("abccc", "cccba"));
console.log(isItAnagr("aadc", "aacb"));