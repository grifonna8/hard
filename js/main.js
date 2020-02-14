'use strict';


let day = new Date(),
    weekday = [],
    month = [],
    word, hour, date1, month1, hour1, minute1, sec1, check, timer;
weekday[0]="Воскресенье";
weekday[1]="Понедельник";
weekday[2]="Вторник";
weekday[3]="Среда";
weekday[4]="Четверг";
weekday[5]="Пятница";
weekday[6]="Суббота";

month[0]="Января";
month[1]="Февраля";
month[2]="Марта";
month[3]="Апреля";
month[4]="Мая";
month[5]="Июня";
month[6]="Июля";
month[7]="Августа";
month[8]="Сентября";
month[9]="Октября";
month[10]="Ноября";
month[11]="Декабря";

word = function(){
  if (day.getHours() === 0){
    hour = ' часов ';
    return hour;
  } else if (day.getHours() === 1 || day.getHours() === 21){
    hour = ' час '; 
    return hour;
  } else if ((day.getHours() >= 2 && day.getHours() <= 4) || (day.getHours() >= 22 && day.getHours() <= 23)){
    hour = ' часа ';
    return hour;
  } else if (day.getHours() >= 5 && day.getHours() <= 20){
    hour = ' часов ';
    return hour;
  }
};
document.write('Сегодня ' + weekday[day.getDay()] + ', ' + day.getDate() + ' ' + month[day.getMonth()] + ' ' + 
day.getFullYear() + ' года, ' + day.getHours() + word() + day.getMinutes() + ' минут ' + 
day.getSeconds() + ' секунд');

/* одна строчка кода, которая сразу выводит даты и время с нулями перед цифрами от 1-9 */
/* document.write('<br>' + day.toLocaleString()); */

check = function(){
  if (day.getDate() >=1 && day.getDate() <=9){
    date1 = '0' + day.getDate();
  } else {
    date1 = day.getDate();
  }
  if (day.getMonth() >=1 && day.getMonth() <=9){
    month1 = '0' + day.getMonth();
  } else {
    month1 = day.getMonth();
  } 
  if (day.getHours() >=1 && day.getHours() <=9){
    hour1 = '0' + day.getHours();
  } else {
    hour1 = day.getHours();
  } 
  if (day.getMinutes() >=1 && day.getMinutes() <=9){
    minute1 = '0' + day.getMinutes();
  } else {
    minute1 = day.getMinutes();
  } 
  if (day.getSeconds() >=1 && day.getSeconds() <=9){
    sec1 = '0' + day.getSeconds();
  } else {
    sec1 = day.getSeconds();
  } 
  return date1, month1, hour1, minute1, sec1;
};
check();

timer = setInterval(function() {
  document.write('<br>' + date1 + '.' + month1 + '.' + 
day.getFullYear() + ' - ' + hour1 + ':' + minute1 + ':' + sec1)
}, 1000);