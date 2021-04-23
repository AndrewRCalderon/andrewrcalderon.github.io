// const myImage = document.querySelector('img');

// myImage.onclick = function(){
//   const mySrc = myImage.getAttribute('src');
//   if(mySrc === 'images/happy-penguin.png') {
//     myImage.setAttribute('src', 'images/sad-penguin.jpeg') 
//   } else {
//     myImage.setAttribute('src', 'images/happy-penguin.png')
//   }
// };

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