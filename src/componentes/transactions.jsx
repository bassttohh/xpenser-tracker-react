// import { useState } from 'react'


const TransactionItem = ({ transaction }) => {
  return (
    <div className="transaction">
      <div className="transaction-description">
        <p>{transaction.description}</p>
        <p>{transaction.category}</p>
      </div>

      <div className="transaction-amount">
        <p>{transaction.amount}</p>
      </div>
    </div>
  )
}
const Transactions = ({ transactions }) => {
  return (
    <>
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction} />
      ))}
    </>
  )
}

export default Transactions
