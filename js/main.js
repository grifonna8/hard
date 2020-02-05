'use strict';

let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
const nowTime = (new Date().getDay() - 1);
console.log(nowTime);
  for (let i = 0; i < week.length; i++){
    let div = document.createElement('div');
/*     console.log(nowTime.getDay()); */
    if (week[i] !== 'суббота' && week[i] !== 'воскресенье'){
      div.innerHTML = week[i];
      document.body.append(div);
    } else {
      div.innerHTML ='<i>' + week[i] + '</i>';
      document.body.append(div);
    }
    if (i === nowTime && nowTime !== 0){
      div.innerHTML ='<b>' + week[i] + '</b>';
      document.body.append(div);
    } else if (nowTime === 0) {
      div.innerHTML ='<b>' + week[6] + '</b>';
      document.body.append(div);
    }
}