import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = (props) => {
  //console.log(props); //object
  const flipMyComplete = () => {
    props.completeCallback(props.id);
  };

  const deleteMe = () => {
    props.deleteCallback(props.id);
  };

  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';
  return (
    <li className="tasks__item">
      <button
        className={`task__item__toggle ${buttonClass}`}
        onClick={flipMyComplete}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button" onClick={deleteMe}>
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  completeCallback: PropTypes.func.isRequired,
  deleteCallback: PropTypes.func.isRequired,
};

export default Task;
