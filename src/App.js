import React from "react";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Main from "./pages/main";
import GuardProvider from "./contexts/GuardContext";
import TasksProvider from "./contexts/TasksContext";

function App() {

  return (
    <GuardProvider>
      <TasksProvider>
        <Main />
        <ToastContainer theme={"colored"} autoClose={2500} />
      </TasksProvider>
    </GuardProvider>
  );
}

export default App;
