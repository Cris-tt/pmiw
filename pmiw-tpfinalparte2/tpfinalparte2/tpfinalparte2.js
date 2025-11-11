let objJuego;


function setup() {
  createCanvas(400,400);
  objJuego = new Juego(5, 3);
}


function draw() {
  objJuego.dibujar();

}
