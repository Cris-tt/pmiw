class Personaje {    //personaje (en este caso un indicador de dónde estás parado para coincidir con las notas)
   constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(0,255,0); //color verde
    this.vida = 1;
    this.tam = 50;
  }
  
  dibujar(){
    push();
    fill(this.miColor);
    ellipse(this.posX, this.posY, this.tam, this.tam);  //circulo de 50x50 (placeholder)
    pop();
  }
  teclaPresionada(keyCode){
      if (keyCode == LEFT_ARROW){
        this.moverIzquierda();
      } else if (keyCode == RIGHT_ARROW){
        this.moverDerecha();
      }
  }
  moverDerecha(){
    if (this.posX >= 480){
      this.posX == 480;
    } else {
        this.posX += 160;
      }
  }
  
  moverIzquierda(){
    if (this.posX <= 160){
      this.posX == 160;
    } else {
        this.posX -= 160;
      }
  }
  
  estaVivo(){
  }
}
