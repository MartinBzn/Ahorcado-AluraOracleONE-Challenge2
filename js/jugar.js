var mensajeSoloLetras = document.getElementById("mensaje-solo-letras")
var liLetras = document.getElementsByClassName("letra-palabra-elegida");
var ulLetrasNoEncontradas = document.getElementById("letras-no-encontradas");
var contadorErrores = 0;
var letrasIngresadas = [];

function validarLetra(letra){
    var respuesta = {esLetra:false,estaEnLetrasIngresadas:false};
    if(letra.toUpperCase() >= 'A' && letra.toUpperCase() <= 'Z'){
        respuesta.esLetra=true;
        respuesta.estaEnLetrasIngresadas = false
        letrasIngresadas.forEach(posicion => {
            if(letra.toUpperCase() == posicion){
                respuesta.estaEnLetrasIngresadas = true;
            }
        });
    }else{
        respuesta.esLetra = false;
    }
    return respuesta;
}

function traerPalabraElegida(liLetras){
    
    var letrasPalabraElegida = [];
    for (var i = 0;i < liLetras.length;i++){
        letrasPalabraElegida.push(liLetras[i].innerText);
    }    
    return letrasPalabraElegida;
}

function completarCasillaEnPalabra(posicion){
    liLetras[posicion].classList.add("palabra-elegida-acertada");
}

function buscarLetra(letra,palabra){
    var encontroLetra = false;
    for(var i=0;i<palabra.length;i++){
        if(letra == palabra[i]){
            encontroLetra = true;
            completarCasillaEnPalabra(i);
        }
    }
    return encontroLetra
}

function letraNoEncontrada(letra){
    var contenido='';
    contenido = `<li class="letra-no-encontrada">${letra}</li>`;
    ulLetrasNoEncontradas.innerHTML += contenido;
}

function buscarEnPalabra(letra,palabra){

    var letraEncontrada = buscarLetra(letra,palabra);
    if (letraEncontrada){
        // verificarVictoria();
    }else{
        letraNoEncontrada(letra);
        contadorErrores+=1;
        dibujarAhorcado(contadorErrores);
    }    
}

function jugar(event){
    var arrayPalabraElegida = traerPalabraElegida(liLetras);
    var letra = event.key;
    var caracterElegido = validarLetra(letra);
    mensajeSoloLetras.classList.remove("mensaje-solo-letras-visible");
    mensajeSoloLetras.classList.add("invisible");
    if (caracterElegido.esLetra && !caracterElegido.estaEnLetrasIngresadas){
        buscarEnPalabra(letra.toUpperCase(),arrayPalabraElegida);
        letrasIngresadas.push(letra.toUpperCase());
    }else{
        mensajeSoloLetras.classList.add("invisible");
        if (!caracterElegido.esLetra){
            mensajeSoloLetras.classList.add("mensaje-solo-letras-visible");
            mensajeSoloLetras.classList.remove("invisible");
            mensajeSoloLetras.innerHTML="¡¡¡SOLO SE PERMITEN LETRAS!!!";
        }else if(caracterElegido.estaEnLetrasIngresadas){
            mensajeSoloLetras.classList.add("mensaje-solo-letras-visible");
            mensajeSoloLetras.classList.remove("invisible");
            mensajeSoloLetras.innerHTML=`LA LETRA "${letra.toUpperCase()}" YA SE ELIGIO.`
        }
    }

}

