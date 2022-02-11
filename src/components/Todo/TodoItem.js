import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import TodoDataService from "../../services/todoService";
import { deleteTodo } from "../../redux/actions/todoAction";
import { useDispatch,useSelector } from "react-redux";
import { toggleModal } from "../../redux/actions/appAction";

export default ({todo}) => {
    const currentState = useSelector((state) => state);
    const database = useSelector((state) => state.managerDB);
    const dispatch = useDispatch()

    async function deleteTodoItem(db, todoId) {
        const todoService = new TodoDataService(db, todoId)
        await todoService.delete()
        dispatch(deleteTodo(todoId))
    }

    return (
        <tr key={todo.id}>
            <td>{todo.index}</td>
            <td>{todo.title}</td>
            <td>
                <IconButton aria-label="delete" onClick={()=>{dispatch(toggleModal(!currentState.app.isOpenModal))}} type="submit" size="small">
                    <EditIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" onClick={()=>{deleteTodoItem(database.db, todo.id, dispatch)}} type="submit" size="small">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </td>
        </tr>
    );
}
