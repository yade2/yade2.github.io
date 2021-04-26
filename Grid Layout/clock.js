window.addEventListener('DOMContentLoaded',documentLoaded, false);

var startTime;
var limite;
var temporizador;

function documentLoaded() { 
  "use strict"
  
  var input = document.getElementById("clock");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if(event.keyCode === 13) {
      botonClicked();
  }
});
}

  function botonClicked() {
    "use strict";
    
    startTime = new Date();
    
    limite =parseInt(document.getElementById("clock").contenteditable);

    clearInterval(temporizador);
    temporizador = setInterval(updateTime, 1000);

  }

  function updateTime() {
      "use strict";

    var currentTime = new Date();

    var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

    var minutos = Math.floor(elapsed / 60);
    var segundos = Math.floor(elapsed % 60);

    if(minutos < 10) {
        minutos = "0" + minutos;
    
    }

    if(segundos < 10) {
        segundos = "0" + segundos;
    }

    document.getElementById("clock").innerHTML = minutos + ":" + segundos;

    if(minutos>= limite) {
        document.getElementById("clocl").className = "red";
    }else {
        document.getElementById("clock").className = "blue";
    }
  }