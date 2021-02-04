// apos 25 minutos uma pausa apos 4x25 pausa longa
// Segundos
var sec = 60;
function timerStart(){
    minutes = setInterval(function(){
        if(sec == 0){sec+=59;min-=1;}
        else if(sec == 0 && min == 0){clearInterval}
        else{sec-=1;console.log(sec);}
    },1000)
}
timerStart()