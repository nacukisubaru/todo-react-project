import logo from './logo.svg';
import './App.css';
import CreateTodo from './components/Todo/CreateTodo'
import TodoList from './components/Todo/TodoList';

import { useDispatch } from "react-redux";
import {managerDB} from "./redux/actions/dbAction"

function App() {
  const dispatch = useDispatch();
  dispatch(managerDB())
  
  return (
    <div className="App">
      <CreateTodo></CreateTodo>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
