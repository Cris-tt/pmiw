class Tiempo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.tInicial = 0;
    this.tLimite = 10000;
    this.actual();
  }

  actual() {
    this.tActual = millis() - this.tInicial;
  }

  dibujar() {
    push();
    this.actual(); //actualizar el tiempo actual
    fill(0);
    textAlign(LEFT);
    text("Tiempo " + floor(map(this.tActual/1000, 0, 10, 10, 0)), this.posX, this.posY); // mapea y redondea números para hacer cuenta regresiva 
    pop();
  }
  iniciar () {
    this.tInicial = millis();
  }

  limite () {
   return (millis() - this.tInicial) >= this.tLimite;
  }
}
