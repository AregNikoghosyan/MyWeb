import EN from '../../assets/translations/en';
import RU from '../../assets/translations/ru';
import AM from '../../assets/translations/am';

const getTranslations = shortCode => {
  switch (shortCode) {
    case 'ru': return RU;
    case 'hy': return AM;
    default: return EN;
  } 
};

class Languages {
  static get ShortCode() { return window.localStorage.getItem('language') || 'en'; }
  static get Translations() { return getTranslations(Languages.ShortCode); }
}

export default Languages;