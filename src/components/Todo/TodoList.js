import React from "react";
import Table from "react-bootstrap/Table";
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";

export default function TodoList() {
   let todolist = useSelector((state) => state.todolist)

    return (
        <div className="wrapper">
            {Array.isArray( todolist.todos) ? (
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
                            { todolist.todos.map((todo, index) => {
                                const todoData = {...todo, index: index + 1}
                                return <TodoItem todo={todoData} key={todo.id}></TodoItem>
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