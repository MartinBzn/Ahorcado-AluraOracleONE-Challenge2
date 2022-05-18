var arrayPalabras = ['HOLA','MUNDO','AHORCADO','ALURA','PALABRA','CODIGO','ORACLE','FIGMA','TRELLO','PROGRAMA'];
var ulPalabraElegida = document.getElementById('palabra-elegida');

function elegirPalabra(array){
    return array[Math.floor(Math.random()*array.length)];    
}

function ponerPalabra(palabraElegida) {

    var contador = 0;
    var contenido = '';
    
    for(var letra of palabraElegida){
        contador +=1;
        contenido = `<li id="letra${contador}" class="letra-palabra-elegida">${letra}</li>`;
        ulPalabraElegida.innerHTML += contenido;
    };
}



var palabraElegida = elegirPalabra(arrayPalabras);
ponerPalabra(palabraElegida);
