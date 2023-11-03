import React, { useState } from 'react';
import { MainChangeLetter } from '../../locales/MainTranslations';
import { saveDataToJSON } from './server';

export default function JsonSave() {
  const [formData, setFormData] = useState({});
  const [fileName, setFileName] = useState('');

  function handleInputChange(e, title) {
    setFormData({ ...formData, [title]: e.target.value });
  }

  function handleFileNameChange(e) {
    setFileName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Fayl nomi va ma'lumotlarni saqlash
    saveDataToJSON(formData, fileName); // folderPath ni qo'shing

    // Formani tozalash
    setFormData({});
    setFileName('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='form-control w-50'
          type='text'
          placeholder='Fayl nomi'
          value={fileName}
          onChange={handleFileNameChange}
        />
        {MainChangeLetter.map((letter, index) => (
          <div key={index}>
            <p>{letter}</p>
            <input
              className='form-control w-50'
              type='text'
              name={letter}
              value={formData[letter] || ''}
              onChange={(e) => handleInputChange(e, letter)}
            />
          </div>
        ))}
        <input type='submit' className='btn btn-primary mt-2' value='JSON Faylni saqlash' />
      </form>
    </div>
  );
}
