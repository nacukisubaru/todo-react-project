import React from "react";
import { useSelector } from "react-redux";
import TodoDataService from "../../services/todoService";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SaveIcon from "@mui/icons-material/Save";
import { createTodo } from "../../redux/actions/todoAction";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function CreateTodo() {
    const currentState = useSelector((state) => state);
    const dispatch = useDispatch();
    const [state, setState] = useState({...currentState});

    const submitHandler = (event) => {
        event.preventDefault()
        const todo = {
            title: state.textField,
            description: '',
            datetime: new Date(),
            authorID: 4221,
            isComplete: false,
            status: 'not complete' 
        }
        createTodoFb(currentState.managerDB.db, todo)
    };

    async function createTodoFb (db, todo) {
        const todoService = new TodoDataService(db)
        const result = await todoService.add(todo)
        if(result.id) {
            todo.id = result.id
            dispatch(createTodo(todo))
        }
    }

    const changeInputHandler = (event) => {
        setState({
            ...currentState,
            ...{ [event.target.name]: event.target.value },
        })
    }

    return (
        <div className="wrapper create-box">
            <Box
                sx={{
                    width: 300,
                    maxWidth: "100%",
                }}
            >
                <form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col-md-10">
                            <TextField
                                fullWidth
                                label="fullWidth"
                                id="fullWidth"
                                onChange={changeInputHandler}
                                name="textField"
                            />
                        </div>
                        <div className="col-md-2 mt-2">
                            <Button variant="outlined" startIcon={<SaveIcon />} type="submit">
                                save
                            </Button>
                        </div>
                    </div>
                </form>
            </Box>
        </div>
    )
}
