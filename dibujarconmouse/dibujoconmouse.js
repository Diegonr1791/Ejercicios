document.addEventListener("mousedown", valorInicial);
document.addEventListener("mouseup", terminar);
document.addEventListener("mousemove", dibujarMouse);

var cuadrito= document.getElementById("area_de_dibujo");
var papel= cuadrito.getContext("2d");

var x;
var y;
var iniciar;

dibujarLinea("black",0,0,300,0, papel);
dibujarLinea("black",300,0,300,300, papel);
dibujarLinea("black",0,0,0,300, papel);
dibujarLinea("black",0,300,300,300, papel);

function valorInicial (evento)
{
    x = evento.layerX;
    y = evento.layerY;
    iniciar = 1;
}

function terminar (evento)
{
  iniciar=0;
}

function dibujarMouse (evento)
{
  var colorcito ="blue";
  if(iniciar==1)
  {
    dibujarLinea(colorcito,x,y,evento.layerX,evento.layerY,papel);

    x = evento.layerX;
    y = evento.layerY;
  }
}

function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle =color;
  lienzo.lineWidth=3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}