function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreetings(name) {
  return 'Hello ' + name + '!';
}
var greetings = getGreetings('world');
console.log(greetings);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var result = addAndMultiplyBy5(10, 5);
console.log(result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var result1 = multiplyAndDivideBy5(35, 10);
console.log(result1);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var result2 = subtractTwoNumbers(22, 7);
console.log(result2);

function getCircleCircumference(radius) {
  return (2 * Math.PI) * radius;
}
var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var name = getFullName('Juan', 'Ramirez');
console.log(name);

function cube(number) {
  return number * number * number;
}
var result3 = cube(5);
console.log(result3);
