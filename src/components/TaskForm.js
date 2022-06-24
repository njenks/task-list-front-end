import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const defaultTask = {
  title: '',
  description: '',
  isComplete: false,
};

const TaskForm = (props) => {
  const [taskData, setTaskData] = useState(defaultTask);

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;
    console.log(stateName);
    console.log(inputValue);

    const newTaskData = { ...taskData };
    newTaskData[stateName] = inputValue;

    setTaskData(newTaskData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.taskCallback(taskData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={taskData.title}
        onChange={onFormChange}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        value={taskData.description}
        onChange={onFormChange}
      />
      <input type="submit" value="Add Task!"></input>
    </form>
  );
};

TaskForm.propTypes = {
  taskCallback: PropTypes.func,
};

export default TaskForm;
