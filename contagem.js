let contador = 0;
let contagem;

function pegaDados() {
  let h = document.getElementsByTagName("h1")[0];
  h.innerHTML += " " + contador;
  contador++;
}

function iniciar() {
  contagem = setInterval(pegaDados, 3000);
}

function parar() {
  clearInterval(contagem);
}
