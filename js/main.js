'use strict';

let arr = ['2564', '4846', '88797', '49968996', '8966', '336', '97778979'];

for (let i = 0; i < 7; i++){
  let len, el, res = 0;
  len = arr[i].length;
  len--;
  el = +arr[i];
  res = Math.floor(el / (10 ** len));
  if (res === 2 || res === 4){
    console.log(arr[i]);
  }
}

let n = 100;

enumeration: /* создаем метку */
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j === 0){
      continue enumeration;
    }
  }

  console.log(i +':делители этого числа ' + 1 + ' и ' +i);
}