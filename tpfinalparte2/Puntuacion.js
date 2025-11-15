class Puntuacion {  //puntuacion, lo definí como clase porque la consigna pide mínimo 4 clases
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(0);  //color negro
    this.puntos = 0;
  }
  dibujar() {  // cara de cerbero en forma de emoji
    if (this.puntos >= 10) {
      push();
      fill(0, 255, 0);
      textAlign(LEFT);
     // text("PUNTOS "+ this.puntos, this.posX, this.posY);
      image(imgPantallas[4], this.posX, this.posY, 100, 100);
      pop();
      // carita de cerbero dormido
    } else if (this.puntos >= 5 && this.puntos < 10) {
      push();
      fill(0, 0, 255);
      textAlign(LEFT);
     // text("PUNTOS "+ this.puntos, this.posX, this.posY);
       image(imgPantallas[3], this.posX, this.posY, 100, 100);
      pop();
      // carita de cerbero medio dormido
    } else if (this.puntos < 5) {
      push();
      fill(255, 0, 0);
      textAlign(LEFT);
     // text("PUNTOS "+ this.puntos, this.posX, this.posY);
       image(imgPantallas[2], this.posX, this.posY, 100, 100);
      pop();
      // cara de cerbero despierto
    }
  }
}
