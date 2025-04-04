import { toggleTodo } from "../../Redux/Actions/todoActions";
import "./ToDoList.css";
import { useSelector, useDispatch } from "react-redux"

function ToDoList({ toggleTodoFunc }) {
  const todos = useSelector((state) =>
    state.todos
  )
  const dispatch = useDispatch();


  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? 'completed' : 'pending'}>{todo.completed ? 'Completed' : 'Pending'}</span>
            <button className="btn btn-warning"
              onClick={() => { dispatch(toggleTodo(index)) }}
            >Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
