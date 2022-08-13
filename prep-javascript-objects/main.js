var person = {
  firstName: 'Chivy',
  lastName: 'Chia',
  hobby: 'sleep'
};
console.log('firstName:', person.firstName, 'lastName:', person.lastName, 'hobby:', person.hobby);

var fullName = person.firstName + ' ' + person.lastName;
console.log("the person's name is:", fullName + '.');

person.job = 'Teacher';
console.log("The person's current job is:" + person.job + '.');

person.previousJob = 'Student';
console.log("The person's previous job is:" + person.previousJob + '.');

console.log('the complete person object:', person);
