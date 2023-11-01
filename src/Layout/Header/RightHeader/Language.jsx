import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { English, Russian } from '../../../Constant';

const Language = () => {
  const [langdropdown, setLangdropdown] = useState(false);
  const [selected, setSelected] = useState('en');
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelected(lng);
  };
  const LanguageSelection = (language) => {
    if (language) {
      setLangdropdown(!language);
    } else {
      setLangdropdown(!language);
    }
  };

  return (
    <li className='language-nav'>
      <div className={`translate_wrapper ${langdropdown ? 'active' : ''}`}>
        <div className='current_lang'>
          <div className='lang' onClick={() => LanguageSelection(langdropdown)}>
            <i className={`flag-icon flag-icon-${selected === 'en' ? 'us' : selected === 'du' ? 'de' : selected}`}></i>
            <span className='lang-txt'>{selected}</span>
          </div>
        </div>
        <div className={`more_lang ${langdropdown ? 'active' : ''}`}>
          <div className='lang' onClick={() => changeLanguage('en')}>
            <i className='flag-icon flag-icon-us'></i>
            <span className='lang-txt'>
              English
              <span> {'(US)'}</span>
            </span>
          </div>
          <div className='lang' onClick={() => changeLanguage('ru')}>
          <i className='flag-icon flag-icon-ru'></i>
            <span className='lang-txt'>
              Russian
              <span> {'(RU)'}</span>
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Language;
