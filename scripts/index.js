const myHeading = document.querySelector("container-tagline");

function setUserName() {
  const myName = prompt("Would you mind sharing your name?");

  if (!myName === "" || !myName === null) {
    localStorage.setItem("name", myName);
    myHeading.textContent = "¡Hola, " + myName + "!";
  } else {
    myHeading.textContent = "¡Hola!";
  }
}

// Memory
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = "¡Hola, " + storedName + "!";
}
