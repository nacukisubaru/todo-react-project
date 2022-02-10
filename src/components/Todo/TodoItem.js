import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

export default ({todo}) => {
    return (
        <tr key={todo.id}>
            <td>{todo.index}</td>
            <td>{todo.title}</td>
            <td>
                <IconButton aria-label="delete" size="small">
                    <EditIcon fontSize="inherit" />
                </IconButton>

                <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </td>
        </tr>
    );
}
