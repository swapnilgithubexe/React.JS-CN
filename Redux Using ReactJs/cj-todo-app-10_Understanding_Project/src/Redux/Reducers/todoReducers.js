import { ADD_TODO, TOGGLE_TODO, } from "../Actions/todoActions.js"

const initialState = {
  todos: [
    {
      "text": "Gym at 5:30 PM", completed: false
    },
    {
      "text": "Lunch at 2 PM", completed: true
    }
  ]
}

export const todoReducer = (state = initialState, action) => {
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