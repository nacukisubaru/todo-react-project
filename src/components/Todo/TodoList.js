import React from "react";
import Table from "react-bootstrap/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import {useSelector} from "react-redux";

export default function TodoList() {
   let todos = useSelector((state) => state.todos)

    return (
        <div className="wrapper">
            {Array.isArray( todos.todos) ? (
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
                            { todos.todos.map((todo, index) => {
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