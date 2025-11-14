class Juego {
  constructor(cantidadNotas, cantidadCarriles) {  //si le pasas cantidad te dibuja las notas

    this.cantidadNotas = cantidadNotas;  //hace que el numero se le asigne a un this

    this.cantidadCarriles = cantidadCarriles;

    this.crearNotas();    //llama a crear notas

    this.crearPersonaje(); //llama a crear personaje

    this.crearCarriles();

    this.puntos =0;

    this.estado = 0;

    this.tiempoInicial = 0;

    this.tiempoLimite = 3000;
  }


  dibujar() {
    this.Personaje.dibujar();
    for (let i=0; i< this.cantidadNotas; i++) {   //ciclo for para hacer más de una nota con la misma info
      this.notas[i].dibujar();
      this.notas[i].mover();
    }

    for (let a=0; a< this.cantidadCarriles; a++) {
      this.Carril[a].dibujar();
    }
  }

  actualizar() {   // Cambia de estado la pantalla
    if (this.estado==0) {
      this.pantallaInicio();
    }
    this.evaluarColisiones();

    push();
    fill(0);
    textAlign(LEFT);
    text("PUNTOS "+ this.puntos, 20, 20);
    textAlign(RIGHT);
    pop();
  }

  evaluarColisiones() {     //evalua distancia entre nota y pj para sumar puntos
    for ( let n=0; n < this.cantidadNotas; n++) {
      let nota = this.notas[n];

      let dis = dist(nota.posX, nota.posY, this.Personaje.posX, this.Personaje.posY);
      if (dis< nota.tam/2+this.Personaje.tam/2) {
        nota.reiniciarMovimiento(true)
          this.puntos+=1;
      }
    }
  }
  pantallaInicio () {
    background (0, 200, 0);
    push()
      textSize(20);
    textAlign(CENTER);
    text("HACE CLICK PARA EMPEZAR", width/2, height/2)
      pop();
  }

  iniciar() {
    this.tiempoInicio = millis();
    this.puntos = 0;
    this.estado = 1;
    this.crearNotas();
  }
//i*130   
 crearNotas() {    // funcion para crear las notas
 this.notas = [];
 for (let i=0; i< this.cantidadNotas; i++) {
 this.notas[i] = new Nota(20); // crea las notas con ciclo for y pasa datos para su ubicacion
 }
 }
 
crearPersonaje() { //funcion para crear personajes
  this.Personaje = new Personaje(width/2, 400);  //crea y pasa info de su ubicacion
}
crearCarriles() { //funcion para crear carriles
  this.Carril = [];
  for (let O=0; O<3; O++) { //ciclo for para pasar la info de los carriles y crear 3
    this.Carril [O] = new Carril(O*20, 0);
  }
}

accion() {
  if ( this.estado == 0)
    this.iniciar();
}

personajeGano() {
  if (this.puntos === 10 && this.tiempo === this.tiempoLimite) {
    pantallaGanaste();
  } else if (this.puntos < 10 && this.tiempo === this.tiempoLimite) {
    pantallaPerdiste();
  }
}
personajePierde() {
}
}
