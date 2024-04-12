import React, { useState, useContext } from 'react';
import { AdvertisementContext } from '../context/AdvertisementContext';

function Advertisement({ ad }) {
  const { updateAdvertisement, removeAdvertisement } = useContext(AdvertisementContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(ad.title);
  const [editedDescription, setEditedDescription] = useState(ad.description);

  const handleUpdate = () => {
    updateAdvertisement({ id: ad.id, title: editedTitle, description: editedDescription });
    setIsEditing(false); // Выход из режима редактирования после сохранения изменений
  };

  const handleEdit = () => {
    setIsEditing(true); // Переход в режим редактирования
  };

  const handleDelete = () => {
    removeAdvertisement(ad.id); // Удаление объявления
  };
  console.log(isEditing);

  // Если компонент находится в режиме редактирования, отобразить форму
  if (isEditing) {
    return (
      <div>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        ></textarea>
        <button onClick={handleUpdate}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  // Отображение обычного режима просмотра для объявления
  return (
    <div>
      <h2>{ad.title}</h2>
      <p>{ad.description}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Advertisement;
