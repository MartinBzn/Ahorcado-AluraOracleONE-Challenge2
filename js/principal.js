var ventanaInicio = document.getElementById("ventana-inicio");
var botonInicio = document.getElementById("ingresar-juego");
var botonGuardar = document.getElementById("guardar-palabra");
var seccionJuego = document.getElementById("juego");
var botonNuevoJuego = document.getElementById("nuevo-juego");
var botonDesistir = document.getElementById("desistir");

var seccionGuardado = document.getElementById("guardado-palabra");
var arrayPalabras = ['HOLA','MUNDO','AHORCADO','ALURA','PALABRA','CODIGO','ORACLE','FIGMA','TRELLO','PROGRAMA'];
var arrayPalabrasYaElegidas = [];

function mostrarVentana(ventana){
    if(ventana.open){
        ventana.close();
    };
    ventana.showModal();
}

function insertarTeclado(){
    var tecladoVirtual = document.getElementById("teclado-virtual");
    var boton = '';
    var contenidoHTML = '';
    var letraContenida = '';
    for(var i = 65;i<=90;i++){
        
        letraContenida = String.fromCodePoint(i)
        if (letraContenida == 'O'){
            contenidoHTML += '<button id="botonNN" class = "boton-letra">Ñ</button>'
        }
        boton = `<button id="boton${letraContenida}" class = "boton-letra">${letraContenida}</button>`
        contenidoHTML += boton;
    };
    tecladoVirtual.innerHTML = contenidoHTML;
}


function limpiar(){
    limpiarDibujo(miLienzo,lapiz);
    limpiarUlPalabraElegida();
    limpiarUlLetrasNoEncotradas();
    limpiarJugar(contadorErrores,letrasIngresadas);
    contadorErrores=0;
    letrasIngresadas=[];
}

function inicio(conMsjInicio){
    limpiar();
    insertarTeclado();    
    if(conMsjInicio){
        
        mostrarVentana(ventanaInicio);

        botonInicio.addEventListener('click',function(){
            seccionGuardado.classList.add("invisible");
            seccionJuego.classList.remove("invisible");
            ventanaInicio.close();
            botonNuevoJuego.addEventListener('click',function(){verMensajeReinicio()});
            botonDesistir.addEventListener('click',function(){verMensajeDesistir()});
            jugar(arrayPalabras,arrayPalabrasYaElegidas);            
        })

        botonGuardar.addEventListener('click',function(){
            seccionGuardado.classList.remove("invisible");
            seccionJuego.classList.add("invisible");
            ventanaInicio.close();
            agregarPalabra(arrayPalabras);
        })
    }
}