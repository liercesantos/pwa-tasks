import {fetchTasks, saveTasks} from "../repositories/tasks";
import {useTasks} from "../contexts/TasksContext";
import {reorder} from "../utils/tasks.tools";
import {toast} from "react-toastify";
import analytics from "../services/firebase/analytics";
import {uuidv4} from "../utils/generals.tools";

class TasksControl {
    context = useTasks();

    addTask(data) {
        const {tasks} = this.context;

        const ordered = reorder(tasks, "id");
        const id = (tasks.length === 0) ? 1 : ordered[ordered.length - 1]['id'] + 1;
        const uid = uuidv4();
        const task = {...data, id: id, uid: uid, delete: false};

        tasks.push(task);
        saveTasks(tasks).then(() => {
            this.handleTasks();
            analytics('new_task_created', task.title);
            toast.success("Tarefa adicionada!");
        }).catch(err => console.log(err));
    }

    handleTasks(show_done = false) {
        const {setTasks} = this.context;
        fetchTasks(show_done).then(response => {
            setTasks(response);
        }).catch(err => {
            setTasks([]);
            //console.log(err);
        })
    }

    handleCheck(task, index) {
        const {tasks, setTasks} = this.context;
        task.checked = !task.checked;
        tasks[index] = task;

        const to_save = this.prepareChecked(task);
        saveTasks(to_save, false).then(response => {
            setTasks(tasks);
        }).catch(err => console.log(err));
    }

    handleDone(task, index) {
        const {tasks, show_done} = this.context;
        task.done = !task.done;
        tasks[index] = task;
        const to_save = this.prepareDone(task);

        saveTasks(to_save).then(() => {
            this.handleTasks(show_done);
            analytics(task.done ? 'task_done' : 'task_undone', task.title);
            if(task.done) toast.success("Tarefa concluída!");
        }).catch(err => console.log(err));
    }

    prepareDone(task){
        const storage = JSON.parse(localStorage.getItem('@tasks'));
        return Object.entries(storage).reduce((current, [id, row]) => {
            if (row.uid === task.uid) {
                row.done = task.done;
            }
            current.push(row);
            return current;
        }, []);
    }

    prepareChecked(task){
        const storage = JSON.parse(localStorage.getItem('@tasks'));
        return Object.entries(storage).reduce((current, [id, row]) => {
            if (row.uid === task.uid) {
                row.checked = task.checked;
            }
            current.push(row);
            return current;
        }, []);
    }

    handleDelete() {
        const {setTasks} = this.context;
        const toDelete = this.prepareDelete();

        saveTasks(toDelete).then(response => {
            setTasks(response);
            //this.handleTasks();
            analytics('task_deleted');
            toast.success("Tarefa removida!");
        }).catch(err => console.log(err));
    }

    prepareDelete(){
        const storage = JSON.parse(localStorage.getItem('@tasks'));

        return Object.entries(storage).reduce((current, [id, row]) => {
            if (row.checked) {
                row.delete = true;
            }
            current.push(row);
            return current;
        }, []);
    }
}
export default TasksControl;
