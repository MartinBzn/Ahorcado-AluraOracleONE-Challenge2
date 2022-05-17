var miLienzo = document.getElementById("lienzo"); 
var lapiz = miLienzo.getContext("2d");
lapiz.strokeStyle="red";
lapiz.lineWidth = 3;

function esperaTiempo(miliSegundos){
    var tiempoInicio = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - tiempoInicio) > miliSegundos) {
            break;
        }
    }
}

function definirDireccion(xi,yi,xf,yf){
    var direccion ='';

    if(yi<yf){
        direccion = 'S';
    }else if(yi>yf){
        direccion ='N';
    }

    if(xi<xf){
        direccion=direccion + "E";
    }else if(xi>xf){
        direccion = direccion + "O";
    }

    return direccion;
}

function lineaRecta(direccion,xi,yi,xf,yf){
    var dirx = 0;
    var diry = 0;
    var corteWhile = false;

    if (direccion == 'N'){diry = -1;}
    else if(direccion == 'S'){diry = 1;}
    else if(direccion == 'E'){dirx = 1;}
    else {dirx = -1;}

    var px = xi;
    var py = yi;

    lapiz.beginPath();
    while(!corteWhile){        
        lapiz.moveTo(px,py);
        px = px + dirx;
        py = py + diry; 
        lapiz.lineTo(px,py);
        lapiz.stroke();
        // esperaTiempo(10); 
        corteWhile = (function (px,py,xf,yf){return (px == xf && py == yf)}(px,py,xf,yf));
    }
}

function lineaDiagonal(direccion,xi,yi,xf,yf){
    var dirx = 0;
    var diry = 0;
    var corteWhile = false;

    if (direccion[0] == 'N'){diry = -1;}
    else if(direccion[0] == 'S'){diry = 1;}

    if(direccion[1] == 'E'){dirx = 1;}
    else if(direccion[1] == 'O'){dirx = -1;}

    var px = xi;
    var py = yi;

    lapiz.beginPath();
    while(!corteWhile){        
        lapiz.moveTo(px,py);
        px = px + dirx;
        py = py + diry; 
        lapiz.lineTo(px,py);
        lapiz.stroke();
        // esperaTiempo(10);
        corteWhile = (function (px,py,xf,yf){return (px == xf && py == yf)}(px,py,xf,yf));
    }
}

function dibujarLinea(xi,yi,xf,yf){

    var direccion = definirDireccion(xi,yi,xf,yf);

    if(direccion.length == 1){
        lineaRecta(direccion,xi,yi,xf,yf);
    }else if (direccion.length == 2){
        lineaDiagonal(direccion,xi,yi,xf,yf);
    }
}

function dibujarCabeza(x,y,r,ai,af,){

}

function draw(){
    // linea base
    dibujarLinea(20,175,100,175);
    // linea hacia arriba
    dibujarLinea(60,175,60,25);
    // linea hacia la derecha
    dibujarLinea(59,26,140,26);
    // linea hacia abajo
    dibujarLinea(138,25,138,50);
    // cabeza
    lapiz.beginPath();
    lapiz.arc(138,65,15,0,Math.PI*2,false);
    lapiz.stroke();
    // cuerpo
    dibujarLinea(138,78,138,123);
    // brazo derecho
    dibujarLinea(138,80,108,110);
    // brazo izquierdo
    dibujarLinea(138,80,168,110);
    // pierna derecha
    dibujarLinea(138,123,108,153);
    // pierna izquierda
    dibujarLinea(138,123,168,153);
}

draw();