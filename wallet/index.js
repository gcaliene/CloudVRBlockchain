const { STARTING_BALANCE } = require('../config');
const { ec } = require('../util');

class Wallet {
    constructor(){
        this.balance = STARTING_BALANCE;

        const keyPair = ec.genKeyPair();

        //publicKey is the key used as an address not a signature
        this.publicKey = keyPair.getPublic().encode('hex');

        //privateKey is the key used as a signature 
    }

};

module.exports = Wallet;