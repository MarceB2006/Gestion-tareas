import { useState } from 'react';

function TaskForm({ task, onSave }) {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert('Por favor, ingrese un título y una descripción.');
      return;
    }

    const allowedCharsRegex = /^[a-zA-Z0-9\s.,!?]*$/;

    if (!allowedCharsRegex.test(title) || !allowedCharsRegex.test(description)) {
      alert('Por favor, evite caracteres especiales en el título y la descripción.');
      return;
    }

    onSave({ ...task, title, description });
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Título"
        className="border p-2 mb-2 w-full"
      />
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Descripción"
        className="border p-2 mb-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mr-2">Guardar</button>
    </form>
  );
}

export default TaskForm;