import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { deleteTodo } from "../../redux/actions/todoAction";
import { useDispatch,useSelector } from "react-redux";
import TodoDataService from "../../services/todoService";

async function deleteTodoItem(db, todoId, dispatch) {
    const todoService = new TodoDataService(db, todoId)
    await todoService.delete()
    dispatch(deleteTodo(todoId))
}


export default ({todo}) => {
    const database = useSelector((state) => state.managerDB);
    const dispatch = useDispatch()

    function submitHandlerDelete (event) {
        event.preventDefault()
        deleteTodoItem(database.db, todo.id, dispatch)
    }

    function submitHandlerEdit (event) {
        event.preventDefault()
        console.log('edit')
    }


    return (
        <tr key={todo.id}>
            <td>{todo.index}</td>
            <td>{todo.title}</td>
            <td>
                <form onSubmit={submitHandlerEdit} style={{display: 'contents'}}>
                    <IconButton aria-label="delete" type="submit" size="small">
                        <EditIcon fontSize="inherit" />
                    </IconButton>
                </form>
                <form onSubmit={submitHandlerDelete} style={{display: 'contents'}}>
                    <IconButton aria-label="delete" type="submit" size="small">
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </form>
            </td>
        </tr>
    );
}
