import React from "react";
import TodoDataService from "../../services/todoService";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../../redux/actions/todoAction";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import { toggleModal } from "../../redux/actions/appAction";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { setTodo } from "../../redux/actions/todoAction";

export default function EditTodo({ todo }) {
    const todoId = todo.id;
    const todolist = useSelector((state) => state.todolist);
    const currentState = useSelector((state) => state);
    const [state, setState] = useState({
        ...currentState,
        title: todolist.todo.title,
        description: todolist.todo.description,
    });
    const database = useSelector((state) => state.managerDB);
    const todoService = new TodoDataService(database.db, todoId);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(toggleModal(false));
    };

    const changeInputHandler = (event) => {
        setState((prev) => ({
            ...prev,
            ...{ [event.target.name]: event.target.value },
        }));
    };

    const updateTodoItem = async () => {
        const newTodoList = [];
        const todoUpd = {
            title: state.title,
            description: state.description,
        };

        await todoService.updateTodo(todoUpd);

        todolist.todos.map((todo) => {
            newTodoList.push(todo);
        });

        newTodoList.map((todo, index) => {
            if (todo.id == todoId) {
                newTodoList[index] = { ...todoUpd, id: todoId };
            }
        });

        dispatch(updateTodo(newTodoList));
        dispatch(setTodo(database.db, todoId));
		handleClose()
    };

    return (
        <div>
            <FormGroup>
                <TextField
                    id="outlined-helperText"
                    label="title"
                    helperText=""
                    name="title"
                    defaultValue={todolist.todo.title}
                    onChange={changeInputHandler}
                />
                <Typography
                    component={"div"}
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                ></Typography>
                <TextField
                    id="outlined-helperText"
                    label="description"
                    helperText=""
                    name="description"
                    defaultValue={todolist.todo.description}
                    onChange={changeInputHandler}
                />
                <Typography />
                <div className="row">
                    <div className="col-md-8">
                        <Button variant="text" onClick={handleClose}>
                            Выйти
                        </Button>
                    </div>
                    <div className="col-md-2">
                        <Button onClick={updateTodoItem}>Сохранить</Button>
                    </div>
                </div>
            </FormGroup>
        </div>
    );
}
