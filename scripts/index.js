const myButton = document.querySelector('button');
const myHeading = document.querySelector('h2');

function setUserName() {
  const myName = prompt("Would you mind sharing your name?");
  localStorage.setItem('name', myName);
  myHeading.textContent = '¡Hola, ' + myName + '!';
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = '¡Hola, ' + storedName + '!'
}


myButton.onclick = function() {
  setUserName()
}





// for (let i  = 0; i < 10; i++) {
//   console.log(i)
// }

// array.forEach(element => {
  
// });
// const x = 11
// const color = x > 10 ? 'red' : 'blue'

// switch(color) {
//   case "red": 
//   console.log('color is red');
//     break;
//   case "blue":
//     console.log("color is blue")
//     break;
//   default:
//     console.log('color is not blue')
// }

// function addNums(num1, num2) {
//   return num1 + num2

// }

// console.log(addNums(5,4))

// const addNums2 = (num1, num2) => {
//   return (num1 + num2) * 10
// }

// console.log(addNums2(5,5))

// constructor function

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);

// }

// add methods to prototype of object

// Person.prototype.getBirthYear = function() {
//   this.getBirthYear = function() {
//     return this.dob.getFullYear();
//   }
// }

// const person1 = new Person("mary", 'smith', '3-6-1991')

// console.log(person1)

// class

// class Person {
//   constructor(firstName, lastName, dob) {
  
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);

//   }

//   getBirthYear() {

//   return this.dob.getFullYear()

//   }
// }

// const person2 = new Person("maria", 'smitina', '6-3-1991')

// console.log(person2)




