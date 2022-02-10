import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../../redux/actions/todoAction";
import { useState } from "react";
import TodoDataService from "../../services/todoService";
import Table from "react-bootstrap/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { connect } from "react-redux";

export default function TodoList() {
    const database = useSelector((state) => state.managerDB);
    const currentState = useSelector((state) => state);
	let todos = useSelector((state) => state.todos)
    const todo = new TodoDataService(database.db);

    const [state, setState] = useState({ ...currentState });

    useEffect(() => {
        getTodoList();
    }, []);

	useEffect(() => {
		if(Array.isArray(todos.todos)) {
			state.todos = todos.todos
		}
    });


    async function getTodoList() {
        const result = await todo.getList();
        setState({ ...state, todos: result });
        console.log(result);
    }

    return (
        <div className="wrapper">
            {Array.isArray(state.todos) ? (
                <div style={{ height: 400, width: "43%" }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>title</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.todos.map((todo, index) => {
                                return (
                                    <tr key={todo.id}>
                                        <td>{index + 1}</td>
                                        <td>{todo.title}</td>
                                        <td>
											<IconButton
                                                aria-label="delete"
                                                size="small"
                                            >
                                                <EditIcon fontSize="inherit" />
                                            </IconButton>

                                            <IconButton
                                                aria-label="delete"
                                                size="small"
                                            >
                                                <DeleteIcon fontSize="inherit" />
                                            </IconButton>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            ) : (
                "Нет записей"
            )}
        </div>
    );
}