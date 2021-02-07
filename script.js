var min = 0;
var sec = 0;
var minut; // valor inicial do min para reset
var second; // valor inicial do sec para reset
var minutes;
var cont = 0;
var mensage;
var string = document.getElementById('string');
var btnStart = document.getElementById('start');
var btnReset = document.getElementById('reset');
var pgPrinc = document.getElementById('pg-princ');
document.load = Pomodoro();
/* ---Ao clicar no botão Começar---*/
function Start(){
  /* Trocando texto do botão ao clicar */
  if(btnStart.textContent === 'Iniciar'){
    btnStart.textContent = 'Pausar';
    timerStart();
  }
  else{
    btnStart.textContent = 'Iniciar';
    timerStop();
  }
}
/* ---Contagem regressiva---*/
    /* Começando contagem*/
    function timerStart(){
      minutes = setInterval(function(){
          if(sec == 0){sec+=60;min-=1;}
          else if(min < 0){Notify();}
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
      string.textContent = `${min}:${sec}0`;      
      btnStart.textContent = 'Iniciar';}
    btnReset.addEventListener('click',timerReset)

/* Menus do app */
var btnMenu = document.querySelectorAll('.btn-menu');
    /* Pomodoro */
function Pomodoro(){
  min = 25;
  sec = 0;
  minut = min; // guardando valores iniciais
  second = sec;
  string.textContent = `${min}:${sec}0`;
  pgPrinc.style.background = '#C94040';
  mensage = 'Faça uma pausa!';
}
btnMenu[0].addEventListener('click',Pomodoro);
    /* Pausa */
function Pausa(){
  min = 5;
  sec = 0;
  minut = min; 
  second = sec;
  string.textContent = `0${min}:${sec}0`;
  pgPrinc.style.background = '#55ADA9';
  if(cont < 4){cont ++;Circle();}
  mensage = 'Ao trabalho!';
}
btnMenu[1].addEventListener('click',Pausa);
  /* Pausa Longa */
function PausaLonga(){
  min = 15;
  sec = 0;
  minut = min; 
  second = sec;
  string.textContent = `${min}:${sec}0`;
  pgPrinc.style.background = '#3089AA';
  mensage = 'O tempo Acabou!';
}
btnMenu[2].addEventListener('click',PausaLonga);
/* Notificação */
function Notify(){
  var audio = new Audio('notify/sound.mp3');
  audio.play();
}
/* Contagem até pausa longa */
var circle= document.getElementsByClassName('circle');
function Circle(){
    circle[cont-1].style.backgroundColor ='#2C3230';
}