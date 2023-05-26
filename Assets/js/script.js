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
const segundos = document.getElementById("seconds");
segundos.innerHTML = "00";

/* 2.- Implementar la lógica para capturar el valor ingresado por el usuario al hacer clic en el botón "Empezar".*/

const empezar = document.getElementById("verde");
const cancelar = document.getElementById("rojo");

empezar.addEventListener("click", function (event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Capturar el valor del input
  let cantidadSegundos = document.getElementById("cantidadSegundos").value;
  console.log(cantidadSegundos); // Imprimir el valor en la consola

  // Continuar con la lógica del temporizador
});

/* 3.- Mostrar en la pantalla el valor ingresado como el tiempo inicial del temporizador.*/
function mostrarTiempoInicial() {
  const segundos = document.getElementById("seconds");
  segundos.innerHTML = " ";

  const cantidadSegundos = document.getElementById("cantidadSegundos").value;
  segundos.innerHTML = cantidadSegundos;
}

mostrarTiempoInicial();

/* 4.- Utilizar el método setInterval() para realizar la cuenta regresiva y actualizar el temporizador cada segundo.*/

/* 5.- Formatear los números del temporizador en formato de dos dígitos, agregando un cero inicial si es necesario.*/

/* 6.- Detener el temporizador cuando llegue a cero y mostrar un mensaje indicando que el tiempo ha terminado.*/

/* 7.- Permitir al usuario cancelar la cuenta regresiva antes de que llegue a cero y mostrar los números restantes en orden descendente.*/

/* 8.- Diseñar una interfaz atractiva y fácil de usar para la aplicación de temporizador.*/

/* 9.- Implementar al menos un método callback para manejar los eventos de inicio y cancelación del temporizador.*/

/* 10.- Asegurarse de que la aplicación funcione correctamente y cumpla con todos los requisitos establecidos.*/
