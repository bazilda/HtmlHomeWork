import { Cipher } from "./Cipher";
export function displayCipherDecipher(objCip: Cipher, text: string) {
    const cipherResult = objCip.cipher(text);
    console.log(`ciphering of text ${text} gives cipher ${cipherResult}
     deciphering gives result ${objCip.decipher(cipherResult)}`);
}