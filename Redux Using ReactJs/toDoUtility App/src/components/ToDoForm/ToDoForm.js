import { useState } from "react";
import { useDispatch } from "react-redux";
// import {addTodo} from "../../redux/actions/todoActions";

import "./ToDoForm.css";
import { actions } from "../../redux/reducers/todoReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const disptach = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    disptach(actions.add(todoText));
  };

  return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">Create Todo</button>
      </form>
    </div>
  );
}

export default ToDoForm;