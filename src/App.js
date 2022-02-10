import logo from './logo.svg';
import './App.css';
import CreateTodo from './components/Todo/CreateTodo'
import TodoList from './components/Todo/TodoList';
import {managerDB} from "./redux/actions/dbAction"
import {fetchTodo} from "./redux/actions/todoAction"
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  dispatch(managerDB())
  const database = useSelector((state) => state.managerDB);
  dispatch(fetchTodo(database.db))
  
  return (
    <div className="App">
      <CreateTodo></CreateTodo>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
