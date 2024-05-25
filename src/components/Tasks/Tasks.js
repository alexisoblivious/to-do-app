// import {useState} from 'react';
// import uuid from 'react-uuid';
import Task from './Task/Task';
import './Tasks.scss';
import { FaBrush } from 'react-icons/fa';

function Tasks({ tasks, onStatusChange, onTaskRemove, onClearTasks, isLoading }) {
    if (isLoading) {
        return <div className='load-message'>Loading tasks...</div>; // Display while loading
    }

    if (tasks.length === 0) {
        return <div className='load-message'>There are no tasks to display</div>; // Display if no tasks
    }

    // Render tasks if available
    return (
        <>
            <div className='tasks'>
                <h2>These are the tasks:</h2>
                {tasks.map((task, index) => (
                    <Task 
                        key={index}
                        task={task}
                        onStatusChange={onStatusChange}
                        onTaskRemove={onTaskRemove}
                    />
                ))}
                <hr />
                <button onClick={onClearTasks}><FaBrush />Clear Tasks</button>
            </div>
        </>
    );
}

export default Tasks;