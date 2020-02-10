import './styles.css';
import mainArray from './menu-jason.json';
import foodList from './menu.hbs';
const refs = {
  mainRef: document.querySelector('.js-menu'),
  bodyRef: document.querySelector('body'),
  buttonSelector: document.querySelector('.js-switch-input'),
};
const markup = foodList(mainArray);
refs.mainRef.insertAdjacentHTML('afterbegin', markup);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
function defaultTheme() {
  // проверка начальной темы при загрузки страницы
  if (localStorage.getItem('theme') === Theme.LIGHT) {
    refs.bodyRef.classList.add(Theme.LIGHT);
    refs.buttonSelector.checked = false;
  } else if (localStorage.getItem('theme') === Theme.DARK) {
    refs.bodyRef.classList.add(Theme.DARK);
    refs.buttonSelector.checked = true;
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.bodyRef.classList.add(Theme.LIGHT);
  }
}
defaultTheme();
refs.bodyRef.addEventListener('click', onClick);
function onClick(e) {
  //Проверка true/false  кнопки
  if (refs.buttonSelector.checked) {
    refs.bodyRef.classList.remove(Theme.LIGHT);
    refs.bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.bodyRef.classList.remove(Theme.DARK);
    refs.bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
