var ventanaInicio = document.getElementById("ventana-inicio");
var seccionJuego = document.getElementById("juego");
var seccionGuardado = document.getElementById("guardado-palabra");
var botonInicio = document.getElementById("ingresar-juego");
var botonGuardar = document.getElementById("guardar-palabra");

function inicio(){

    ventanaInicio.showModal();

    botonInicio.addEventListener('click',function(){
        seccionGuardado.classList.add("invisible");
        seccionJuego.classList.remove("invisible");
        ventanaInicio.close();
    })

    botonGuardar.addEventListener('click',function(){
        seccionGuardado.classList.remove("invisible");
        seccionJuego.classList.add("invisible");
        ventanaInicio.close();
    })
    
}

inicio();