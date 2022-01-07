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










