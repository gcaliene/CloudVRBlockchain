const crypto = require('crypto'); //can create a powerful Hash object

const cryptoHash = (...inputs) => {  //Since we can't guess how many arguments are there going to be coming in, we have to use the JS spread operator.
    const hash = crypto.createHash('sha256');
    
}

module.exports = cryptoHash;