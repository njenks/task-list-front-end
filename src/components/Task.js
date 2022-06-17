import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {

  const flipComplete = () => {
    props.completeCallback(props.id);
  };

  return (
    <div>
      <h2 className="tasks__item"> {props.title} </h2>
      <ul>
        <li> {props.isComplete? 'tasks__item__toggle--completed' : 'tasks__item__toggle'} </li>
        <button
          //className={`tasks__item__toggle ${buttonClass}`}
          onClick={flipComplete}> Change Task </button>
          {/* <button className="tasks__item__remove button">x</button>
        </li> */}
      </ul>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;
