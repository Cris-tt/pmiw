let grilla;
let blanco = 255;
let negro = 0;
function keyPressed () {
  print("apretar v para reinciar variables");
  print("apretar r para resetear el dibujo");
  print("apretar mouse para invertir colores");
  print("apretar g para activar grilla");
  print("apretar r para desactivar grilla");
  print("apretar c para colores aleatorios");
  if (key ==='g') {
    grilla = true;
  } else if (key =='r') {
    grilla = false;
  }
  if (key ==='c') {
    blanco = color(random(255), random(255), random(255));
    negro  = color(random(255), random(255), random(255));
  }
  if (key=== 'z') {
    columnas = 5+1;
  } else if (key == 'x') {
    filas = 5+1;
  }
  if (key==='v') {
    columnas = 5;
    filas = 5;
    blanco = 255;
    negro = 0;
  }
}
function mousePressed () {
  if ((blanco === 255)&&(negro===0)) {
    blanco = 0;
    negro = 255;
  } else {
    blanco = 255;
    negro = 0;
  }
}
