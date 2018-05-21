var imagenes=[];
imagenes["Vaca"]="vaca.png";
imagenes["Lobo"]="lobo.png";
imagenes["Cerdo"]="cerdo.png";

var coleccion=[];

coleccion.push(new Animales("Vaca",100,30));
coleccion.push(new Animales("Lobo",100,50));
coleccion.push(new Animales("Cerdo",120,40));

for (var a of coleccion)
{
	a.mostrar();
}