'use strict';

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let answer = +prompt('Угадай число от 1 до 100');
function bot(){
  const a = randomInteger(1, 100);
  let m = 10;
  function bot2(){
    if (isNumber(answer) && answer !== 0){
      if (answer > a){
        m--;
        answer = +prompt('Загаданное число меньше, осталось попыток ' + m);
        if (m === 1) {
          answer = confirm('Попытки закончились, хотите сыграть еще?');
          if (answer === true) {
            answer = +prompt('Угадай число от 1 до 100');
            m = 10;
            return bot2();
          } else {
            return alert('Игра окончена');
          }
        }
        return bot2();
      } else if (answer < a && answer !== 0){
        m--;
        answer = +prompt('Загаданное число больше, осталось попыток ' + m);
        if (m === 1) {
          answer = confirm('Попытки закончились, хотите сыграть еще?');
          if (answer === true) {
            answer = +prompt('Угадай число от 1 до 100');
            m = 10;
            return bot2();
          } else {
            return alert('Игра окончена');
          }
        }
        return bot2();
      } else if (answer === a && answer !== 0){
        answer = confirm('Поздравляю, Вы угадали! Хотели бы сыграть еще?');
        if (answer === true) {
          answer = +prompt('Угадай число от 1 до 100');
          return bot2();
        } else {
          return alert('Игра окончена');
        }
      } else if (answer === 0) {
        return alert('Игра окончена');
      }
    } else if (answer === 0){
      alert('Введи число');
      answer = +prompt('Угадай число от 1 до 100');
      return bot(); 
    } else if (answer === 0){
      return alert('Игра окончена');
    }
  }  
  bot2();
}

bot();

