import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react'; 
import axios from 'axios'; 

function App() {
  const [tasks, setTasks] = useState([]); 

  const URL = 'http://localhost:5000/tasks'; 

  useEffect(() => { 
    axios.get(URL)
    .then((response) => { 
      const updatedTasks = response.data.map((task)=> { 
        return { 
          id: task.id, 
          title: task.title, 
          isComplete: task.isComplete
        };
      });
      setTasks(updatedTasks); 
    })
    .catch((err) => { 
      console.log(err); 
    });
  }, []); 


  const flipComplete = (id) => {
    axios 
      .patch(`${URL}/${id}/mark_complete`)
      .then (() => { 
        const updatedTasks = [];
        for (const task of tasks) {
          const newTask = {...task}; 
          if (newTask.id === id) {
            newTask.isComplete = !newTask.isComplete;
          }
          updatedTasks.push(newTask);
        }
        setTasks(updatedTasks);
      })
      .catch((err) => { 
        console.log(err); 
      }); 
  }; 

  const deleteTask = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then(() => {
        const updatedTasks = [];
        for (const task of tasks) {
        if (task.id !== id) {
          updatedTasks.push(task);
        }
      }
      setTasks(updatedTasks);
    })
    .catch((err) => { 
      console.log(err);
    }); 
  }; 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={tasks}
            completeCallback={flipComplete}
            deleteCallback={deleteTask}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
