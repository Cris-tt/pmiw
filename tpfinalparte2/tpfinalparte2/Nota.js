class Nota {   //notas que van a caer
  constructor(posY) {
    this.posCarril = [width*0.25, width*0.5, width*0.75] // las posiciones donde caeran las notas
      this.posX = random (this.posCarril);
    this.posY = posY;
    this.miColor = color(0, 20);  //color negro
    this.vida = 1;
    this.velY = random (3, 10);
    this.tam = 50;
  }
  dibujar() {
    push();
    fill(this.miColor);
    image(imgPantallas[1], this.posX-25, this.posY-25, this.tam, this.tam);
    for (let i = 0; i < 3; i++) {
      rect(50+i * ((width-2*50) / 3), 0, (width - 2*50) / 3, height - 105);
    }
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
