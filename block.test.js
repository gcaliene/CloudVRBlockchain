const Block = require('./block-tdd') //.js is implicit specified by node.js


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
});