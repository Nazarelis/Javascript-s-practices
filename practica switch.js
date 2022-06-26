var piedra = 1;
var papel = 2;
var tijera = 3;
var ganador = cpu !== user;

function cpu(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function respuesta (cpu, user, ganador){

    switch (ganador) {
        case user === "Piedra" && cpu === 3:
        case user === "Papel" && cpu === 1:
        case user === "Tijera" && cpu === 2:
            console.log ("User gana")
            break;
        case user === "Piedra" && cpu === 2:
        case user === "Papel" && cpu === 3:
        case user === "Tijera" && cpu === 1:
            console.log ("Cpu Gana")
            break;           
        default:
            console.log ("Esto es un empate")
    }

}
respuesta (cpu(1,3), prompt ("Escribe con qué deseas jugar ¿Piedra, Papel o Tijera?"), ganador);
