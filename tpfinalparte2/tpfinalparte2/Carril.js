class Carril {  //carril de fondo para las notas
     constructor(posX, posY){
    this.posX;
    this.posY;
    this.miColor = color(0);  //color negro
   }
   dibujar(){
     push();
     fill(this.miColor);
     rect(this.posX, this.posY, width/4, height);   //le digo que la dibuje de 1/4 de largo y con sobrante de 20 px
     pop();
   }
}
