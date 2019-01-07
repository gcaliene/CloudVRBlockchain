const Block = require('./block-tdd');
const cryptoHash = require('./crypto-hash')

class Blockchain {
    constructor(){
        this.chain = [Block.genesis()];
    }

    addBlock({ data }) {
        const newBlock = Block.mineBlock({
            lastBlock: this.chain[this.chain.length-1],
            data
        })

        this.chain.push(newBlock)
    }

    //replaceChain is not a static method because it is based on an individual specific instance of the blockchain
    replaceChain(chain){
        if(chain.length <= this.chain.length){
            console.error('Incomingchain must be longer')
            return;
        }

        if (!Blockchain.isValidChain(chain)){
            console.error('Incomingchain must be valid')
            return;
        }

        console.log('chain is valid, and replacing chain with ', chain)
        this.chain = chain; //argument chain will replace the local block chain array

    }

    static isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
            return false;
        } 

        // i=1 bc we want to skip the genesis block as it is already validated
        for(let i = 1; i<chain.length; i++) {
            const block = chain[i];
            const actualLastHash = chain[i-1].hash;
            const { timestamp, lastHash, hash, nonce, difficulty, data } = block;

            if (lastHash !== actualLastHash) return false;

            const validatedHash = cryptoHash(timestamp, lastHash, nonce, difficulty, data);
            if (hash !== validatedHash) return false;
        }

        return true;
    }
}

module.exports = Blockchain