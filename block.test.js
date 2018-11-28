const Block = require('./block-tdd') //.js is implicit specified by node.js
const {GENESIS_DATA} = require('./config')

describe('Block', () => {
    const timestamp = 'anydata';
    const lastHash = 'foohash why not';
    const hash =  'har-hash';
    const data = ['blockchain', 'data'];
    const block = new Block({ timestamp, lastHash, hash, data });

    it('has a timestamp, lasthash, hash, and data property', () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    })

    describe('genesis()', () => {
        const genesisBlock = Block.genesis(); //static function 
        console.log('gensisBlock', genesisBlock);
        it('returns a block instance', () => {
            expect(genesisBlock instanceof Block).toBe(true);
        })
        it('returns the genesis data', () => {
            expect(genesisBlock).toEqual(GENESIS_DATA);
        })
    })
});