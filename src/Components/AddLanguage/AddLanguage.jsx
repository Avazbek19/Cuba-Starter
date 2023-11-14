import React, { useState } from 'react';
import { toast } from "react-toastify";
import { Breadcrumbs, Btn } from '../../AbstractElements';
import { MainChangeLetter } from '../../locales/MainTranslations';
import { saveDataToJSON } from './server';
import { useTranslation } from 'react-i18next';

export default function JsonSave() {
  const [formData, setFormData] = useState({});
  const [fileName, setFileName] = useState('');
  const { t } = useTranslation();

  const autoclosetoaster = (toastname) => {
    switch (toastname) {
      case "autoclose1Toast":
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 15000,
        });
        break;
      case "autoclose2Toast":
        toast.info("Info Notification !", {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 5000,
        });
        break;
      case "autoclose3Toast":
        toast.success("New Language Added !", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
        break;
      case "autoclose4Toast":
        toast.error("Danger Notification !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 500,
        });
        break;
      default:
        break;
    }
  };

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
        <Btn attrBtn={{ className: "mt-2", name: "autoclose3Toast", color: "success",type: "submit" , onClick: (e) => autoclosetoaster(e.target.name)}}>{t('Add Language')}</Btn>
      </form>
    </div>
  );
}
