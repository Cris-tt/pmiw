/* Comisión 3 - David Beoian - Cristobal Teruel legajo:122920/1 - Ruben Dario Zapata legajo 88082/6
link video de Cristobal Teruel: https://www.youtube.com/watch?v=n6gRvZD83yg
link video de Ruben Dario Zapata: https://youtu.be/K5yEFKUwcns
*/
let ref= true; // referencia visual de numero de pantalla para nosotros
let imagen = [];//declaracion de arreglo para imagenes
let Fuente
let Pantalla
let SonidoA
let SonidoB
let SonidoC
let SonidoD
let SonidoE
let SonidoF


  function preload() {
  for ( let i = 0; i < 19; i++) {      // 18 pantallas + creditos
    imagen[i] = loadImage ("./Assets/"+nf(i, 2)+".png");// carga las imagenes y "nf" ajusta el valor de i a solo 2 caracteres
  }
    SonidoA = loadSound ("./Assets/A.mp3");
    SonidoB = loadSound ("./Assets/B.mp3");
    SonidoC = loadSound ("./Assets/C.mp3");
    SonidoD = loadSound ("./Assets/D.mp3");
    SonidoE = loadSound ("./Assets/E.mp3");
    SonidoF = loadSound ("./Assets/F.m4a");
    Fuente = loadFont("./Assets/LuxuriousRoman-Regular.ttf");
}

function setup() {
  createCanvas(640, 480);
  background (100);
  Pantalla = 0;
}


function draw() {
  if (Pantalla == 0) {                     // Inicio
    image(imagen[0], 0, 0, width, height);
    Evento( "haz Click para iniciar", width/15, height-height/4, width*0.85, height*0.2 );
  } else if (Pantalla == 1) {              // presentación (Solo Orfeo + Narracion)
    image(imagen[01], 0, 0, width, height)
      Evento( "\nOrfeo, luego de la muerte de su esposa, \ndecide bajar al inframundo a rescatarla", width/15, height-height/4, width*0.85, height*0.2 );
  } else if (Pantalla == 2) {              // presentación (Hades y Orfeo + Dialogo/Narrador)
    image(imagen[02], 0, 0, width, height)
      Evento( "\nHades le propone atravezar el inframundo de \nla mano de su amada pero sin mirar para atras", width/15, height-height/4, width*0.85, height*0.2 );
  } else if (Pantalla == 3) {
    image(imagen[03], 0, 0, width, height) // primer bifurcación
      dibujarBoton("Caminar", width/15, height-height/4, width*0.4, height*0.2 );
     dibujarBoton("Mirar para atras", 8*width/15, height-height/4, width*0.4, height*0.2 );
  } else if (Pantalla == 4) {
    image(imagen[04], 0, 0, width, height)
      Evento( "Ves a Hades disfrazandose de tu esposa...", width/15, height-height/4, width*0.85, height*0.2 );
  } else if (Pantalla == 5) {
    image(imagen[05], 0, 0, width, height)
      Evento( "Cruzas el tártaro pero un gigante, criatura engañosa, te llama", width/15, height-height/4, width*0.85, height*0.2 );
  } else if (Pantalla == 6) {
    image(imagen[06], 0, 0, width, height)
      dibujarBoton("escuchar", width/15, height-height/4, width*0.4, height*0.2 );
      dibujarBoton("no escuchar", 8*width/15, height-height/4, width*0.4, height*0.2 );
  } else if (Pantalla == 7) {
    image(imagen[07], 0, 0, width, height)
      Evento( "Linda Lira, sería buena forma de mimir al chucho", width/15, height-height/4, width*0.85, height*0.2 );
  } else if (Pantalla == 8) {
    image(imagen[08], 0, 0, width, height)
      Evento( "\nCruzas los campos Eliseos y un perro gigante de \n3 cabezas hace que caigas de la sorpresa", width/15, height-height/4, width*0.85, height*0.2 );
  } else if (Pantalla == 9) {
    image(imagen[09], 0, 0, width, height)
      dibujarBoton("lira vieja", width/15, height-height/4, width*0.4, height*0.2 );
      dibujarBoton("espada de oro", 8*width/15, height-height/4, width*0.4, height*0.2 );
  } else if (Pantalla == 10) {
    image(imagen[10], 0, 0, width, height)
      Evento( "Tocas una dulce melodía que duerme al perro y te deja cruzar sin problemas", width/15, height-height/4, width*0.85, height*0.2 );
  } else if (Pantalla == 11) {
    image(imagen[11], 0, 0, width, height)
      Evento( "Intentas utilizar la espada... Cerbero decide usarte como pelota de juguete", width/15, height-height/4, width*0.85, height*0.2 );
  } else if (Pantalla == 12) {
    image(imagen[12], 0, 0, width, height)
      Evento( "Llegas al río estigia, justo adelante reconoces la figura de un barco", width/15, height-height/4, width*0.85, height*0.2 );
  } else if (Pantalla == 13) {
    image(imagen[13], 0, 0, width, height)
      Evento( "\nCaronte nota que no tenés Ovolos pero \npermitira que viajes si lo vences bailando", width/15, height-height/4, width*0.85, height*0.2 );
  } else if (Pantalla == 14) {
    image(imagen[14], 0, 0, width, height)
      dibujarBoton("Bailas despacito", width/15, height-height/4, width*0.4, height*0.2 );
      dibujarBoton("Bailas Wachiturro", 8*width/15, height-height/4, width*0.4, height*0.2 );
  } else if (Pantalla == 15) {
    image(imagen[15], 0, 0, width, height)
      Evento( "Caronte te deja salir del inframundo con tu esposa a tu lado", width/15, height-height/4, width*0.85, height*0.2 );
  } else if (Pantalla == 16) {
    image(imagen[16], 0, 0, width, height)
      Evento( "Caronte decide ahogarse antes que seguir viendo... te quedas atrapado", width/15, height-height/4, width*0.85, height*0.2 );
  } else if (Pantalla == 17) {
    image(imagen[17], 0, 0, width, height)
      Evento( "- Click para reiniciar -", width/15, height-height/4, width*0.85, height*0.2 );
  } else if (Pantalla == 18) {
    image(imagen[18], 0, 0, width, height)
      Evento( "\nOrfeo´s Quest - Comisión 3 - David Bedoian \nCristobal Teruel-  Darío Zapata - 88082/6", width/15, height/4, width*0.85, height*0.5 );
  }





  //NUMERO DE ARRIBA A LA IZQUIERD
  /*if (ref) {
    push();
    fill (0, 255, 0);
    textAlign(LEFT);
    text("Pantalla:"+ Pantalla, 20, 20);
    pop();
  }*/
}


//Altera los valores de pantalla con eventos del m
function mousePressed () {
  if (Pantalla === 0) {
    Pantalla = 1;
  } else if (Pantalla === 1 ) {
    Pantalla = 2;
  } else if (Pantalla === 2) {
    Pantalla = 3;
    SonidoA.play();     //Tarareo de Hades
    SonidoA.pan(-1);    //Paneo
  } else if (Pantalla === 3) {
    if (colisionRectangular(width/15, height-height/4, width*0.4, height*0.2)) {
      Pantalla = 5;
      SonidoF.play();    //Sonido Grito
    } else if (colisionRectangular(8*width/15, height-height/4, width*0.4, height*0.2)) {
      Pantalla = 4;
      SonidoA.stop();  //detiene el sonido de tarareo por si se pasa muy rápido
    }
  } else if (Pantalla === 4) {
    Pantalla = 17;
  } else if (Pantalla === 5) {
    Pantalla = 6;
  } else if (Pantalla === 6) {
    if (colisionRectangular(width/15, height-height/4, width*0.4, height*0.2)) {
      Pantalla = 7;
    } else if (colisionRectangular(8*width/15, height-height/4, width*0.4, height*0.2)) {
      Pantalla = 8;
    }
  } else if  (Pantalla === 7) {
    Pantalla = 8;
  } else if (Pantalla === 8) {
    Pantalla = 9;
  } else if (Pantalla === 9) {
    Pantalla = 10;
    if (colisionRectangular(width/15, height-height/4, width*0.4, height*0.2)) {
      Pantalla = 10;
      SonidoB.setVolume(0.1);   //menos volumen
      SonidoB.play();           //Sonido de Lira
    } else if (colisionRectangular(8*width/15, height-height/4, width*0.4, height*0.2)) {
      Pantalla = 11;
      SonidoC.play();           //Sonido de Pelota
      SonidoC.setVolume(0.1);  //menos volumen
    }
  } else if (Pantalla === 10) {
    Pantalla = 12;
  } else if (Pantalla === 11) {
    Pantalla = 17;
  } else if (Pantalla === 12) {
    Pantalla = 13;
  } else if (Pantalla === 13) {
    Pantalla = 14;
  } else if (Pantalla === 14) {
    if (colisionRectangular(width/15, height-height/4, width*0.4, height*0.2)) {
      SonidoD.play();     //Sonido de pajaros
      Pantalla = 15;
    } else if (colisionRectangular(8*width/15, height-height/4, width*0.4, height*0.2)) {
      Pantalla = 16;
      SonidoE.play();     //Sonido de Caronte tirandose al agua
      SonidoE.setVolume(0.1);
    }
  } else if (Pantalla === 15) {
    Pantalla = 17;
  } else if (Pantalla === 16) {
    Pantalla = 17;
  } else if (Pantalla === 17) {
    Pantalla = 18;
  } else if (Pantalla === 18) {
    SonidoC.stop();    //Detienen los sonidos más largos por si se avanza rápido
    SonidoD.stop();
    Pantalla = 0;
  }
}
