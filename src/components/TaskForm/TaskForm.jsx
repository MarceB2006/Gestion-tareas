import { useState, useEffect, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

function TaskForm({ task, onSave }) {
    const [title, setTitle] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.description : '');
    const titleInputRef = useRef(null);
    const descriptionInputRef = useRef(null);
    const minLength = 5;
    const maxLength = 100;

    useEffect(() => {
        if (!task && titleInputRef.current) {
            titleInputRef.current.focus();
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) {
            alert('Por favor, ingrese un título y una descripción.');
            return;
        }
        if (title.length < minLength || description.length < minLength) {
            alert(`El título y la descripción deben tener al menos ${minLength} caracteres.`);
            return;
        }
        if (title.length > maxLength || description.length > maxLength) {
            alert(`El título y la descripción no deben superar los ${maxLength} caracteres.`);
            return;
        }

        const allowedCharsRegex = /^[a-zA-Z0-9\s.,!?]*$/;
        if (!allowedCharsRegex.test(title) || !allowedCharsRegex.test(description)) {
            alert('Por favor, evite caracteres especiales en el título y la descripción.');
            return;
        }

        onSave({ ...task, title, description });
        setTitle('');
        setDescription('');
    };

    const handleTitleChange = (e) => {
        if (e.target.value.length <= maxLength) {
            setTitle(e.target.value);
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            descriptionInputRef.current.focus();
        }
    };

    const handleDescriptionChange = (e) => {
        if (e.target.value.length <= maxLength) {
            setDescription(e.target.value);
        }
    };

    return (
        <div className="card bg-white rounded-lg shadow-md p-6 w-full">
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder={`Título (Min ${minLength}, Max ${maxLength})`}
                    className="border p-2 mb-2 w-full rounded"
                    ref={titleInputRef}
                    onKeyDown={handleTitleChange}
                />
                <textarea
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder={`Descripción (Min ${minLength}, Max ${maxLength})`}
                    className="border p-2 mb-2 w-full rounded"
                    ref={descriptionInputRef}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded mr-2 flex items-center"
                >
                    <FaPlus className="mr-2" /> Agregar
                </button>
            </form>
        </div>
    );
}

export default TaskForm;