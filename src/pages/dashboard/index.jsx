import React, {useEffect} from "react";
import TaskContainer from "../../components/layout/task-container";
import TasksControl from "../../controls/tasks-control";
import {useTasks} from "../../contexts/TasksContext";

const Dashboard = () => {
    const {setShowDone} = useTasks();
    const control = new TasksControl();
    useEffect(() => {
        setShowDone(true);
        control.handleTasks(true);
        /* eslint-disable-next-line */
    }, []);

    return(
        <div className={"tasks-container"}>
            <TaskContainer height={425} />
        </div>
    );
}
export default Dashboard;
