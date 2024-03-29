import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import EditTodo from "./EditTodo";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/actions/appAction";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function TodoModal() {
    const modalState = useSelector((state) => state.app.isOpenModal);
    const todo = useSelector((state) => state.todolist.todo);
    const dispatch = useDispatch();

    return (
        <div>
            <Modal
                open={modalState}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component={"div"}
                    >
                        Изменить дело
                    </Typography>
                    <Typography
                        component={"div"}
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                    >
                        <EditTodo todo={todo} key={todo.id} />
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
