import { useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  const { addExpense, deleteExpense } = props;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Logic to add expense here
    const textInput = expenseTextInput.current.value;
    const amountInput = expenseAmountInput.current.value;

    addExpense(textInput, amountInput);

  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        ref={expenseTextInput}
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        ref={expenseAmountInput}
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        required
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;
