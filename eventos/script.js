// Evento é uma ação que dispara quando acontecer algo especifico que você quiser
const inputName = document.forms.cadastro.name; // Dessa forma ele acessa o input selecionado mais facil
inputName.addEventListener('keyup', handleInputNameKeyUp);

const inputEmail = document.forms.cadastro.email;
inputEmail.addEventListener('change', handleInputEmailChange);

const btnSubmit = document.querySelector('[type="submit"]'); // Forma de selecionar com querySelector
btnSubmit.addEventListener('click', handleBtnSubmitClick);

function handleBtnSubmitClick(event) {
  event.preventDefault(); // Faz com que não envie essa página para outra e você pode manipular embaixo
  console.log(`Dados: ${inputName.value}, ${inputEmail.value}`);
}

function handleInputNameKeyUp(event) { // Recebe como argumento um evento
  console.log(event.target.value);
}

function handleInputEmailChange(event) { // Recebe como argumento um evento
  if (validateEmail(event.target.value)) {
    event.target.classList.remove("input-error");
  } else {
    event.target.classList.add("input-error");
  }
}



// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}