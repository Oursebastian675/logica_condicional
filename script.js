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

//   punto4

function calculoDescuento() {
    let total = prompt("Ingresa el total de la compra:");
    total = Number(total);
  
    let descuento;
    if (total > 500) {
      descuento = 0.15;
    } else if (total >= 300) {
      descuento = 0.10;
    } else {
      descuento = 0.05;
    }
  
    let totalConDescuento = total * (1 - descuento);
    console.log("El total con descuento es: " + totalConDescuento.toFixed(2));
  }
//   punto5
function compararDosNumeros() {
    let numero1 = prompt("Ingresa el primer número:");
    let numero2 = prompt("Ingresa el segundo número:");
  
    numero1 = Number(numero1);
    numero2 = Number(numero2);
  
    if (numero1 > numero2) {
      console.log("El primer número (" + numero1 + ") es mayor que el segundo (" + numero2 + ").");
    } else if (numero1 < numero2) {
      console.log("El segundo número (" + numero2 + ") es mayor que el primero (" + numero1 + ").");
    } else {
      console.log("Ambos números son iguales.");
    }
  }
//   punto6
function clasificacionPorEdad() {
    let edad = prompt("Ingresa tu edad:");
    edad = Number(edad);
  
    if (edad < 12) {
      console.log("Eres un niño");
    } else if (edad >= 12 && edad <= 17) {
      console.log("Eres un adolescente");
    } else if (edad >= 18 && edad <= 64) {
      console.log("Eres un adulto");
    } else if (edad >= 65) {
      console.log("Eres un adulto mayor");
    }
  }
  
//   punto7
function clasificacionDeNotas() {
    let nota = prompt("Ingresa una nota entre 0 y 100:");
    nota = Number(nota);
  
    if (nota >= 90) {
      console.log("Excelente");
    } else if (nota >= 70) {
      console.log("Bueno");
    } else if (nota >= 50) {
      console.log("Regular");
    } else {
      console.log("Insuficiente");
    }
  }

//   punto8
function eleccionDeMenu() {
    let opcion = prompt("Elige una opción de menú: 1 para 'Pizza', 2 para 'Hamburguesa', 3 para 'Tacos':");
    opcion = Number(opcion);
  
    switch(opcion) {
      case 1:
        console.log("Has elegido Pizza");
        break;
      case 2:
        console.log("Has elegido Hamburguesa");
        break;
      case 3:
        console.log("Has elegido Tacos");
        break;
      default:
        console.log("Opción no válida");
        break;
    }
  }
  