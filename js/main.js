'use strict';

// function change(data){
//   if (typeof(data) !== 'string'){
//     console.log('введена не строка');
//   } else {
//     if ((data.trim()).length < 30){
//       console.log(data.trim());
//     } else {
//       let m = '';
//       m = data.trim();
//       console.log(m.substring(0,30) + '...');
//     }
//   }
// }
// let variable = change('     123456789123456789123456789123456789');

function change(data){
  if (typeof(data) !== 'string'){
    return 'введена не строка';
  } else {
    if ((data.trim()).length < 30){
      return data.trim();
    } else {
      let m = '';
      m = data.trim();
      return m.substring(0,30) + '...';
    }
  }
}
console.log(change('     123456789123456789123456789123456789'));