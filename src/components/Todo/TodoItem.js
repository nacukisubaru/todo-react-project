import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import TodoDataService from "../../services/todoService";
import { deleteTodo, setTodoId } from "../../redux/actions/todoAction";
import { useDispatch,useSelector } from "react-redux";
import { toggleModal } from "../../redux/actions/appAction";

export default ({todo}) => {
    const currentState = useSelector((state) => state);
    const database = useSelector((state) => state.managerDB);
    const dispatch = useDispatch()
    const todoService = new TodoDataService(database.db, todo.id)

    const deleteTodoItem = async () => {
        await todoService.delete()
        dispatch(deleteTodo(todo.id))
    }

    const prepareEditTodo = () => {
        dispatch(setTodoId(todo.id))
        dispatch(toggleModal(!currentState.app.isOpenModal))
    }

    return (
        <tr key={todo.id}>
            <td>{todo.index}</td>
            <td>{todo.title}</td>
            <td>
                <IconButton aria-label="delete" onClick={prepareEditTodo} type="submit" size="small">
                    <EditIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" onClick={deleteTodoItem} type="submit" size="small">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </td>
        </tr>
    );
}
