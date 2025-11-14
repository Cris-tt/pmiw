let objJuego;


function setup() {
  createCanvas(640,480);
  objJuego = new Juego(3);
}


function draw() {
  background(200);
  objJuego.dibujar();
  objJuego.actualizar();
}

function mousePressed() {
  objJuego.accion();
}
function keyPressed(){
  objJuego.teclaPresionada(keyCode);
}
