const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", event => {
  event.preventDefault();

  /* Fazer o formulário dizer não-não (vibrar) caso haja campos vazios. */

  const fields = [...document.querySelectorAll(".input-block input")];
  fields.forEach((field) => {
    if (field.value === "")
      form.classList.add("validate-error");
  });
  const formError = document.querySelector(".validate-error");
  if (formError) {
    formError.addEventListener("animationend", (event) => {
      if (event.animationName === "nono") {
        formError.classList.remove("validate-error");
      }
    });
    return;
  }

  form.classList.add("form-hide");
});

form.addEventListener("animationstart", (event) => {
  if (event.animationName === "down") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

form.addEventListener("animationend", (event) => {
  if (event.animationName === "down") {
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none";
  }
});
