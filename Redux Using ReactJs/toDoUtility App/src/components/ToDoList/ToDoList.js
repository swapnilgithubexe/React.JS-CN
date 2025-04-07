import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";

import "./ToDoList.css";
import { actions } from "../../redux/reducers/todoReducer";

function ToDoList() {

  const todos = useSelector((state) => state.todoReducer.todos);

  const disptach = useDispatch();
  // const todos= store.getState().todos;

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? 'completed' : 'pending'}>{todo.completed ? 'Completed' : 'Pending'}</span>
            <button className="btn btn-warning"
              onClick={() => { disptach(actions.toggle(index)) }}
            >Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;