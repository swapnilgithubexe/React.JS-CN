import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {addTodo} from "../../redux/actions/todoActions";

import "./ToDoForm.css";
import { actions } from "../../redux/reducers/todoReducer";
import { notificationSelector, resetNotification } from "../../redux/reducers/notificationReducer";

function ToDoForm() {
  const message = useSelector(notificationSelector);

  const [todoText, setTodoText] = useState("");
  const disptach = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    disptach(actions.add(todoText));
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        disptach(resetNotification())
      }, 3000)
    }
  }, [message, disptach])

  return (
    <div className="container">
      {
        message && <div className="alert alert-success" role="alert">
          {message}
        </div>
      }
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