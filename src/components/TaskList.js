import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task.js';
import './TaskList.css';

const TaskList = (props) => {
  const taskComponents = props.tasks.map((task) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        isComplete={task.isComplete}
        completeCallback={props.completeCallback}
        deleteCallback={props.deleteCallback}
      />
    );
  });
  return <div>{taskComponents}</div>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  completeCallback: PropTypes.func.isRequired,
  deleteCallback: PropTypes.func.isRequired,
};

export default TaskList;
