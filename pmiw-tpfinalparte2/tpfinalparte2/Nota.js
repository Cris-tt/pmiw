class Nota {   //notas que van a caer
  constructor(posY) {
    this.posCarril = [width*0.25, width*0.5, width*0.75] // las posiciones donde caeran las notas
    this.posX = random (this.posCarril);
    this.posY = posY;
    this.miColor = color(255, 0, 0);  //color rojo
    this.vida = 1;
    this.velY = random (3, 10); 
    this.tam = 50;
  }
  dibujar() {
    push();
    fill(this.miColor);
    ellipse(this.posX, this.posY, this.tam, this.tam);  //notas de 50x50 (ni idea, solo placeholder)
    pop();
  }

  mover() {
    this.posY += this.velY*0.4  ;  // se mueve hacia abajo
    this.reiniciarMovimiento();
  }

  reiniciarMovimiento(colisionNota) {
    if (this.posY > height || colisionNota) {
      this.posY = -20;
      this.posX = random(this.posCarril); // nuevo carril
    }
  }
}
