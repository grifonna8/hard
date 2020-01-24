let num = 266219,
numArr = [],
multiply = 1,
exponentiation = 1,
multiplyTripple = 0;

numArr = String(num).split('');
for (let i = 0; i < numArr.length; i++){
  numArr[i] = Number.parseInt(numArr[i]);
}
for (let i = 0; i < numArr.length; i++){
  multiply *= numArr[i]; 
}
console.log(multiply);
multiplyTripple = multiply ** 3;
console.log(multiplyTripple);

numArr = String(multiplyTripple).split('');
for (let i = 0; i < 2; i++){
  numArr[i] = Number.parseInt(numArr[i]);
  console.log(numArr[i]);
}