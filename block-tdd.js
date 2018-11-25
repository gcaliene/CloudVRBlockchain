class Block {
    constructor({ timestamp, lastHash, hash, data }){ //The advantage of wrapping it in a object block, is that you don't have to remember the order of the instances.
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }
}

module.exports = Block;