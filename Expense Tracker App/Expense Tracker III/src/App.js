import { useReducer, useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.expense, ...state]

    case "REMOVE":
      return state.filter((expense) => expense.id !== action.id)

    default:
      return []
  }
}

function App() {
  // Remove the useState hook and replace it with useReducer hook
  // Implement the functionality to add and remove the transaction in reducer function
  // const [expenses, setExpenses] = useState([]);
  const [expenses, dispatch] = useReducer(expenseReducer, [])

  const addExpense = (expense) => {
    dispatch({ type: "ADD", expense: expense })
  }

  const deleteExpense = (id) => {
    dispatch({ type: "REMOVE", id })
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
