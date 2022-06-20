import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Mow the lawn',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Cook Pasta',
      isComplete: true,
    },
  ]);

  const flipComplete = (id) => {
    const updatedTasks = [];
    for (const task of tasks) {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      updatedTasks.push(task);
    }
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = [];
    for (const task of tasks) {
      if (task.id !== id) {
        updatedTasks.push(task);
      }
    }
    setTasks(updatedTasks);
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
