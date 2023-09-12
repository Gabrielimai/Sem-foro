const imagem = document.querySelector('#img');
const btnVermelho = document.querySelector('#red');
const btnAmarelo = document.querySelector('#yellow');
const btnVerde = document.querySelector('#green');
const btnAlto = document.querySelector('#automatic');

function changeLightRed() {
  imagem.src = './img/vermelho.png';
}

function changeLightYellow() {
  imagem.src = './img/amarelo.png';
}

function changeLightGreen() {
  imagem.src = './img/verde.png';
}

let intervalId; 

function changeLightAutomatic() {
  const pictures = [
    './img/vermelho.png',
    './img/amarelo.png',
    './img/verde.png',
  ];
  let currentIndex = 0;

  const imagem = document.querySelector('#img');

  if (intervalId) {
   
    clearInterval(intervalId);
    intervalId = null;
  } else {
   
    intervalId = setInterval(() => {
      imagem.src = pictures[currentIndex];
      currentIndex = (currentIndex + 1) % pictures.length;
    }, 1000);
  }
}


btnVermelho.addEventListener('click', changeLightRed);
btnAmarelo.addEventListener('click', changeLightYellow);
btnVerde.addEventListener('click', changeLightGreen);
btnAlto.addEventListener('click', changeLightAutomatic);
