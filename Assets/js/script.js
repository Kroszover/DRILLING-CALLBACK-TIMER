/*Requerimientos del proyecto:

1.- Crear una interfaz de usuario que permita a los usuarios ingresar la cantidad de tiempo en segundos.
2.- Implementar la lógica para capturar el valor ingresado por el usuario al hacer clic en el botón "Empezar".
3.- Mostrar en la pantalla el valor ingresado como el tiempo inicial del temporizador.
4.- Utilizar el método setInterval() para realizar la cuenta regresiva y actualizar el temporizador cada segundo.
5.- Formatear los números del temporizador en formato de dos dígitos, agregando un cero inicial si es necesario.
6.- Detener el temporizador cuando llegue a cero y mostrar un mensaje indicando que el tiempo ha terminado.
7.- Permitir al usuario cancelar la cuenta regresiva antes de que llegue a cero y mostrar los números restantes en orden descendente.
8.- Diseñar una interfaz atractiva y fácil de usar para la aplicación de temporizador.
9.- Implementar al menos un método callback para manejar los eventos de inicio y cancelación del temporizador.
10.- Asegurarse de que la aplicación funcione correctamente y cumpla con todos los requisitos establecidos. */

//Desarrollo

//DOM y variables a usar
// DOM y variables a usar
// DOM y variables a usar
const qtySecondsInput = document.getElementById("cantidadSegundos");
const seconds = document.getElementById("seconds");
const empezamos = document.getElementById("verde");
const cancelar = document.getElementById("rojo");

let intervalo;
let cantidadSegundos;

// Funciones
function formateadorDeNumeros(numero) {
  return numero < 10 ? `0${numero}` : numero;
}

function actualizarTemporizador() {
  seconds.textContent = formateadorDeNumeros(cantidadSegundos);
  if (cantidadSegundos === 0) {
    clearInterval(intervalo);
    alert("El tiempo ha terminado");
    reiniciarTemporizador();
  } else {
    cantidadSegundos--;
  }
}

function initTemporizador() {
  cantidadSegundos = parseInt(qtySecondsInput.value);
  seconds.textContent = formateadorDeNumeros(cantidadSegundos);

  // Dejamos solo la opción de cancelar disponible
  qtySecondsInput.disabled = true;
  empezamos.disabled = true;
  cancelar.disabled = false;

  intervalo = setInterval(actualizarTemporizador, 1000);
}

function reiniciarTemporizador() {
  clearInterval(intervalo);
  seconds.textContent = "";
  qtySecondsInput.value = "";
  qtySecondsInput.disabled = false;
  empezamos.disabled = false;
  cancelar.disabled = true;
}

// Eventos
empezamos.addEventListener("click", initTemporizador);
cancelar.addEventListener("click", reiniciarTemporizador);
