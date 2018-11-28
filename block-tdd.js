const {GENESIS_DATA} = require('./config');

class Block {
    constructor({ timestamp, lastHash, hash, data }){ //The advantage of wrapping it in a object block, is that you don't have to remember the order of the instances.
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    static genesis(){
        // return new Block(GENESIS_DATA)
        return new this(GENESIS_DATA)
    }
}

module.exports = Block;