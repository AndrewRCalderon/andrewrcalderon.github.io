for (let i  = 0; i < 10; i++) {
  console.log(i)
}



const myButton = document.querySelector('button');
const myHeading = document.querySelector('h2');

function setUserName() {
  const myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello, ' + myName + '!';
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello, ' + storedName + '!'
}


myButton.onclick = function() {
  setUserName()
}



