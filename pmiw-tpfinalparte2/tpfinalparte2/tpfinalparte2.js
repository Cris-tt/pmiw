/* Comisión 3 - David Beoian - Cristobal Teruel legajo:122920/1 - Ruben Dario Zapata legajo 88082/6
link video de Ruben Dario Zapata: 
link video de Cristobal Teruel: 
*/


let objJuego;
let imgPantallas = [];
let imgPantallasJPG = [];
function preload() {
  for (let i = 0; i <= 4; i++) {
    imgPantallas[i] = loadImage("./assets/img_0" + i + ".png");
  }
  for (let a = 0; a <= 2; a++) {
    imgPantallasJPG[a] = loadImage("./assets/img0" + a + ".jpg");
  }
 // sonido1 = loadSound("./assets/sonido_01.mp3");
 // sonido2 = loadSound("./assets/sonido_02.mp3");
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(3);
}


function draw() {
  background(240, 230, 184);
  objJuego.actualizar();
}

function mousePressed() {
  objJuego.accion();
}
function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}
