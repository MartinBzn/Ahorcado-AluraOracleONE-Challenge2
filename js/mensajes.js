var ventanaVictoria = document.getElementById("ventana-victoria");
var palabraVictoria = document.getElementById("palabra-victoria");
var botonVictoria = document.getElementById("aceptar-victoria");
var ventanaDerrota = document.getElementById("ventana-perdio");
var botonDerrota = document.getElementById("aceptar-derrota");
var ventanaReinicio = document.getElementById("ventana-reinicio");
var botonAceptarReinicio = document.getElementById("aceptar-reinicio");
var botonCancelarReinicio = document.getElementById("cancelar-reinicio");
var ventanaDesistir = document.getElementById("ventana-desistir");
var botonAceptarDesistir = document.getElementById("aceptar-desistir");
var botonCancelarDesistir = document.getElementById("cancelar-desistir");
var ventanaVerificarPalabra = document.getElementById("ventana-verificar-palabra");
var mensajeVerificarPalabra = document.getElementById("msj-verificar-palabra");
var botonAceptarVerificar = document.getElementById("aceptar-verificar");
var juegoTerminado = false; 

function msjErrorSeleccion(elemento,msj){
    elemento.innerHTML=msj;
    elemento.classList.add("mensaje-solo-letras-visible");
    elemento.classList.remove("invisible");
    setTimeout(()=>{
                        elemento.classList.remove("mensaje-solo-letras-visible");
                        elemento.classList.add("invisible");
                    },2000);
}

function verMensajePerdio(){
    var divCanvas = document.getElementById("contenedor-lienzo");
    juegoTerminado = true;
    divCanvas.classList.add("contenedor-lienzo-tiembla");
    setTimeout(()=>{divCanvas.classList.remove("contenedor-lienzo.tiembla");},1000);
        mostrarLetrasNoAcertadas();
        ventanaDerrota.showModal();
        botonDerrota.addEventListener('click',function(){
        ventanaDerrota.close();
        });
}

function verMensajeVictoria(palabra=""){
    juegoTerminado = true;
    palabraVictoria.innerHTML=palabra.toUpperCase();
    ventanaVictoria.showModal();
    botonVictoria.addEventListener('click',function(){
        ventanaVictoria.close();
    })
}

function verMensajeReinicio(){
    if(!juegoTerminado){
        juegoTerminado = false;
        ventanaReinicio.showModal();
        botonAceptarReinicio.addEventListener('click',function(){
            jugar(arrayPalabras,arrayPalabrasYaElegidas);
            ventanaReinicio.close();
        });
        botonCancelarReinicio.addEventListener('click',function(){ventanaReinicio.close();});
    }else{
        jugar(arrayPalabras,arrayPalabrasYaElegidas);
    }
}

function verMensajeDesistir(){
    juegoTerminado = false;
    ventanaDesistir.showModal();
    botonAceptarDesistir.addEventListener('click',function(){
        inicio(true);
        ventanaDesistir.close();
    });
    botonCancelarDesistir.addEventListener('click',function(){ventanaDesistir.close();});
}

function verMensajeVerificarPalabra(mensaje){
    mensajeVerificarPalabra.innerHTML = mensaje;
    ventanaVerificarPalabra.showModal();
    botonAceptarVerificar.addEventListener('click',function(){
        ventanaVerificarPalabra.close();        
    })
}