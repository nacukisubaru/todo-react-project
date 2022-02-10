import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../../redux/actions/todoAction";
import { useState } from "react";
import TodoDataService from "../../services/todoService";

export default function TodoList() {
    const database = useSelector((state) => state.managerDB);
    const currentState = useSelector((state) => state);
    const dispatch = useDispatch();
    const todo = new TodoDataService(database.db, 'HCJYVliT3jyQpHJGr3Km')

    const [state, setState] = useState({...currentState});

    useEffect(() => {
        getTodoList()
    }, [])

    async function getTodoList() {
        const result = await todo.getList()
        setState({...state, todos: result})
        console.log(state)
    }

    return (
        <div className="wrapper">
            <div>Todo list</div>
            {Array.isArray(state.todos) ? <pre>{JSON.stringify(state.todos, undefined, 2)}</pre> : 'Нет записей'}
            <button onClick={() => dispatch(fetchTodo(database.db))}>кнопка</button>
        </div>
    );
}
