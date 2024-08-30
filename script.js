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
  