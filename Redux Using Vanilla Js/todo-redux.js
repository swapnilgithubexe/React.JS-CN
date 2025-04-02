const redux = require("redux")
//Actions

const ADD_TODO = "ADD TODO";
const TOGGLE_TODO = "TOGGLE TODO";

//Action creators

const addToDo = (text) => ({ text, type: ADD_TODO });
const toggleToDo = (index) => ({ index, type: TOGGLE_TODO })

//Initial Data
const initialState = {
  todos: []
}
//Reducers

//Reducers must return updated state
const todoReducer = (state = initialState, action) => {
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
          return todo
        })
      }
    default:
      return state;
  }
}

//store
const store = redux.createStore(todoReducer);

//dispatch actions
store.dispatch(addToDo("Complete Redux"))
store.dispatch(addToDo("Apply for companies"));
store.dispatch(toggleToDo(1));

//Read data from store
console.log(store.getState());
