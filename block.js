class Block {
    constructor(timestamp, lasthash, hash, data){
        this.timestamp = timestamp;
        this.lasthash = lasthash;
        this.hash = hash;
        this.data = data;
    }
}

const block1 = new Block();
