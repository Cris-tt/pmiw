class Juego {
  constructor(cantidadNotas) {  //si le pasas cantidad te dibuja las notas
    this.cantidadNotas = cantidadNotas;  //hace que el numero se le asigne a un this
    this.crearNotas();    //llama a crear notas
    this.crearPersonaje(); //llama a crear personaje
    this.crearPuntuacion(); //llama a crear puntuacion
    this.crearTiempo();     //llama a crear tiempo
    this.estado = 0;        //existen estados y son 0   // 0= inicio, 1= jugando, 2 = ganaste, 3 = perdiste, 4 = créditos
  }


  actualizar() {   // Cambia de estado la pantalla
    if (this.estado==0) {
      this.pantallaInicio();
    } else if (this.estado == 1) {
      this.dibujar();
      this.evaluarColisiones()
        this.tiempo.tActual; // calcula el tiempo actual
      this.personajeGanaste(); //evalua si ganaste
    } else if (this.estado==2) {
      this.pantallaGanaste();
    } else if (this.estado==3) {
      this.pantallaPerdiste();
    } else if (this.estado==4) {
      this.pantallaCreditos(); // pasar a creditoa si ganaste/perdiste
    }
  }

  dibujar() {
    image(imgPantallas[0], 0, 0, 640, 480);
    this.Puntuacion.dibujar(); //pide el dibujar de puntuacion
    this.Personaje.dibujar();  //pide el dibujar de personaje
    this.tiempo.dibujar();  //pide el dibujar de tiempo
    for (let i=0; i< this.cantidadNotas; i++) {   //ciclo for para hacer más de una nota con la misma info
      this.notas[i].dibujar();
      this.notas[i].mover();
    }
  }


  accion() {
    if ( this.estado === 0) {
      this.iniciar();                                       //inicia solo en inicio
    } else if (this.estado === 2 || this.estado === 3) {
      this.estado = 4;                                      //cambia de estado solo en pantallas finales
    } else if (this.estado === 4) {
      this.estado = 0;                                    //resetea
    }
  }


  iniciar() { //setea los valore iniciales por si cambiaron y pasa a estado 1
    this.Puntuacion.puntos = 0;
    this.estado = 1;
    this.tiempo.iniciar();
  }


  evaluarColisiones() {     //evalua distancia entre nota y pj para sumar puntos
    for ( let n=0; n < this.cantidadNotas; n++) {
      let nota = this.notas[n];
      let dis = dist(nota.posX, nota.posY, this.Personaje.posX, this.Personaje.posY);
      if (dis< nota.tam/2+this.Personaje.tam/2) {
        /*  if (sonido(random(1)< 0,5)) {
         sonido1.play();
         } else {
         sonido2.play();
         }*/
        nota.reiniciarMovimiento(true)
          this.Puntuacion.puntos+= 1;
      }
    }
  }

  personajeGanaste() {
    if (this.Puntuacion.puntos >= 10 && this.tiempo.limite()) {
      this.estado = 2;   // estado = 2 para que funcione el reinicio
    } else if (this.Puntuacion.puntos < 10 && this.tiempo.limite()) {
      this.estado = 3;   // estado = 3 para que funcione el reinicio
    }
  }


  pantallaInicio () {
    background (0, 200, 0);
    image(imgPantallasJPG[0], 0, 0, 640, 480);
    push()
      textSize(20);
    textAlign(CENTER, CENTER);
    text("¡¡TOCÁ LA MELODIA PARA DORMIR A CERBERO!!", width/2, height/3)
      pop();
    push();
    textSize(15);
    textAlign(CENTER);
    text(" Usá <-  y  -> para moverte entre carriles. \ntocá las suficientes notas antes de que se acabe el tiempo \n Haz click para reiniciar", width/2, height/2);
    textSize(15);
  }

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
    this.Puntuacion = new Puntuacion(267, 0);
  }

  crearTiempo () {
    this.tiempo = new Tiempo(width*0.8, 20);  //crea y pasa info del tiempo
  }


  teclaPresionada(keyCode) {
    this.Personaje.teclaPresionada(keyCode); //le dice a personaje la tecla especial que se presiona
  }

  pantallaGanaste() {
    this.estado = 2;
    background (0, 200, 0);
    push()
      image(imgPantallasJPG[2], 0, 0, 640, 480);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("FELICITACI...", width/2, height/3)
      pop();
    push();
    textSize(20);
    textAlign(CENTER);
    text(" felicitaciones, Cerbero está dormido!! \nHaz click para iniciar", width/2, height/2);
    pop();
  }

  pantallaPerdiste() {
    this. estado = 3;
    background (0, 200, 0);
    image(imgPantallasJPG[1], 0, 0, 640, 480);
    push()
      textSize(20);
    textAlign(CENTER, CENTER);
    text("ESA NO LE GUSTÓ, DEBERIAS CORRER!! ", width/2, height/3)
      pop();
    push();
    textSize(15);
    textAlign(CENTER);
    pop();
  }


  pantallaCreditos() {
    background (120);
    push()
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Realizado por:", width/2, height/3)
      text("Ruben Dario Zapata legajo 88082/6- Cristobal Teruel legajo:122920/1", width/2, height/2)
      pop();
    push();
  }
}
