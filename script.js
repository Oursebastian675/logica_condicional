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
  
//   punto9
function tipoDeTriangulo() {
    let lado1 = prompt("Ingresa el primer lado del triángulo:");
    let lado2 = prompt("Ingresa el segundo lado del triángulo:");
    let lado3 = prompt("Ingresa el tercer lado del triángulo:");
  
    lado1 = Number(lado1);
    lado2 = Number(lado2);
    lado3 = Number(lado3);
  
    if (lado1 === lado2 && lado2 === lado3) {
      console.log("El triángulo es equilátero");
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
      console.log("El triángulo es isósceles");
    } else {
      console.log("El triángulo es escaleno");
    }
  }
  
//   punto10
function adivinarNumero() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1; // Número secreto aleatorio entre 1 y 10
  
    let adivinanza = prompt("Adivina un número entre 1 y 10:");
    adivinanza = Number(adivinanza);
  
    if (adivinanza === numeroSecreto) {
      console.log("¡Has acertado!");
    } else {
      console.log("Intenta de nuevo");
    }
  }
//   punto11
function calculoPrecioFinal() {
    let precioBase = prompt("Ingresa el precio base del producto:");
    precioBase = Number(precioBase);
  
    let descuento;
    if (precioBase > 500) {
      descuento = 0.15;
    } else if (precioBase >= 300) {
      descuento = 0.10;
    } else {
      descuento = 0.05;
    }
  
    let precioFinal = precioBase * (1 - descuento);
    console.log("El precio final después del descuento es: " + precioFinal.toFixed(2));
  }

//   punto12
function verificarAñoBisiesto() {
    let año = prompt("Ingresa un año:");
    año = Number(año);
  
    if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
      console.log("El año " + año + " es bisiesto.");
    } else {
      console.log("El año " + año + " no es bisiesto.");
    }
  }
//   punto13
function autenticacionUsuario() {
    let usuario = prompt("Ingresa tu nombre de usuario:");
    let contraseña = prompt("Ingresa tu contraseña:");
  
    if (usuario === "admin" && contraseña === "1234") {
      console.log("Acceso concedido");
    } else {
      console.log("Acceso denegado");
    }
  }
//   punto14
function determinarHorarioDelDia() {
    let hora = prompt("Ingresa la hora (de 0 a 23):");
    hora = Number(hora);
  
    if (hora >= 6 && hora < 12) {
      console.log("Buenos días");
    } else if (hora >= 12 && hora < 18) {
      console.log("Buenas tardes");
    } else if ((hora >= 18 && hora < 24) || (hora >= 0 && hora < 6)) {
      console.log("Buenas noches");
    } else {
      console.log("Hora no válida");
    }
  }
//   punto15
function clasificacionMasaCorporal() {
    let peso = prompt("Ingresa tu peso en kilogramos:");
    let altura = prompt("Ingresa tu altura en metros:");
  
    peso = Number(peso);
    altura = Number(altura);
  
    let imc = peso / (altura * altura);
  
    if (imc < 18.5) {
      console.log("Bajo peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
      console.log("Peso normal");
    } else if (imc >= 25 && imc <= 29.9) {
      console.log("Sobrepeso");
    } else if (imc >= 30) {
      console.log("Obesidad");
    }
  }

//   menu
let opcion = prompt("Selecciona una opción (1-15) para ejecutar un ejercicio:\n1. Comparar Edad\n2. Número Positivo o Negativo\n3. Par o Impar\n4. Cálculo de Descuento\n5. Comparar Dos Números\n6. Clasificación por Edad\n7. Clasificación de Notas\n8. Elección de Menú\n9. Tipo de Triángulo\n10. Adivinar un Número\n11. Cálculo del Precio Final\n12. Verificar el Año Bisiesto\n13. Autenticación de Usuario\n14. Determinar Horario del Día\n15. Clasificación de Masa Corporal\n");

switch (opcion) {
  case '1':
    compararEdad();
    break;
  case '2':
    numeroPositivoONegativo();
    break;
  case '3':
    parOImpar();
    break;
  case '4':
    calculoDescuento();
    break;
  case '5':
    compararDosNumeros();
    break;
  case '6':
    clasificacionPorEdad();
    break;
  case '7':
    clasificacionDeNotas();
    break;
  case '8':
    eleccionDeMenu();
    break;
  case '9':
    tipoDeTriangulo();
    break;
  case '10':
    adivinarNumero();
    break;
  case '11':
    calculoPrecioFinal();
    break;
  case '12':
    verificarAñoBisiesto();
    break;
  case '13':
    autenticacionUsuario();
    break;
  case '14':
    determinarHorarioDelDia();
    break;
  case '15':
    clasificacionMasaCorporal();
    break;
  default:
    console.log("Opción no válida");
}