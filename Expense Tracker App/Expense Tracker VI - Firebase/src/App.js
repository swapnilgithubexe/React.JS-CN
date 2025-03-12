import { useState, useReducer } from "react";
import "./App.css";


// components imports
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import firebase methods here
import { doc, addDoc, collection, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      };
    }
    case "UPDATE_EXPENSE": {
      const expensesDuplicate = state.expenses;
      expensesDuplicate[payload.expensePos] = payload.expense;
      return {
        expenses: expensesDuplicate
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);

  const addExpense = async (expense) => {
    // add expense to firestore here
    const docRef = await addDoc(collection(db, "expenses"), expense);

    dispatch({
      type: "ADD_EXPENSE",
      // add the new document id to the payload expense object below
      payload: { expense: { ...expense, id: docRef.id } }
    });
    toast.success("Expense added successfully.");
  };

  const deleteExpense = (id) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
  };

  const resetExpenseToUpdate = () => {
    setExpenseToUpdate(null);
  };

  const updateExpense = async (expense) => {
    try {
      const expensePos = state.expenses.findIndex((exp) => exp.id === expense.id);

      if (expensePos === -1) {
        toast.error("Expense not found!");
        return;
      }

      const expenseRef = doc(db, "expenses", expense.id);
      await setDoc(expenseRef, {
        text: expense.text,
        amount: expense.amount
      });

      const updatedExpenses = state.expenses.map((exp, index) =>
        index === expensePos ? expense : exp
      );

      dispatch({ type: "UPDATE_EXPENSE", payload: { expenses: updatedExpenses } });
      toast.success("Expense updated successfully.");
    } catch (error) {
      console.error("Error updating expense:", error);
      toast.error("Failed to update expense!");
    }
  };

  return (
    <>
      <ToastContainer />
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm
          addExpense={addExpense}
          expenseToUpdate={expenseToUpdate}
          updateExpense={updateExpense}
          resetExpenseToUpdate={resetExpenseToUpdate}
        />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList
            expenses={state.expenses}
            deleteExpense={deleteExpense}
            changeExpenseToUpdate={setExpenseToUpdate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
