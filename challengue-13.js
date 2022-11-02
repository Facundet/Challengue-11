// Obtener un número del usuario y mostrar en consola o por alerta si es par o impar

let num1 = Number(prompt("Ingrese un número para saber si es par o impar"));

if(num1 %2==0){
    console.log("El número" + num1 + "es par");
} else {
    console.log("El número" + num1 + "es impar");
}
