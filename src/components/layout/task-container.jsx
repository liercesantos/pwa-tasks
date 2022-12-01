import React from "react";
import TextDivider from "./text-divider";
import RemoveIcon from "../../assets/icons/remove";
import TaskList from "./task-list";
import TasksControl from "../../controls/tasks-control";

const TaskContainer = ({height}) => {
    const control = new TasksControl();
    return(
        <>
            <TextDivider text={"Tarefas do Dia"} />

            <div className={"tasks-list-container"}>
                <div className={"remove-tasks"} onClick={() => {control.handleDelete();}}>
                    <RemoveIcon />
                    <div className={"remove-tasks-text"}>Remover Selecionados</div>
                </div>

                <div className={"tasks-list-scroller"} style={{height: height}}>
                    <TaskList />
                </div>
            </div>
        </>
    );
}
export default TaskContainer;
