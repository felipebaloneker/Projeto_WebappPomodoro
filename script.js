var min = 25;
var sec = 0;
var minut; // valor inicial do min para reset
var second; // valor inicial do sec para reset
var minutes;
var cont = 0;
var string = document.getElementById('string');
var btnStart = document.getElementById('start');
var btnReset = document.getElementById('reset');
/* ---Ao clicar no botão Começar---*/
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

/* ---Contagem regressiva---*/
    /* Começando contagem*/
    function timerStart(){
      minut = min; // guardando valores iniciais
      second = sec;
      minutes = setInterval(function(){
          if(sec == 0){sec+=60;min-=1;}
          else if(min < 0){
            if(cont < 4){Pausa();}
            else{PausaLonga();}
          }
          else{sec-=1;string.innerHTML = `${min}:${sec}`;}
      },1000)
  }
  btnStart.addEventListener('click',Start);
    /* Pausando Contagem*/
    function timerStop(){clearInterval(minutes);}
    /* Resetando Contagem */
    function timerReset(){
      min = minut;
      sec = second;
      clearInterval(minutes);
      string.textContent = `${min}:${sec}`;      
      btnStart.textContent = 'Começar';}
    btnReset.addEventListener('click',timerReset)

/* Menus do app */
var btnPomodoro = document.getElementById('pomodoro');
var btnPausa = document.getElementById('pausa');
var btnPausal = document.getElementById('pausal');
    /* Pomodoro */
function Pomodoro(){
  min = 25;
  sec = 0;
  string.textContent = `${min}:${sec}`;
}
btnPomodoro.addEventListener('click',Pomodoro);
    /* Pausa */
function Pausa(){
  min = 5;
  sec = 0;
  string.textContent = `${min}:${sec}`;
  cont ++;
}
btnPausa.addEventListener('click',Pausa);
  /* Pausa Longa */
function PausaLonga(){
  min = 15;
  sec = 0;
  string.textContent = `${min}:${sec}`
}
btnPausal.addEventListener('click',PausaLonga);