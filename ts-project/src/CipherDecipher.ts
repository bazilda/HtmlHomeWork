import { Cipher } from "./Cipher";
export class CipherImpl implements Cipher {
    shift ;
     isLeft ;
     protected constructor(shift: number, isLeft: boolean) {
        this.shift = shift;
        this.isLeft = isLeft;
     }
     cipher(plainText: string): string {
        let k=1;
        if (this.isLeft) {
            k = -1;
        }
        return this.cipher_decipher(plainText, k );
     }
  
     decipher(cipherText: string): string {
     let k=-1;
        if (this.isLeft) {
          k = 1;
        }
        return this.cipher_decipher(cipherText, k );
     }
  
     cipher_decipher(myStr: string, key: number ): string {
        let strRez: string = '';
        for (let someChr of myStr) {
           ((someChr.charCodeAt(0) < 32) || (someChr.charCodeAt(0) > 126)) ? strRez = strRez + someChr : strRez = strRez + this.myShift(someChr, key)
        }
        return strRez;
     }
  
     myShift(chr: string, k: number) {
        const min = ' '.charCodeAt(0);
        const max = "~".charCodeAt(0);
        let chrAscii = chr.charCodeAt(0);
        let chrAsciiNew = (max - 2 * min + chrAscii + k * this.shift % (max - min)) % (max - min) + min;
        let symbol = String.fromCharCode(chrAsciiNew);
        return symbol;
     }
  
  }
  