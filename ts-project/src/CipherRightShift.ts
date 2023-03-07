import { CipherImpl } from "./CipherDecipher";
export class CipherRightShift extends CipherImpl {
    constructor(shift: number) {
        super(shift, false);
    }
}
