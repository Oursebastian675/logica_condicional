// punto1

function compararEdad() {
    let edad = prompt("Ingresa tu edad:");
    edad = Number(edad);
  
    if (edad >= 18) {
      console.log("Eres mayor de edad");
    } else {
      console.log("Eres menor de edad");
    }
  }

//   punto2

function numeroPositivoONegativo() {
    let numero = prompt("Ingresa un número:");
    numero = Number(numero);
  
    if (numero >= 0) {
      console.log("El número es positivo");
    } else {
      console.log("El número es negativo");
    }
  }
  
//   punto3

function parOImpar() {
    let numero = prompt("Ingresa un número:");
    numero = Number(numero);
  
    if (numero % 2 === 0) {
      console.log("El número es par");
    } else {
      console.log("El número es impar");
    }
  }
  