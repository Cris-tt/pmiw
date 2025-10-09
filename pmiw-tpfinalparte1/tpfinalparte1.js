
let ref= true; // referencia visual de numero de pantalla para nosotros
let imagen = [];//declaracion de arreglo para imagenes

let Pantalla
  let botón1
  let botón2
  let imagen1
  let imagen2
  let imagen3
  let imagen4
  let imagen5
  let Inicio
  let Creditos


  function preload() {
  for ( let i = 0; i < 6; i++) {      // 18 pantallas + creditos 
    imagen[i] = loadImage ("./Assets/"+nf(i, 2)+".jpg");// carga las imagenes y "nf" ajusta el valor de i a solo 2 caracteres
  }
}

function setup() {
  createCanvas(640, 480);
  background (100);
  Pantalla = 0;
  Botón1 = mouseX > width*0.7 & mouseX< width-20 & mouseY> height*0.8 & mouseY < height-20 ;
  Botón2 = mouseX > width*0.02 & mouseX< width-20 & mouseY> height*0.8 & mouseY < height-20 ;
}


function draw() {
  if (Pantalla == 0) {                     // Inicio 
    inicio ();
  } else if (Pantalla == 1) {              // presentación (Solo Orfeo + Narracion)
    image(imagen[01], 0, 0, width, height)
  } else if (Pantalla == 2) {              // presentación (Hades y Orfeo + Dialogo/Narrador)
    image(imagen[02], 0, 0, width, height)
  } else if (Pantalla == 3) {
    image(imagen[03], 0, 0, width, height) // primer bifurcación 
  } else if (Pantalla == 4) {   
    image(imagen[04], 0, 0, width, height)
  } else if (Pantalla == 5) {
    image(imagen[05], 0, 0, width, height)
  }




  //NUMERO DE ARRIBA A LA IZQUIERDA
  if (ref) {
    push();
    fill (0, 255, 0);
    textAlign(LEFT);
    text("Pantalla:"+ Pantalla, 20, 20);
    pop();
  }
}


//Altera los valores de pantalla con eventos del m
function mousePressed () {
  if (Pantalla === 0) {
    Pantalla = 1;
  } else if (Pantalla === 1) {
    Pantalla = 2;
  } else if (Pantalla === 2) {
    Pantalla = 3;
  } else if (Pantalla === 3) {
    Pantalla = 4;
  } else if (Pantalla === 4) {
    Pantalla = 5;
  } else if (Pantalla === 5) {
    Pantalla = 0;
  }
}

// && colicionesRect( width*0, 7, height*0.8, 180, 80)===true
