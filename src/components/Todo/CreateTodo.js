import React from "react";
import { useSelector } from "react-redux";
import TodoDataService from "../../services/todoService";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SaveIcon from "@mui/icons-material/Save";
import { fetchTodo } from "../../redux/actions/todoAction";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function CreateTodo() {
    const database = useSelector((state) => state.managerDB);
    const todos = useSelector((state) => state.todos);
    const currentState = useSelector((state) => state);
    const dispatch = useDispatch();
    const [state, setState] = useState({...currentState});

    const submitHandler = (event) => {
        event.preventDefault()
        createTodo(database.db, {title:state.textField})
    };

    async function createTodo (db, list) {
        const todo = new TodoDataService(db)
        await todo.add(list)
        dispatch(fetchTodo(db))
    }

    const changeInputHandler = (event) => {
        setState({
            ...currentState,
            ...{ [event.target.name]: event.target.value },
        });
        console.log(state)
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
    );
}
