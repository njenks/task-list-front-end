import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';


const Task = (props) => {
  //console.log(props); //object
  const flipMyComplete = () => {
    props.completeCallback(props.id);
  };

  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';
  return (
    <div>
      <ul>
        <li className="tasks__item" > </li>
          <button
            className={buttonClass}
            onClick={flipMyComplete}
          >
            {props.title}
          </button>
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
  completeCallback: PropTypes.func.isRequired,
};

export default Task;
