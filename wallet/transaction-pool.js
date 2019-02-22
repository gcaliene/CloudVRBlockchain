class TransactionPool {
  constructor() {
    this.transactionMap = {}
  }

  setTransaction(transaction) {
    this.transactionMap[transaction.id] = transaction;
  }

  //this will sync up transaction pools when a new peer starts up
  setMap(transactionMap) {
    this.transactionMap = transactionMap;
  }

  //without this, new transactions will keep piling up
  existingTransaction({ inputAddress }) {
    const transactions = Object.values(this.transactionMap);

    return transactions.find(transaction => transaction.input.address === inputAddress);
  }
}

module.exports = TransactionPool;