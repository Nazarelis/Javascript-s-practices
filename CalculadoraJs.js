function suma(valor1, valor2){
    valorFinal = parseFloat(valor1) + parseFloat(valor2);
    return valorFinal;
}

function resta(valor1, valor2) {
    valorFinal = valor1 - valor2;
    return valorFinal;
}

function division(valor1, valor2){
    valorFinal = valor1 / valor2;
    return valorFinal;

}

function multiplicacion(valor1, valor2) {
    valorFinal = valor1 * valor2;
    return valorFinal; 
}

function realizarSuma() {
    const inputValor1 = document.getElementById("inputValor1");
    const value1 = inputValor1.value;
    const inputValor2 = document.getElementById("inputValor2")
    const value2 = inputValor2.value;

    const resultadoSuma = suma(value1, value2)
    alert ("El resultado es " + resultadoSuma)
}

function realizarResta() {
    const inputValor1 = document.getElementById("inputValor1");
    const value1 = inputValor1.value;
    const inputValor2 = document.getElementById("inputValor2")
    const value2 = inputValor2.value;

    const resultadoResta = resta(value1, value2)
    alert ("El resultado es " + resultadoResta)
}

function realizarDivision() {
    const inputValor1 = document.getElementById("inputValor1");
    const value1 = inputValor1.value;
    const inputValor2 = document.getElementById("inputValor2")
    const value2 = inputValor2.value;

    const resultadoDivision = division(value1, value2)
    alert ("El resultado es " + resultadoDivision)
}

function realizarMultiplicacion() {
    const inputValor1 = document.getElementById("inputValor1");
    const value1 = inputValor1.value;
    const inputValor2 = document.getElementById("inputValor2")
    const value2 = inputValor2.value;

    const resultadoMultiplicacion = multiplicacion(value1, value2)
    alert ("El resultado es " + resultadoMultiplicacion)
}