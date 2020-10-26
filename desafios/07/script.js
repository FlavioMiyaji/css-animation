const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", event => {
  event.preventDefault();
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

/* Criar alguns quadrados animados (que fiquem girando) e que saem de baixo da tela (fora do campo de visão) e vão para cima da tela (que saia do campo de visão também). */

const ulSquares = document.querySelector("ul.squares");
const random = (min, max) => (Math.random() * (max - min) + min);
for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");

  const size = Math.floor(random(10, 120));
  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;

  const position = random(1, 99);
  li.style.left = `${position}%`;

  const delay = random(5, 0.1);
  li.style.animationDelay = `${delay}s`;

  const duration = random(24, 12);
  li.style.animationDuration = `${duration}s`;

  li.style.animationTimingFunction = `cubic-bezier(${random(0, 1)}, ${random(0, 1)}, ${random(0, 1)}, ${random(0, 1)})`;

  ulSquares.appendChild(li);
}
