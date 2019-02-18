const Transaction = require('./transaction');
const { STARTING_BALANCE } = require('../config');
const { ec, cryptoHash } = require('../util');


class Wallet {
    constructor(){
        this.balance = STARTING_BALANCE;

        //we want the keyPair data available in the sign method. so we make it a this.keypair
        // const keyPair = ec.genKeyPair();
        this.keyPair = ec.genKeyPair();

        //publicKey is the key used as an address not a signature
        this.publicKey = this.keyPair.getPublic().encode('hex');

        //privateKey is the key used as a signature 
    }

    sign(data) {
        return this.keyPair.sign(cryptoHash(data));
    }

    createTransaction({ recipient, amount }) {
        if (amount > this.balance){
            throw new Error('Amount exceeds balance');
        }

        return new Transaction({ senderWallet: this, recipient, amount }); //this would mean the current wallet instance
    }
};

module.exports = Wallet;