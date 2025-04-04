import { ADD_TODO, TOGGLE_TODO, toggleTodo, addTodo } from "../Actions/todoActions.js"

const initialState = {
  todos: []
}

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      }

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.index) {
            todo.completed = !todo.completed
          }
          return todo;
        })
      }

    default:
      return state;
  }
}