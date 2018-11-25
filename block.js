class Block {
    constructor({ timestamp, lasthash, hash, data }){ //The advantage of wrapping it in a object block, is that you don't have to remember the order of the instances.
        this.timestamp = timestamp;
        this.lasthash = lasthash;
        this.hash = hash;
        this.data = data;
    }
}

//This is done without mapping, and will yield undefined if map is not specified
// const block1 = new Block('01/11/89', 'foo-lasthash', 'foo-hash', 'foo-data');

const block1 = new Block({
    lasthash: 'foo-lasthash',
    hash: 'foo-lasthash',
    data: 'foo-data',
    timestamp: '04/15/1989',
})

console.log('block1', block1)
