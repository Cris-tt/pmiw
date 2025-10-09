function inicio () {
  push();
  fill(255);
  image(imagen[00], 0, 0, width, height);
  textAlign(CENTER, CENTER);
  fill(255,0,0);
  textSize(20);
  text("Haga click para empezar", width/2, height/2);
  pop();
}


function dibujarBoton(texto_, x_, y_, width_, height_, ) {
  push()
    translate (x_, y_);
  fill(0, 255, 100);
  rect (0, 0, width_, height_);
  fill(255);
  textAlign(CENTER, CENTER);
  text(texto_, width_/2, height_/2);
  pop()
}

function colicionesRect(x_, y_, widht_, height_) {
  if (mouseX > x_ && mouseX< width_ && mouseY> y_ && mouseY < height_) {
    return true;
  } else {
    return false;
  }
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
 
