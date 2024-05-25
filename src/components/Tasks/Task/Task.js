// Task.js
import './Task.scss';
import { FaTrashAlt, FaToggleOn, FaToggleOff } from 'react-icons/fa';

function Task(props) {
    const handleStatusClick = () => {
        const id = props.task.id;
        props.onStatusChange(id);
    }

    const handleRemoveClick = () => {
        const id = props.task.id;
        props.onTaskRemove(id);
    }

    return (
        <div className="task">
            <h3>{props.task.description}</h3>
            <hr />
            <div>Id: {props.task.id}</div>
            <div className="status">
                Status: {props.task.done
                    ? <span className="completed-text">Completed</span>
                    : 'Open'}
            </div>
            <div className='buttons'>
                <button onClick={handleStatusClick}>
                    {props.task.done
                        ? <FaToggleOn />
                        : <FaToggleOff />}
                    Change Status
                </button>
                <button onClick={handleRemoveClick}>
                    <FaTrashAlt />
                    Remove Task
                </button>
            </div>
        </div>
    );
}

export default Task;