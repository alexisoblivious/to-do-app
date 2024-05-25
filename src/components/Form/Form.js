import { useState } from "react";
import { FaPlus } from 'react-icons/fa';

import './Form.scss';

function Form({ onAddTask }) {
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('open');
    const [errorMessage, setErrorMessage] = useState('');
    const [addingMessage, setAddingMessage] = useState(''); // Updated state

    const handleFormSubmission = async (event) => {
        event.preventDefault();
        if (description === '') {
            setErrorMessage('Enter a description.');
        } else {
            setAddingMessage('Loading...'); // Start with 'Loading...'
            await onAddTask(description, status);
            setAddingMessage('Done!'); // Then 'Done!'
    
            // Clear the message after a delay
            setTimeout(() => {
                setAddingMessage('');
            }, 1500);

            // Reset the form state
            setDescription('');
            setStatus('open');
            setErrorMessage('');
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleFormSubmission}>
                <h2>Add a new task:</h2>
                {errorMessage !== '' && (
                    <div className='error'>{errorMessage}</div>
                )}
                <div className="form-control">
                    <label>Description:</label>
                    <input
                        type='text'
                        maxLength={150}
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Status:</label>
                    <select
                        value={status}
                        onChange={(event) => setStatus(event.target.value)}
                    >
                        <option value='open'>Open</option>
                        <option value='completed'>Completed</option>
                    </select>
                </div>
                <div className="form-actions">
                    <button type="submit" disabled={addingMessage !== ''}><FaPlus />Add</button>
                    {addingMessage && <div className="loading-message">{addingMessage}</div>}
                </div>
            </form>
        </div>
    );
}

export default Form;
