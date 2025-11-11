class Juego {
  constructor(cantidadNotas) {  //si le pasas cantidad te dibuja las notas

    this.cantidadNotas = cantidadNotas;  //hace que el numero se le asigne a un this

    this.crearNotas();    //llama a crear notas

    this.crearPersonaje(); //llama a crear personaje

    this.crearCarriles();
  }

  dibujar() {
    this.Personaje.dibujar();
    for (let i=0; i< this.cantidadNotas; i++) {   //ciclo for para hacer más de una nota con la misma info
      this.notas[i].dibujar();
 
    
    }
  }

  iniciar() {
  }

  crearNotas() {    // funcion para crear las notas
    this.notas = [];
    for (let i=0; i<10; i++) {
      this.notas[i] = new Nota(i*20, 100); // crea las notas con ciclo for y pasa datos para su ubicacion
    }
  }
  crearPersonaje() { //funcion para crear personajes
    this.Personaje = new Personaje(width/2, 300);  //crea y pasa info de su ubicacion
  }
  crearCarriles() { //funcion para crear carriles
    this.Carril = [];
    for (let O=0; O<3; O++) { //ciclo for para pasar la info de los carriles y crear 3
      this.Carril = new Carril(O*20, 0);
    }
  }
 
 moverNota() {
   this.nota.mover(true)
 }
  
    personajeGano() {
    }
    personajePierde() {
    }
  }
