import React from 'react'
import styles from "./ExpenseList.module.css"

const ExpenseList = () => {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {/* Display transactions here */}
      </ul>
    </div>)
}

export default ExpenseList