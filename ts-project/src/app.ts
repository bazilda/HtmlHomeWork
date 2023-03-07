
// HW-30

// function CipherRightShift(str: string, shift: number = 1, k: number = 1): string {
//    let strRez: string = '';
//    for (let someChr of str) {
//     ((someChr.charCodeAt(0) < 32) || (someChr.charCodeAt(0) > 126)) ? strRez = strRez + someChr : strRez = strRez + myShift(someChr, shift, k)
//    }
//    return strRez;
// }
//    function CipherLeftShift(str: string, shift: number = 1,) {
//       let strRez: string;
//       strRez = CipherRightShift(str, shift, -1);
//       return strRez;
//    }
//    function myShift(chr: string, shift: number, k: number) {
//       const min = ' '.charCodeAt(0);
//       const max = "~".charCodeAt(0);
//       let chrAscii = chr.charCodeAt(0);
//       let chrAsciiNew = (max - 2 * min + chrAscii + k * shift % (max - min)) % (max - min) + min;
//       let symbol = String.fromCharCode(chrAsciiNew);
//       return symbol;
//    }

//    let strOrig = 'zbcd1A';
//    let strEncoded = CipherRightShift(strOrig, 150);
//    let strDecoded = CipherLeftShift(strEncoded, 150);
//    console.log("orig=" + strOrig);
//    console.log("encoded=" + strEncoded);
//    console.log("decoded=" + strDecoded);

import {CipherRightShift } from "./CipherRightShift";
import {CipherLeftShift } from "./CipherLeftShift";
import {displayCipherDecipher } from "./displayCipherDecipher";
let obj=new CipherRightShift (2);
displayCipherDecipher(obj, "abc");
let obj1=new CipherLeftShift(3);
displayCipherDecipher(obj1,"def");

