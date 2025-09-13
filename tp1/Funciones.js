function espar(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function marco(cant, x_, y_, cuadMax) {
  push();
  translate(x_, y_);
  for (let i=0; i<cant; i++) {
    if (espar(i)) {
      fill(blanco);
    } else {
      fill(negro);
    }
    scale(0.9, 0.9);
    rotate(QUARTER_PI/90);
    rectMode(CENTER);
    rect (0, 0, cuadMax, cuadMax);
  }
  pop();
}

let columnas = 5;
let filas = 5;
function grillas() {
  translate (35, 35)
    for (let i=0; i<columnas; i++) {
    for (let o=0; o<filas; o++) {
      let a = 400/columnas;
      let b = 400/filas;
      marco (100, i*a, o*b, a);
    }
  }
}
