var listaDeAutosRegistrados = []
var autosRegistrados = 0;

function autoNew(marca, modelo, annio, color){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.color = color;

}

registrar = prompt ("¿Quieres registrar un auto?")

if (registrar === "Si" || "si"){
    
while(autosRegistrados < cantidadDeAutos){
var marca = prompt ("Marca del auto: ")
var modelo = prompt ("Modelo: ")
var annio = prompt ("Año: ");
var color = prompt ("Color: ")
}





var autoNew = new autoNew(marca, modelo, annio, color)

listaDeAutosRegistrados.push(autoNew)
}

console.log (listaDeAutosRegistrados)


