var estudiantes = ["Maria", "Pedro", "Jose", "Carla"]

    function saludarEstudiantes (estudiante) {
        alert (`Hola, ${estudiante}`)               
        //tarea del loop
    }

for (var i = 0; i < estudiantes.length; i++){
     saludarEstudiantes (estudiantes[i])   
}


for  (var estudiante of estudiantes){
    saludarEstudiantes (estudiante);
} 
// la variable es el singular del plural del array


while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes (estudiante);
}

