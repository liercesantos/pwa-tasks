import {reorder} from "../utils/tasks.tools";
import {apiGet, apiPost} from "../services/api";
import {firebase_auth} from "../services/firebase";

let isOnline = true;
if('serviceWorker' in navigator){
  isOnline = navigator.onLine;

  console.log(`You're in ${isOnline ? "online" : "offline"} mode...`);
}

const fetchTasks = async (done) => {
  try {
    let tasks = JSON.parse(localStorage.getItem('@tasks'));

    if(isOnline){
      console.log("TASKS", tasks);
      await syncTasks(tasks);

      if(tasks.length === 0){
        const response = await apiGet(`/${firebase_auth.currentUser.uid}/fetch`);
        if(response?.data && response.data instanceof Array){
          tasks = response.data.map((value, index) => {

            return {...value, delete: false}
          });

          localStorage.setItem('@tasks', JSON.stringify(tasks));
        }
      }
    }

    if(tasks.length > 0){
      const current = reorder(done ? tasks : tasks.filter(task => !task.done));
      return Promise.resolve(current);
    }

    return Promise.reject('TasksNotFound');
  }
  catch (e) {
    return Promise.reject(e);
  }
}

const saveTasks = async (tasks, syncing = true) => {
  try {
    const undeleted = tasks.filter(task => !task.delete);

    localStorage.setItem('@tasks', JSON.stringify(undeleted));

    if(isOnline && syncing){
      await syncTasks(tasks);
    }

    return Promise.resolve(undeleted);
  }
  catch (e) {
    return Promise.reject(e);
  }
}

const syncTasks = async (tasks) => {
  const data = {
    tasks: tasks,
    owner: firebase_auth.currentUser.uid
  }

  return await apiPost('/sync', data);
}

export {fetchTasks, saveTasks};
