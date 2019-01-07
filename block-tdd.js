const {GENESIS_DATA} = require('./config');
const cryptoHash = require('./crypto-hash')

class Block {
    constructor({ timestamp, lastHash, hash, data, nonce, difficulty }){ //The advantage of wrapping it in a object block, is that you don't have to remember the order of the instances.
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }

    //factory function
    static genesis(){
        // return new Block(GENESIS_DATA)
        return new this(GENESIS_DATA)
    }
    
    static mineBlock({ lastBlock, data }) {
        let hash, timestamp;
        // const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const { difficulty } =lastBlock;
        let nonce = 0;

        do {
            nonce++;
            timestamp = Date.now();
            hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty)
        } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty))

        return new this({
            timestamp,
            lastHash,
            data,
            // hash: cryptoHash(timestamp, lastHash, data, nonce, difficulty),
            nonce,
            hash,
            difficulty
        })
    }
}

module.exports = Block;