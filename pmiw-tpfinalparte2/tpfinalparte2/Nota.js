class Nota {   //notas que van a caer 
     constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255,0,0);  //color rojo
    this.vida = 1;
    this.mover = true;
   }
  dibujar(){
      push();
      fill(this.miColor);
      ellipse(this.posX, this.posY, 50, 50);  //notas de 50x50 (ni idea, solo placeholder)
      pop();
      }
  
  mover(){
    if (this.mover) {
     this.posY=5;  // se mueve hacia abajo 
    }
  }
  
  estaVivo(){
  }
}
