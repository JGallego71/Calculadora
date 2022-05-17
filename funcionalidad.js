const botonNumeros = document.getElementsByName("numero");
const botonOperaciones=document.getElementsByName("operacion");
const botonIgual = document.getElementsByName("igual")[0];
const botonBorrar = document.getElementsByName("borrar")[0];
var pantalla = document.getElementById("display");
var operActual = "";
var operAnterior = "";
var operacion = undefined;


botonNumeros.forEach(function(boton){
  boton.addEventListener("click",function(){
    agregarNumero(boton.innerText); 
  })
})

botonOperaciones.forEach(function(boton){
  boton.addEventListener("click", function(){
    selecOperacion(boton.innerText);
  })
})

botonIgual.addEventListener("click",function(){
  calcular();
  actualizarDisplay();
})

botonBorrar.addEventListener("click", function(){
  clear();
  actualizarDisplay();
})

function selecOperacion(op){
  if(operActual === "")return;
  if(operAnterior !== ""){
    calcular();
  }
  operacion = op.toString();
  operAnterior = operActual;
  operActual = "";
}

function calcular(){
  var calculo;
  const anterior = parseFloat(operAnterior);
  const actual = parseFloat(operActual);
  if(isNaN(anterior) || isNaN(actual)) return;
  switch(operacion){
    case "+":
      calculo = anterior + actual;
      break;
    case "-":
      calculo = anterior - actual;
      break;
    case "x":
      calculo = anterior * actual;
      break;
    case "/":
      calculo = anterior / actual;
      break;
    default:
      return;
  }
  operActual = calculo;
  operacion = undefined;
  operAnterior = "";
}

function agregarNumero(num){
  operActual = operActual.toString() + num.toString();
  actualizarDisplay();
}

function clear(){
  operActual = "";
  operAnterior = "";
  operacion = undefined;
}

function actualizarDisplay(){
  display.value = operActual
}

