'use strict'; /*jshint -W030*/ /* это убирает предупреждение хинта внизу для функций */
let lang = '',
matrix = [
  ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
],
namePerson = '';

lang = prompt('Введите значение ru или en');

if (lang === 'ru') {
  console.log('понедельник\nвторник\nсреда\nчетверг\nпятница\nсуббота\nвоскресенье');
} else {
  console.log('Monday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\nSunday');
}

switch(lang) {
  case 'ru':
    console.log('понедельник\nвторник\nсреда\nчетверг\nпятница\nсуббота\nвоскресенье');
    break;
  case 'en':
    console.log('Monday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\nSunday');
    break;
}

function ru(){
  for (let i = 0; i < 7; i++) {
    console.log(matrix[0][i]);
  }
}

function en(){
  for (let i = 0; i < 7; i++) {
    console.log(matrix[1][i]);
  } 
}

lang === 'ru' ? ru() : en(); 

namePerson = prompt('Введите имя');
namePerson === 'Артем' ? console.log('Директор') :
namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');
