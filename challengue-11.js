// Obtener la base y la altura de un triángulo, y el radio de un circulo. Mostrar en consola el área del triangulo y del círculo.

// Pista:
// - Área del triángulo: (base x altura) / 2
// - Área del círculo: pi x radio^2

//Área del triángulo:

let base = Number(prompt("Ingrese la base del triángulo"));
let altura = Number(prompt("Ingrese la altura del triángulo"))

let area = base * altura 
console.log('El área del triángulo es:'+ area);

//Área del círculo:

const pi = 3.14;
let radio = Number(prompt("Ingrese el radio del círculo:"))

console.log('El área del círculo es:' + pi * Math.pow(radio,2));

