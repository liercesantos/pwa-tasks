import React, {useState} from "react";
import { Typography} from "@mui/material";
import InputText from "../../input/input-text";
import ButtonPrimary from "../../input/button-primary";
import {MaskedText} from "../../input";
import TasksControl from "../../../controls/tasks-control";
import BaseModal from "./index";


const AddTasksModal = ({open, handleClose}) => {
    const control = new TasksControl();
    const [schedule, setSchedule] = useState();
    const [title, setTitle] = useState();
    const schedule_mask = [/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/];

    const handleAddTask = () => {
        control.addTask({title: title, schedule: schedule, checked: false, done: false});
        handleClose();
    }

    return (
        <BaseModal open={open} onClose={handleClose}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                <span style={{color: '#5093B3'}}>Nova Tarefa</span>
            </Typography>
            <br />
            <MaskedText mask={schedule_mask} placeholder={"Horário"} onValueChange={setSchedule} />
            <InputText placeholder={"Título"} onValueChange={setTitle} />
            <ButtonPrimary onPress={handleAddTask}>Salvar</ButtonPrimary>
        </BaseModal>
    )
}
export default AddTasksModal;
