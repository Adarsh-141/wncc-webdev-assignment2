import React, { useState } from 'react';

function CreateList() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(title, content, date);
        setTitle('');
        setContent('');
        setDate('');
    };
    
    const addTask = (title, content, date) => {
        setTasks([...tasks, { title, content, date }]);
    };
    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const editTask = (index) => {
        const newTitle = prompt("Edit title:", tasks[index].title);
        const newContent = prompt("Edit content:", tasks[index].content);
        const newDate = prompt("Edit date:", tasks[index].date);
        if (newTitle && newContent && newDate) {
            const newTasks = tasks.slice();
            newTasks[index] = { title: newTitle, content: newContent, date: newDate };
            setTasks(newTasks);
        }
    };
 
 const toggleTheme = () => {
    const element = document.body;
    element.dataset.bsTheme = element.dataset.bsTheme === "light" ? "dark" : "light";
};

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <button className="btn btn-secondary mb-3" onClick={toggleTheme}>
                Day/Night
            </button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Task Title"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Task Content"
                    required
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <div>
                            <strong>{task.title}</strong>
                            <p>{task.content}</p>
                            <p><em>{task.date}</em></p>
                        </div>
                        <div>
                            <button onClick={() => editTask(index)} className="editable">Edit</button>
                            <button onClick={() => deleteTask(index)} className="delete">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CreateList




