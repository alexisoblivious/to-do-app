import { Route, Routes } from 'react-router-dom';

import { useEffect, useState } from "react";
// import uuid from "react-uuid";
import Header from "./components/Header/Header.js";
import Tasks from "./components/Tasks/Tasks";
import Form from "./components/Form/Form";
import HelpPage from './Pages/HelpPage/index.js';
import PageNotFound from './components/404NotFound/index.js';
import AddingTasks from './Pages/AddingTasksPage/index.js';
import RemovingTasks from './Pages/RemovingTasksPage/index.js';
import ChangingStatus from './Pages/ChangingStatusPage/index.js';

import * as database from './database';

import './App.scss';

export default function App() {
 const [tasks, setTasks] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
  useEffect(() => { 

    // IIFE - Immediately Invoked Function Expression
    (async () => {
      try{
         // Load the database      
      const data = await database.loadDatabase();
      console.log('Loaded data: ', data);
      setTasks(data);
      }catch (error){
        console.error("Error fetching tasks:", error);
      }
      setIsLoading(false); 
   
    })();
    // awaitFunc();
    // only needs an identifier if it will be called elsewhere in your code
    
  }, []);


 

  const handleClearTasks = async () => {
    await database.deleteAllTasks();
    setTasks([]);
  };

    const handleStatusChange = (id) => {
      const updatedTasks = [...tasks];
      updatedTasks.forEach((task) => {
        if (task.id === id) {
           task.done = !task.done;
        }
      });
      setTasks(updatedTasks);
    }

    const handleTaskRemove = async (id) => {
      await database.deleteTask(id);
      const filteredTasks = tasks.filter((task) => task.id !== id);
      setTasks(filteredTasks);
    };

      const handleAddTask = async (description, status) => {
        try {
          const newTask = {
            description,
            done: status === 'completed'
          };
          const savedTask = await database.save(newTask);
          setTasks([...tasks, savedTask]);
        } catch (error) {
          console.error('Error adding task:', error);
        }
      };
  return (
       <>
      <Header />
      <Routes>
      <Route path="/" element={<Tasks tasks={tasks} isLoading={isLoading} onStatusChange={handleStatusChange} onTaskRemove={handleTaskRemove} onClearTasks={handleClearTasks} />} />        <Route path="/add" element={<Form onAddTask={handleAddTask} />} />
        <Route path="/help" element={<HelpPage />}>
          <Route path="add" element={<AddingTasks />} />
          <Route path="remove" element={<RemovingTasks />} />
          <Route path="status" element={<ChangingStatus />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
      

    
  );
}

