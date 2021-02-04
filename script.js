var active = false;
var timer = {};
var min = 24;
var sec = 59;
var minutes;
var string = document.getElementById('string');
var btnStart = document.getElementById('start');
/* Ao clicar no botão Começar */
function Start(){
  /* Trocando texto do botão ao clicar */
  if(btnStart.textContent === 'Começar'){
    btnStart.textContent = 'Pausar';
    timerStart();
  }
  else{
    btnStart.textContent = 'Começar';
    timerStop();
  }
}
  /* Começando contagem*/
  function timerStart(){
    if(active) return;
    active = true;
    minutes = setInterval(function second(){
        if(sec == 0){sec+=59;min-=1;}
        else if(sec == 0 && min == 0){clearInterval}
        else{sec-=1;string.textContent = `${min}:${sec}`;}
    },1000)
}
  /* Pausando Contagem*/
  function timerStop(){clearInterval(minutes);}
btnStart.addEventListener('click',Start);