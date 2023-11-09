import React, { useState } from 'react';
import { Breadcrumbs } from '../../AbstractElements';
import { MainChangeLetter } from '../../locales/MainTranslations';
import { saveDataToJSON } from './server';
import { useTranslation } from 'react-i18next';

export default function JsonSave() {
  const [formData, setFormData] = useState({});
  const [fileName, setFileName] = useState('');
  const { t } = useTranslation();

  function handleInputChange(e, title) {
    const inputValue = e.target.value;
    setFormData({ ...formData, [title]: inputValue.charAt(0).toUpperCase() + inputValue.slice(1) });
  }

  function handleFileNameChange(e) {
    setFileName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveDataToJSON(formData, fileName);
    setFormData({});
    setFileName('');
  }

  return (
    <div>
      <Breadcrumbs mainTitle='Settings' parent='Settings' title='Add Language' />
      <form onSubmit={handleSubmit} className='p-2'>
        <input className='form-control w-50 border border-secondary' type='text' placeholder={t('Country Code')} value={fileName} onChange={handleFileNameChange} />
        {MainChangeLetter.map((letter, index) => (
          <div key={index}>
            <p className='m-0'>{t(letter)}</p>
            <input className='form-control w-50 border border-secondary' type='text' name={letter} value={formData[letter] || ''} onChange={(e) => handleInputChange(e, letter)} />
          </div>
        ))}
        <button type='submit' className='btn btn-outline-primary mt-2'>
          {t('Add Language')}
        </button>
      </form>
    </div>
  );
}
