//for (let i =0; i<3; i++){
//   setTimeout(()=> console.log(i));
//}
// shift any positive number
// adds "shift" to ASCI codes of lower case leters 
// if the shifted code will be greater than ASCi code 'z'
// the code should be begun from  ASCi code 'a'
// sourse leter 'a' will be 'c' if 'shift'==2
// sourse leter 'z' will be 'b' if 'shift'==2
// example: shiftRound("aabx!",4)=>("eefb!")


// //subtrans "shift" to ASCI codes of lover case leters 
// // if the shifted code will be greater than ASCi code 'a'
// // the code should be begun from  ASCi code 'z'
// // sourse leter 'c' will be 'a' if 'shift'==2
// //sourse leter 'b' will be 'z' if 'shift'==2
// // example: unshiftRound("eefb!",4)=>("aabx!")

//HW 29
type Abc = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';
function shiftRound(str: string, shift: number = 1): string {
   let someChr: Abc;
   let strRez: string = '';
   for (let someChr of str) {
      if ((someChr.charCodeAt(0) < 97) || (someChr.charCodeAt(0) > 122)) {
         strRez = strRez + someChr;
      }

      else {
         let rez = myShift(someChr as Abc, shift);
         strRez = strRez + rez;
      }
   }
   return strRez;
}

function unshiftRound(str: string, shift: number = 1) {
   shift = 26 - shift;
   let strRez: string;
   strRez = shiftRound(str, shift);
   return strRez;
}

function myShift(chr: Abc, shift: number) {
   let chrAscii = chr.charCodeAt(0);
   let theShift = shift % 26;
   let chrAsciiNew = chrAscii + theShift;
   if (chrAsciiNew > 122) {
      chrAsciiNew = chrAsciiNew - 26;
   }
   let symbol = String.fromCharCode(chrAsciiNew);
   return symbol;

}

let strOrig = 'abcd1A';
let strEncoded = shiftRound(strOrig, 3);
let strDecoded = unshiftRound(strEncoded, 3);
console.log("orig=" + strOrig);
console.log("encoded=" + strEncoded);
console.log("decoded=" + strDecoded);