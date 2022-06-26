var auto = {
marca: "Toyota",
modelo: "Corolla",
annio: 2020,
detalleDelAuto: function(){ //metodo de objeto
    console.log(`Auto ${this.modelo} ${this.annio}`)
}
};

auto.marca
auto.annio // manera de traer un valor de un objeto (. + palabra clave)

auto.detalleDelAuto() //manera de ingresar al metodo del objeto, se debe llamar como una funcion porque contiene una funcion

// this es una variable que hace referencia al objeto global, en este caso auto.

