var arrayPalabras = ['HOLA','MUNDO','AHORCADO','ALURA','CHALLENGE','JAVASRCIPT','ORACLE','FIGMA','TRELLO','PROGRAMA'];


function elegirPalabra(array){
    return array[Math.floor(Math.random()*array.length)];    
}

console.log(elegirPalabra(arrayPalabras));