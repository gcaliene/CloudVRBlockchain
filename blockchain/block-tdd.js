const hexToBinary =require('hex-to-binary');
const {GENESIS_DATA, MINE_RATE} = require('../config');
const { cryptoHash } = require('../util');

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
        let { difficulty } =lastBlock;
        let nonce = 0;

        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({ originalBlock: lastBlock, timestamp })
            hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty)
        } while (hexToBinary(hash).substring(0, difficulty) !== '0'.repeat(difficulty))

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

    static adjustDifficulty({ originalBlock, timestamp }) {
        const { difficulty } = originalBlock;
        const difference = timestamp - originalBlock.timestamp;

        if (difficulty < 1) return 1;

        if (difference > MINE_RATE) return difficulty - 1;

        return difficulty + 1;
    }
}

module.exports = Block;