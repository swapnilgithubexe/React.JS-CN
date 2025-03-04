import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
  const { expenses } = props;
  let profitAmount = 0;
  let lossAmount = 0

  const grandTotal = expenses.reduce((acc, currentExp) => {
    const currentExpenseAmt = Number(currentExp.amount);
    if (currentExpenseAmt < 0) {
      lossAmount += currentExpenseAmt
    } else {
      profitAmount += currentExpenseAmt
    }
    return currentExpenseAmt + acc;
  }, 0)
  // Add logic here to calculate the grand total, profit and expense amount here
  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${grandTotal.toFixed(2)}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${profitAmount}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${lossAmount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
