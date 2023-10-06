import React, {useEffect, useState} from "react";
import AddIcon from "../../assets/icons/add";
import AddTasksModal from "../../components/layout/modals/add-tasks";
import TaskContainer from "../../components/layout/task-container";
import TasksControl from "../../controls/tasks-control";
import {useTasks} from "../../contexts/TasksContext";

const Home = () => {
    const control = new TasksControl();
    const {setShowDone} = useTasks();
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setShowDone(false);
        control.handleTasks(false);
      /* eslint-disable-next-line */
    }, []);

    const handleModal = () => {
        setModal(!modal);
    }

    return(
        <div className={"tasks-container"}>
            <div className={"add-task"} onClick={handleModal}>
                <span><AddIcon /></span>
                <div className={"add-task-text"}>Adicionar Tarefa</div>
            </div>
            <TaskContainer height={365} />
            <AddTasksModal open={modal} handleClose={handleModal} />
        </div>
    );
}

export default Home;
