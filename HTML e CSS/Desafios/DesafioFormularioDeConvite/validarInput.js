const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  form.classList.add("form-submitted");

  if (form.checkValidity()) {
    alert("Sucesso! O formulário foi enviado.");
  } else {
    const primeiroErro = form.querySelector(":invalid");
    if (primeiroErro) primeiroErro.focus();
  }
});
