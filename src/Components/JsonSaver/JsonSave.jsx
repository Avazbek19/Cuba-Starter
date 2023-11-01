import React, { useState } from 'react';
import { MainChangeLetter } from '../../locales/MainTranslations';

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

    // Fayl nomini olish
    const defaultFileName = 'defaultFileName'; // Agar fayl nomi kiritilmagan bo'lsa, 'defaultFileName' ishlatiladi
    const finalFileName = fileName || defaultFileName;

    // Faylni saqlash funksiyasini chaqiring

    // Formani tozalash
    setFormData({});
    setFileName('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Fayl nomi"
          value={fileName}
          onChange={handleFileNameChange}
        />
        {MainChangeLetter.map((letter, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`${letter}-tarchimasi`}
              name={letter}
              value={formData[letter] || ''}
              onChange={(e) => handleInputChange(e, letter)}
            />
          </div>
        ))}
        <input type="submit" value="JSON Faylni saqlash" />
      </form>
    </div>
  );
}
