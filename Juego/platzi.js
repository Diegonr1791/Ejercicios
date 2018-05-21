
var vp = document.getElementById("villaplatzi");//otengo el cambas del html a traves del id 
var papel = vp.getContext("2d");// obtengo el contexto 2d osea el papel donde voy a dibujar todo(lienzo)
document.addEventListener("keydown",movimientoLobo)

//--------------------------------------------------------------------------------------------------------
// DECLARAMOS LOS OBJETOS JSON QUE UTILIZAREMOS 

var fondo = {       //declaro un bojeto tipo JSON (javascript object notation) 
  url: "tile.png",  //declaro y guardo la ruta de la imagen 
  cargaOK: false    //inicializo la variable cargaOK en falso
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var lobo = {
  url: "lobo.png",
  cargaOK: false
};

var xlobo=150;// creamos las coordenadas donde aparecera el objeto lobo
var ylobo=150;
//--------------------------------------------------------------------------------------------------------

var cantidad = aleatorio(1, 10); //genero un numero aleatorio y lo guardo en la variable cantidad
//--------------------------------------------------------------------------------------------------------
// CARGAMOS LOS EVENTOS LISTENER DE CADA OBJETO A DIBUJAR
fondo.imagen = new Image();  //creo una nueva intancia del objeto imagen y lo guardo en la variable imagen del objeto fondo
fondo.imagen.src = fondo.url; //en la variable fondo.imagen.src guardo la ruta de la imagen que se encuentra en fondo.url 
fondo.imagen.addEventListener("load", cargarFondo); //llamo al escuchador de eventos y le paso el evento load para que cargue el objeto y le paso la funcion cargarFondo

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos)

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo)



//--------------------------------------------------------------------------------------------------------
// CREAMOS LAS FUNCIONES PARA CARGAR CADA OBJETO
function cargarFondo() // la funcion  pasa la variable carga a true y quiere decir que el objeto se ha cargado 
{
  fondo.cargaOK = true;
  dibujar();            // llamo a la funcion dibujar apra que dibuje la imagen ya cargada
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarLobo()
{
  lobo.cargaOK = true;
  dibujar();
}

//--------------------------------------------------------------------------------------------------------
// CREAMOS LA FUNCION DIBUJAR PARA COLOCAR LOS OBJETOS EN EL CAMBAS
function dibujar() 
{

  if(fondo.cargaOK) // veifico que al llamar la funcion dibujar el fonfo.cargaOk sea true
  {
    papel.drawImage(fondo.imagen, 0, 0); // si es true se carga la imagen(fondo.imagen) en las coordenadas 0,0 
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad + "Vacas");
    for(var v=0; v < cantidad; v++) // generamos vacas al azar en lugar y numero randoms
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }

   if(cerdo.cargaOK)
  {
    console.log(cantidad + "Cerdos");
    for(var c=0; c < cantidad; c++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }

    if(lobo.cargaOK)
  {
      papel.drawImage(lobo.imagen, xlobo, ylobo);
    }
  }

//--------------------------------------------------------------------------------------------------------
// CREAMOS LA FUNCION PARA DARLE MOVIMIENTO AL OBJETO LOBO


function movimientoLobo(evento)
{

  var mov= 30;

  var teclas=
  {
  UP:38,
  DOWN:40,
  RIGHT:39,
  LEFT:37
  }

  switch (evento.keyCode) 
  {
    case teclas.UP:
      ylobo=ylobo-mov;
      dibujar(lobo.imagen,xlobo,ylobo)
      break;

      case teclas.DOWN:
      ylobo=ylobo+mov;
      dibujar(lobo.imagen,xlobo,ylobo)
      break;

      case teclas.RIGHT:
      xlobo=xlobo+mov;
      dibujar(lobo.imagen,xlobo,ylobo)
      break;

      case teclas.LEFT:
      xlobo=xlobo-mov;
      dibujar(lobo.imagen,xlobo,ylobo)
      break;
    default:
      // statements_def
      break;
  }

}

//--------------------------------------------------------------------------------------------------------
// CREAMOS LA FUNCION PARA OBTENER UN NUMERO ALEATORIO QUE USAREMOS
function aleatorio(min, maxi) // funcion para obtener un numero aleatorio
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}