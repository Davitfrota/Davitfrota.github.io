import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n, { changeLanguage } from 'i18next';



i18n.init({
  interpolation: { escapeValue: false }, // opcional, se você precisar de escape chars
  lng: localStorage.getItem('language') || 'en', // idioma padrão
  resources: {
    en: {
      translation: require('../src/data/en.json'),
    },
    pt: {
      translation: require('../src/data/pt.json'),
    },
  },
});


// const idiomaNavegador = window.navigator.language;
//   if(idiomaNavegador === 'pt-BR'){
//     i18n.changeLanguage('pt')
//   }
//   else{
//     i18n.changeLanguage('en');
//   }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
  </React.StrictMode>
);
