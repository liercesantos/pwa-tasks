import React from "react";
import Checkbox from "../../components/input/checkbox";
import RoundedCheckbox from "../../components/input/rounded-checkbox";
import TasksControl from "../../controls/tasks-control";
import {useTasks} from "../../contexts/TasksContext";

const TaskList = () => {
    const {tasks} = useTasks();
    const control = new TasksControl();

    return(
        <div>
            {tasks.length > 0 ?
                tasks.map((task, index) =>
                    <div key={`key_${task.id}_${Date()}`} className={"task-list"}>
                        <Checkbox action={() => {control.handleCheck(task, index)}} />
                        <div>
                            <span className={"task-schedule"}>{task.schedule}</span>
                            <span className={"task-title"}>&bull; {task.title}</span>
                        </div>
                        <div style={{float: "right", marginTop: -22}}>
                            <RoundedCheckbox checked={task.done} action={() => {control.handleDone(task, index)}} />
                        </div>
                    </div>
                ) : <div></div>}
        </div>
    );
}

export default TaskList;
