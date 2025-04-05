import { Fragment } from "react";
import { Provider } from "react-redux";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import {store} from "./redux/store";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}>
            
          </Route>
          <Route path="todo"
          element={
            <Fragment>
              <NavBar />
             <h1>To Dos</h1>
              <TodoForm  />
              <TodoList />
            </Fragment>
          }>

          </Route>
          <Route path="notes"
          element={
            <Fragment>
               <NavBar />
               <h1>Notes</h1>
              <NoteForm  />
              <NoteList />
            </Fragment>
          }>
            
            </Route>
        </Routes>
       
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
