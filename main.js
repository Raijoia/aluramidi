function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  // se elemento for true (tiver elemento) e for do type audio
  if (elemento && elemento.localName === 'audio') {
    elemento.play()
  } else {
    console.log("Elemento não encontrado ou seletor inválido")
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
  // pegando o botão
  const tecla = listaDeTeclas[i];

  // pegando o nome da segunda classe de cada botão
  const instrumento = tecla.classList[1];

  // pegando o id de cada audio com o nome da segunda classe de cada botão
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () { // função anonima
    tocaSom(idAudio)
  }

  // acessibilidade
  // parâmetro da função retorna a tecla clicada
  tecla.onkeydown = function (e) {
    // se o código da tecla clicada for igual
    if (e.code === "Enter" || e.code === "Space") {
      // não precisa colocar ponto antes de digitar a classe pois já estamos mexendo com classes
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}

// Fazendo o onclick direto no JS ao invés de fazer no html
// document.querySelector(".tecla_pom").onclick = tocaSomPom