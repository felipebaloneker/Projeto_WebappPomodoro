var minute = 25;
var sec = 00;
var string = document.getElementById('string');
var btnStart = document.getElementById('start');
function Começar(){
  /* Trocando texto do botão ao clicar */
  if(btnStart.textContent === 'Começar'){
    btnStart.textContent = 'Pausar';
  }
  else{
    btnStart.textContent = 'Começar';
  }
  /**/
}
btnStart.addEventListener('click',Começar);