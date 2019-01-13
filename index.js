const express = require('express');
// const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const PubSub = require('./pubsub');

const app = express();
const blockchain = new Blockchain();
const pubsub = new PubSub({ blockchain });

const PORT = 3000;

setTimeout(() => pubsub.broadcastChain(), 1000);

app.use(express.json());

app.get('/api/blocks', (req, res) => {
    res.json(blockchain.chain);
});

app.post('/api/mine', (req, res) => {
    const { data } = req.body;

    blockchain.addBlock({ data });

    res.redirect('/api/blocks');
})

app.listen(PORT, () => {
    console.log('The app is running on PORT:', PORT)
});