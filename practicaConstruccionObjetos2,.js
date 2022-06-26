const listaDeAutos = [];
const numeroDeAutos = Number (prompt ("Escribe en numeros la cantidad de autos que quieres registrar"));

for (i = 0;  i <= numeroDeAutos; i++ ){

    function auto (marca, modelo, annio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
        this.color = color;
    }
    let newAuto = new auto (prompt("Escribe la marca del auto: "), prompt("Escribe el modelo del auto: "),prompt("Escribe el año del auto: "),prompt("Escribe el color del auto: "));
 
    listaDeAutos.push(newAuto)
} 

