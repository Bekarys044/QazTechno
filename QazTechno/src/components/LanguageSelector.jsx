import { useTranslation } from 'react-i18next';
import React from 'react';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = ['en', 'ru', 'kk'];

  const changeLanguage = () => {
    const currentLang = i18n.language;
    const currentIndex = languages.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLang = languages[nextIndex];
    i18n.changeLanguage(nextLang);
  };

  const getLanguageName = (lng) => {
    switch (lng) {
      case 'ru': return 'Рус';
      case 'en': return 'Eng';
      case 'kk': return 'Қаз';
      default: return lng;
    }
  };

  return (
    <button className='btn-primary' onClick={changeLanguage}>
      {getLanguageName(i18n.language)}
    </button>
  );
};

export default LanguageSelector;
