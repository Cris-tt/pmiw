class Juego {
  constructor(cantidadNotas) {  //si le pasas cantidad te dibuja las notas

    this.cantidadNotas = cantidadNotas;  //hace que el numero se le asigne a un this

    this.crearNotas();    //llama a crear notas

    this.crearPersonaje(); //llama a crear personaje

    this.crearPuntuacion(); //llama a crear puntuacion

    this.crearTiempo();     //llama a crear tiempo

    this.estado = 0;        //existen estados y son 0   // 0= inicio, 1= jugando, 2 = ganaste, 3 = perdiste, 4 = créditos
  }


  dibujar() {
    this.Puntuacion.dibujar(); //pide el dibujar de puntuacion
    this.Personaje.dibujar();  //pide el dibujar de personaje
    this.tiempo.dibujar();  //pide el dibujar de tiempo
    for (let i=0; i< this.cantidadNotas; i++) {   //ciclo for para hacer más de una nota con la misma info
      this.notas[i].dibujar();
      this.notas[i].mover();
    }
  }

  actualizar() {   // Cambia de estado la pantalla
    if (this.estado==0) {
      this.pantallaInicio();
    }
    this.evaluarColisiones()
    this.tiempo.tActual; // calcula el tiempo actual
    this.personajeGanaste(); //evalua si ganaste
  }

  evaluarColisiones() {     //evalua distancia entre nota y pj para sumar puntos
    for ( let n=0; n < this.cantidadNotas; n++) {
      let nota = this.notas[n];

      let dis = dist(nota.posX, nota.posY, this.Personaje.posX, this.Personaje.posY);
      if (dis< nota.tam/2+this.Personaje.tam/2) {
        nota.reiniciarMovimiento(true)
          this.Puntuacion.puntos+= 1;
      }
    }
  }
  pantallaInicio () {
    background (0, 200, 0);
    push()
      textSize(20);
    textAlign(CENTER, CENTER);
    text("TOCÁ LA MELODIA PARA DORMIR A CERBERO!!", width/2, height/3)
      pop();
    push();
    textSize(15);
    textAlign(CENTER);
    text(" Usá <-  y  -> para moverte entre carriles. \ntocá las suficientes notas antes de que se acabe el tiempo", width/2, height/2);
    pop();
  }

  iniciar() { //setea los valore iniciales por si cambiaron y pasa a estado 1
    this.Puntuacion.puntos = 0;
    this.estado = 1;
    this.tiempo.iniciar();
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
  crearPuntuacion() {
    this.Puntuacion = new Puntuacion(width*0.4, 20);
  }

  crearTiempo () {
    this.tiempo = new Tiempo(width*0.8, 20);  //crea y pasa info del tiempo
  }

  accion() {
    if ( this.estado === 0) {
      this.iniciar();  // iniciar en pantalla inicio
    } else if (this.estado ===2) {
      this.estado = 4;  // pasar a creditoa si ganaste
    } else if (this.estado ===3) {
      this.estado = 4;  // pasar a creditoa si perdiste
    } else if (this.estado ===4) {
      this.iniciar();   // reiniciar creditos
    }
  }

  personajeGanaste() {
    if (this.Puntuacion.puntos >= 10 && this.tiempo.limite()) {
      this.estado = 2;   // estado = 2 para que funcione el reinicio
      this.pantallaGanaste();
    } else if (this.Puntuacion.puntos < 10 && this.tiempo.limite()) {
      this.estado = 3;   // estado = 3 para que funcione el reinicio
      this.pantallaPerdiste();
    } else if (this.estado === 4) {
      this.pantallaCreditos();
    }
  }

  teclaPresionada(keyCode) {
    this.Personaje.teclaPresionada(keyCode); //le dice a personaje la tecla especial que se presiona
  }
  
  pantallaGanaste() {
    this.estado = 2;
    background (0, 200, 0);
    push()
      textSize(20);
    textAlign(CENTER, CENTER);
    text("FELICITACI...", width/2, height/3)
      pop();
    push();
    textSize(10);
    textAlign(CENTER);
    text(" felicitaciones, Cerbero está dormido!! \nHaz click para reiniciar", width/2, height/2);
    pop();
  }
  
  pantallaPerdiste() {
    this. estado = 3;
    background (0, 200, 0);
    push()
      textSize(20);
    textAlign(CENTER, CENTER);
    text("ESA NO LE GUSTÓ, DEBERIAS CORRER!!", width/2, height/3)
      pop();
    push();
    textSize(15);
    textAlign(CENTER);
    text("Haz click para reiniciar", width/2, height/2);
    pop();
  }


  pantallaCreditos() {
    background (0, 200, 0);
    push()
      textSize(20);
    textAlign(CENTER, CENTER);
    text("CREDITOS", width/2, height/3)
      pop();
    push();
  }
}
