"use strict";

const botao = document.querySelector(".botao");

botao.addEventListener("click", function () {
  const number = document.querySelector(".numero").value;

  if (Number(number)) {
    document.querySelector(".resultado").textContent = `Resultado: ${
      Number(number) * 2
    }`;
  } else {
    document.querySelector(".resultado").textContent = "Isso não é um número!";
  }
});
