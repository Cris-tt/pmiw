/*
Cristóbal Teruel      legajo: 122920/1
 link: https://youtu.be/x7k-Mgb1Zk0
 
 */

let imagen;
function preload() {
  imagen = loadImage("./refs/M_6.jpg");
}
function setup() {
  createCanvas(800, 400);
}


function draw() {
  if (grilla == true) {
    background (255);
    translate (400, 0);
    grillas();
    resetMatrix();
    image (imagen, 0, 0, 400, 400);
  } else {
    translate (400, 0);
    marco(100, 55, 120, 400*2);
    resetMatrix();
    image (imagen, 0, 0, 400, 400);
  }
}
