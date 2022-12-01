import React, {createContext, useContext, useState} from "react";

const TasksContext = createContext({
    tasks: [],
    setTasks: () => {},
    show_done: false,
    setShowDone: () => {},
});
const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);
    const [show_done, setShowDone] = useState(false);

    return (
        <TasksContext.Provider value={{
            tasks,
            setTasks,
            show_done,
            setShowDone
        }}>
            {children}
        </TasksContext.Provider>
    );
}
export default TasksProvider;

export const useTasks = () => {
    return useContext(TasksContext);
};
