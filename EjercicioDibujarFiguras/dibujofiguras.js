var d=document.getElementById("dibujoFigura");
var lienzo=d.getContext("2d");
var ancho=d.width;
var figura=document.getElementById("figura");
var cantLineas=document.getElementById("cantntidad_lineas");
var boton=document.getElementById("botoncito");
boton.addEventListener("click", dibujoFiguraPorClick);

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle=color;
lienzo.moveTo(xinicial,yinicial);
lienzo.lineTo(xfinal,yfinal);
lienzo.stroke();
lienzo.closePath();
}

function dibujoFiguraPorClick()
{

var lineas=parseInt(cantidad_lineas.value);

var l=0;
var xi,xf;
var colorcito= getRandomColor();
var espacio=(ancho/2)/lineas;
//Armamos la Figura de la Malla
if(figura.value=="malla" || figura.value=="Malla" || figura.value=="1")
{	

	for(l=0;l<lineas;l++)
	{
		
		yi=espacio*l;
		xf=espacio*(l+1);

		dibujarLinea(colorcito,0,yi,xf,600);
	}	
} 
//Armamos la Figura del Cuadrado
else if (figura.value=="cuadrado" || figura.value=="Cuadrado" || figura.value=="2")
{
	for(l=0;l<lineas;l++)
	{
	
		colorcito=getRandomColor();
		dibujarLinea(colorcito,0+(espacio*l),0+(espacio*l),0+(espacio*l),600-(espacio*l));
		
	}
	for(l=0;l<lineas;l++)
	{
		 colorcito=getRandomColor();
		dibujarLinea(colorcito,0+(espacio*l),600-(espacio*l),600-(espacio*l),600-(espacio*l));
	}	
	for(l=0;l<lineas;l++)
	{
		 colorcito=getRandomColor();
		dibujarLinea(colorcito,600-(espacio*l),0+(espacio*l),0+(espacio*l),0+(espacio*l));
	}	
	for(l=0;l<lineas;l++)
	{
		colorcito=getRandomColor();
		dibujarLinea(colorcito,600-(espacio*l),0+(espacio*l),600-(espacio*l),600-(espacio*l));
	}		
}
//Armamos la Figura de la estrella
else if (figura.value=="estrella" || figura.value=="Estrella" || figura.value=="3")
{
	for(l=0;l<lineas;l++)
	{
	
		dibujarLinea(colorcito,0+(espacio*l),150+(espacio*l),600-(espacio*l),150+(espacio*l));
		
	}
	
	for(l=0;l<lineas;l++)
	{
	
		dibujarLinea(colorcito,300+((espacio*l)/2),0+(espacio*l),1+(espacio*l),600-((espacio*l)/2));
	}
		
	for(l=0;l<lineas;l++)
	{
		dibujarLinea(colorcito,300-((espacio*l)/2),0+(espacio*l),599-(espacio*l),600-((espacio/2)*l));
	}
	/*	
	for(l=0;l<lineas;l++)
	{
		
		dibujarLinea(colorcito,600-(espacio*l),0+(espacio*l),600-(espacio*l),600-(espacio*l));
	}	*/	
}

}
//--------------------------------------
//Funciones para obtener un color random
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}
//--------------------------------------