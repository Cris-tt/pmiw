function Evento (texto_, x_, y_, width_, height_) {
  push();
  translate (x_, y_);
  fill(255, 255, 255, 80);
  rect (0, 0, width_, height_);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(15);
  text(texto_, width_/2, height_/2);
  pop();
}


function dibujarBoton(texto_, x_, y_, width_, height_, ) {
  push()
    translate (x_, y_);
  fill(255, 255, 255, 80);
  rect (0, 0, width_, height_);
  fill(255);
  textAlign(CENTER, CENTER);
  text(texto_, width_/2, height_/2);
  pop();
}

function colisionRectangular(x_, y_, ancho_, alto_) {
  if (mouseX > x_  && mouseX < x_ + ancho_ && mouseY > y_ && mouseY < y_ + alto_)
  {
    return true;
  } else {
    return false;
  }
  pop();
}




/*
los valores que habiamos definido para los botones:
 Botón1 = mouseX > width*0.7 & mouseX< width-20 & mouseY> height*0.8 & mouseY < height-20 ;
 Botón2 = mouseX > width*0.02 & mouseX< width-20 & mouseY> height*0.8 & mouseY < height-20 ;
 
 dibujarBoton("hola", width*0.7, height*0.8, 180, 80);
 dibujarBoton("holant", width*0.0, height*0.8, 180, 80);
 
 
            /*fill (0, 255, 0);
 rect(width*0.7, height*0.8, 180,  80);
 pop();
 push();
 fill (255, 0, 0);
 rect(width*0.02, height*0.8, 180, 80);*/
