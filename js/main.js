/* Selecione todos os elementos com a classe "dúvids" */

const elementosDuvida = document.querySelectorAll(".duvida");

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    // Fecha as outras dúvidA
        elementosDuvida.forEach(function (outraDuvida) {
            if (outraDuvida !== duvida) {
              outraDuvida.classList.remove("ativa");
            }
        });
        // Abre a dúvida clicada
    duvida.classList.toggle("ativa");
  });
});
