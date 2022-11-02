//Necesito que segun la edad del usuario se muestre por consola un tema destacado de la edad que tiene

const age = Number(prompt('Decime tu edad'));

switch (true){
    case age > 0 && age <= 10:
        console.log('Anda a escuchar la Granja de zenon')
        break;
    case age > 10 && age <= 20:
        console.log('anda a escuchar Maria becerra')
        break;
    case age >20 && age <= 30:
        console.log('Escucha El Polaco')
        break;
        }
