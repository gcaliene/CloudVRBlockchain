class Block {
    constructor(timestamp, lasthash, hash, data){
        this.timestamp = timestamp;
        this.lasthash = lasthash;
        this.hash = hash;
        this.data = data;
    }
}

const block1 = new Block('01/11/89', 'foo-lasthash', 'foo-hash', 'foo-data');

console.log('block1', block1)
