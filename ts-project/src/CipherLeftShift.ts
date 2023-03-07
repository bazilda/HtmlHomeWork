import { CipherImpl } from "./CipherDecipher";
export class CipherLeftShift extends CipherImpl {
    constructor(shift: number) {
        super(shift, true);
    }
}
