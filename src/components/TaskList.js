import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task.js';
import './TaskList.css';

const TaskList = (props) => {
  const getTaskListJSX = (props) => {
    return props.tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          isComplete={task.isComplete}
          completeCallback={props.completeCallback}
          deleteCallback={props.deleteCallback}
        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(props)}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool,
      describe: PropTypes.string.isRequired,
    })
  ).isRequired,
  completeCallback: PropTypes.func.isRequired,
  deleteCallback: PropTypes.func.isRequired,
};

export default TaskList;
