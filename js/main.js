let money = 50000,
income = '10000',
addExpenses = 'Еда, съём, развлечения, интернет, животные',
deposit = true,
mission = 1000000,
period = 8,
budgetDay = null;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен', period, 'месяцев');
console.log('Цель заработать', mission, 'рублей');
console.log((addExpenses.toLowerCase()).split(', '));
budgetDay = money / 30;
console.log(budgetDay);
// alert("Она пытается в JS");