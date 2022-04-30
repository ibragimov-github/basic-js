const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(value = true) {
        this.value = value;
    }
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    encrypt(text, key) {
        if (!text || !key) {
            throw Error("Incorrect arguments!");
        }
        let acc = 0;
        let result = ''
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
                i++;
                result += ' ';
            }
            if (this.alphabet.indexOf(text[i].toUpperCase()) !== -1) {
                if (acc >= key.length) { acc = 0;}
                let index = (this.alphabet.indexOf(text[i].toUpperCase()) + this.alphabet.indexOf(key[acc].toUpperCase())) % 26
                result += this.alphabet[index];
                acc ++;
            }
            else {
                result += text[i];
                acc ++;
            }

        }
    if (this.value) {
        return result;
    }
    return result.split('').reverse().join('');
    }
    decrypt(text, key) {
        if (!text || !key) {
            throw Error("Incorrect arguments!");
        }
        let acc = 0;
        let result = '';
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
                i++;
                result += ' ';
            }
            if (this.alphabet.indexOf(text[i].toUpperCase()) !== -1) {
                if (acc >= key.length) { acc = 0;}
                let index = this.alphabet.indexOf(text[i].toUpperCase()) - this.alphabet.indexOf(key[acc].toUpperCase());
                if (index < 0) {
                    index = 26 + index;
                }
                result += this.alphabet[index];
                acc ++;
            }
            else {
                result += text[i];
                acc ++;
            }
        }
    if (this.value) {
        return result;
    }
    return result.split('').reverse().join('');
    }
}

module.exports = {
  VigenereCipheringMachine
};
const directMachine = new VigenereCipheringMachine(false);

