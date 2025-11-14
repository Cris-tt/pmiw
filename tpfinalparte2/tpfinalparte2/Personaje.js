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
  
  moverDerecha(){
  }
  
  moverIzquierda(){
  }
  
  estaVivo(){
  }
}
