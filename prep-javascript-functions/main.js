function addTwoNumbers(num1, num2){
  return num1 + num2;
}
var sumof2nums = addTwoNumbers(7, 8);
console.log(sumof2nums);

function convertHoursToMinutes(hours){
  return hours * 60;
}
var hrs2mins = convertHoursToMinutes(5);
console.log(hrs2mins);

function getGreeting(name){
  return name + ' birthday!';
}
var greeting = getGreeting('Happy');
console.log(greeting);

function addAndMultiplyBy5(num1, num2){
  return (num1 + num2) * 5
}
var addandmultiplyoutcome = addAndMultiplyBy5(10, 5);
console.log(addandmultiplyoutcome);

function multiplyAndDivideBy5(num1, num2){
  return (num1 * num2) / 5
}
var multiplyanddivideoutcome = multiplyAndDivideBy5(35, 10);
console.log(multiplyanddivideoutcome)

function subtractTwoNumbers(num1, num2){
  return num1 - num2;
}
var differenceof2nums = subtractTwoNumbers(22, 7);
console.log(differenceof2nums);

function getCircleCircumference(radius){
  return (radius * 3.14) * 2;
}
var circumferenceresult = getCircleCircumference(5);
console.log(circumferenceresult);

function getFullName(firstName, lastName){
  return firstName + ' ' + lastName
}
var fullName = getFullName('Vincent', 'Lopez');
console.log(fullName);

function getCube(number){
  return number * number * number
}
var cuberesult = getCube(5);
console.log(cuberesult);
