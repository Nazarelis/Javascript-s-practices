var piedra = 1;
var papel = 2;
var tijera = 3;

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function respuesta(cpu, user) {
    if (cpu === piedra){
       if (user === "piedra"){
          alert("Esto es un empate")
       }  
       else if (user === "papel"){
          alert("Tú ganas")
       }
       else {
          alert("Cpu gana")
       }

    } else if (cpu === papel){
        if (user === "piedra"){
            alert("Cpu gana")
        }
        else if (user === "papel"){
            alert("Esto es un empate")
        }
        else {
            alert("Tú ganas")
        }

    } else {
        if (user === "piedra"){
            alert("Tú ganas")
        }
        else if (user === "papel"){
            alert("Cpu gana")
        }
        else {
            alert("Esto es un empate")
        }
    } 

}

respuesta(aleatorio(1,3), prompt("Escribe con qué deseas jugar, ¿Piedra, Papel o Tijera?"));
