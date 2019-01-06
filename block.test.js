const Block = require('./block-tdd') //.js is implicit specified by node.js
const {
    GENESIS_DATA
} = require('./config')
const cryptoHash = require('./crypto-hash')

describe('Block', () => {
    const timestamp = 'anydata';
    const lastHash = 'foohash why not';
    const hash = 'har-hash';
    const data = ['blockchain', 'data'];
    const nonce = 1;
    const difficulty = 1;
    const block = new Block({
        timestamp,
        lastHash,
        hash,
        data,
        nonce,
        difficulty
    });

    it('has a timestamp, lasthash, hash, and data property', () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
        expect(block.nonce).toEqual(nonce);
        expect(block.difficulty).toEqual(difficulty);
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

    describe('minedBlock()', () => {
        const lastBlock = Block.genesis();
        const data = 'mined data';
        const minedBlock = Block.mineBlock({
            lastBlock,
            data
        })

        it('returns a Block instance', () => {
            console.log(minedBlock instanceof Block);
            expect(minedBlock instanceof Block).toBe(true)
        })

        it('sets the `lastHash` to be the `hash` of the lastBlock', () => {
            expect(minedBlock.lastHash).toEqual(lastBlock.hash); // the actual value goes inthe expect statment and the expected value goes in the toEqual in JEST
        })

        it('sets the `data`', () => {
            expect(minedBlock.data).toEqual(data);
        });

        it('sets a `timestamp`', () => {
            expect(minedBlock.timestamp).not.toEqual(undefined)
        })

        it('creates a SHA-256 `hash` based on the proper inputs', () => {
            expect(minedBlock.hash)
                .toEqual(
                    cryptoHash(
                        minedBlock.timestamp,
                        minedBlock.nonce,
                        minedBlock.difficulty,
                        lastBlock.hash,
                        data
                    )
                );
        })

        it('sets the `hash` that matches the difficulty criteria', () => {
            expect(minedBlock.hash.substring(0, minedBlock.difficulty))
                .toEqual('0'.repeat(minedBlock.difficulty))
        })
    })
});