const transactions = [
  { customerId: 1, amount: 100, date: "2024-03-01" },
  { customerId: 2, amount: 150, date: "2024-03-01" },
  { customerId: 1, amount: 200, date: "2024-03-02" },
  { customerId: 3, amount: 50, date: "2024-03-02" },
  { customerId: 2, amount: 120, date: "2024-03-03" },
];

/**
 * totaltransactions: Total number of transactions
 * totalAmount: Total amounf of all transactions
 * averageTransactionAmount: Average amount of transactions
 * transactionsPerDay: An object where keys are dates and values are arrays containing transactions made on that date.
 * transactionsByCustomer: An object where keys are customer IDs and values are arrays containing transactions made by that customer.
 */

const totaltransactions = transactions.length;

const totalAmount = transactions.reduce(
  (acc, transaction) => transaction.amount + acc,
  0
);

const averageTransactionAmount = totalAmount / totaltransactions;

const transactionsPerDay = transactions.reduce((acc, transaction) => {
  if (!acc[transaction.date]) {
    acc[transaction.date] = [];
  }

  acc[transaction.date].push(transaction);
  return acc;
}, {});

const transactionsByCustomer = transactions.reduce((acc, transaction) => {
  if (!acc[transaction.customerId]) {
    acc[transaction.customerId] = [];
  }

  acc[transaction.customerId].push(transaction);
  return acc;
}, {});

console.log({
  totaltransactions,
  totalAmount,
  averageTransactionAmount,
  transactionsPerDay,
  transactionsByCustomer,
});
