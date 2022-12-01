import {reorder} from "../utils/tasks.tools";

const fetchTasks = async (done) => {
    return new Promise((resolve, reject) => {
        try {
            const tasks = JSON.parse(localStorage.getItem('@tasks'));
            const current = reorder(done ? tasks : tasks.filter(task => !task.done));

            if(current.length > 0){
                resolve(current);
            }
            reject('TasksNotFound');
        }
        catch (e) {
            reject(e);
        }
    });
}

const saveTasks = async (tasks, isDelete = false) => {
    return new Promise((resolve, reject) => {
        try {

            localStorage.setItem('@tasks', JSON.stringify(tasks));

            resolve(true);
        }
        catch (e) {
            reject(e);
        }
    });
}

export {fetchTasks, saveTasks};
