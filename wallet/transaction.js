const wallet = require('./index');
const uuid = require('uuid/v1'); // v1 is timestamp based

class Transaction{
    constructor({senderWallet, recipient, amount}) {
        this.id = uuid();

        this.senderWallet = senderWallet;
        this.recipient = recipient;
        this.amount = amount;
        // this.outputMap = {};
        this.outputMap = this.createOutputMap({ senderWallet, recipient, amount });
    }

    createOutputMap({ senderWallet, recipient, amount }) {
        const outputMap = {};

        outputMap[recipient] = amount;
        outputMap[senderWallet.publicKey] = senderWallet.balance - amount;

        return outputMap
    }
}

module.exports = Transaction;