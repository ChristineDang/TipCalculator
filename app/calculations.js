const bill = prompt('enter bill amount');
const tip = prompt('enter tip amount in decimal form');

const calculation = parseFloat(bill) * parseFloat(tip);
const total = parseFloat(calculation) + parseFloat(bill);

console.log(`your bill total is ${bill} and your tip amount is ${calculation}. Therefore your total is ${total}`);