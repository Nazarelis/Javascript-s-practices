function calcularPrecioConDescuento (precio, descuento){
var precioFinal = (precio * (100 - descuento) / 100);
return precioFinal;
}

function botonDeCalculo (){
    const inputPrecio = document.getElementById("inputPrecio");
    const valuePrecio = inputPrecio.value;

    const inputDescuento = document.getElementById("inputDescuento");
    const valueDescuento = inputDescuento.value;

    const precioConDescuento = calcularPrecioConDescuento(valuePrecio, valueDescuento);

    const resultadoPrecio = document.getElementById("resultadoPrecio");
    
    resultadoPrecio.innerText = "El precio con descuento son: $ " + precioConDescuento;
}









//calcularPrecioConDescuento (prompt("¿Cuál es el precio original de tu compra?"), prompt("¿Cuál es el porcentaje de descuento?"))

// console.log({
// precioInicial,   
// precioFinal,
// descuento,
// }) (Manera de imprimir un objeto en la consola)
