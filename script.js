// Menus do pomodoro
var strtimer = document.getElementById('minutos');
var interface = document.querySelector('.interface');
var timerbt =  document.querySelectorAll('.timer-bt')
var btpomodoro = document.getElementById('pomodoro');
var btintervalo = document.getElementById('intervalo');
var btintlong = document.getElementById('intlong');
var min =25;

// Pagina Timer
    // Estilo da pagina
btpomodoro.addEventListener('click', function(event){
  interface.style.background = '#890C06';
  var i;
  for(i = 0; i< timerbt.length; i++){
    timerbt[i].style.backgroundColor = '#BC0B05';
  }
  strtimer.innerHTML = '25:00';
  min = 25;
})

// Pagina Pausa
btintervalo.addEventListener('click', function(event){
  interface.style.background = "#3089AA";
  var i;
  for(i = 0; i< timerbt.length; i++){
    timerbt[i].style.backgroundColor = '#3089AA';
  }
  strtimer.innerHTML = '5:00';
  min = 5;
  

})
// Pagina Pausa Longa
btintlong.addEventListener('click', function(event){
  interface.style.background = "#294D4B";
  var i;
  for(i = 0; i< timerbt.length; i++){
    timerbt[i].style.background = '#294D4B';
  }
  strtimer.innerHTML = '15:00';
  min = 15;
})

 // Temporizador
 let cron;
 function startCountdown(){
  pause();
  var sec = 0;
  cron = setInterval(function(){
          if(sec > 0){
              sec-=1;
              strtimer.innerHTML = `${min}:${sec}`;
          }
          else if(sec == 0){
              sec += 60;
              min-=1;
          }
      },1000)}
function pause(){
  clearInterval(cron);
}
startCountdown();