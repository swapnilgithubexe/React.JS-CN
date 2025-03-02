import React, { useState } from 'react'
import styles from "./ExpenseForm.module.css"

const ExpenseForm = () => {
  const [transaction, setTransaction] = useState([]);
  const [text, setText] = useState("Enter text...");
  const [amount, setAmount] = useState("Enter amount...")
  return (
    <form className={styles.form} onSubmit={(e) => {
      e.preventDefault();

    }}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
        type="text"
        placeholder={text}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        placeholder={amount}
        required
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  )
}

export default ExpenseForm