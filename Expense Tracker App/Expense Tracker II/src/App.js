import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);


  // Create function to add an expense
  const addExpense = (text, amount) => {
    setExpenses(prev => [...prev, { text, amount }])
  }

  // Create function to delete an expense
  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm addExpense={addExpense} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList deleteExpense={deleteExpense} expenses={expenses} />
        </div>
      </div>
    </>
  );
}

export default App;
