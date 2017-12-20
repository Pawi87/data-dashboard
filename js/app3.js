var $dashGeneral= $("#option-1");
var $dashgeneracion= $("#option-2");
var $estudiantes= $("option-3");

function cargar(){
    $dashGeneral.click(mostrar);
    $dashgeneracion.click(mostrarGeneracion);
    $estudiantes.click(mostrarEstudiantes);
}

function mostrar(e){
    event.preventDefault();
    $("#columna1").toggle();
    
}

function mostrarGeneracion(e){
    e.preventDefault();
    $("#columna2").toggle();
}

function mostrarEstudiantes(e){
    e.preventDefault();
    $("#columna3").toggle();
}



$(document).ready(cargar);