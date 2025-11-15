function Evento (texto_, x_, y_, width_, height_) {
  push();
  translate (x_, y_);
  fill(0, 0, 0, 30);
  rect (0, 0, width_, height_);
  fill(255);
  textAlign(CENTER, CENTER);
  textFont(Fuente);
  textSize(15);
  text(texto_, width_/2, height_/2);
  pop();
}


function dibujarBoton(texto_, x_, y_, width_, height_, ) {
  push();
  translate (x_, y_);
  fill(0, 0, 0, 80);
  rect (0, 0, width_, height_);
  fill(255);
  textAlign(CENTER, CENTER);
  textFont(Fuente);
  textSize(18);
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
