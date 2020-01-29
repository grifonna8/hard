'use strict';

function change(data){
  if (typeof(data) !== 'string'){
    console.log('введена не строка');
  } else if (typeof(data) === 'string' && data.length < 30){
    console.log(data.trim());
  } else if(typeof(data) === 'string' && data.length >= 30){
    console.log(data.substring(0,30) + '...');
  }
}
let variable = change('123456789123456789123456789123456789');