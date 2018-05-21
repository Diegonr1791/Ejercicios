var caja=[];
var billetesentregados=[];
var boton=document.getElementById("btnDinero");
	boton.addEventListener("click", entregarDinero);
	var dinero;
	var resutado= document.getElementById("resultado");

//var dinero=3200;
var div;

caja.push(new Billete(500,10));
caja.push(new Billete(200,15));
caja.push(new Billete(100,10));

function entregarDinero ()
{
	var t=document.getElementById("dinero_retirar")
	dinero=parseInt(t.value);

for (var b  of caja)
{
		

	if (dinero>0) 
	{
		
		div=Math.floor(dinero / b.valor);
		
		if (div>b.cantidad) 
		{
			papeles=b.cantidad;
		}
		else
		{
			papeles=div;
		}

		billetesentregados.push(new Billete(b.valor,papeles) );
		dinero= dinero-(b.valor*papeles);
	}

}

if (dinero> 0) 
{
	resultado.innerHTML="Solo se puede retirar valores de centena";

}
else
{
	for(var e of billetesentregados)
	{
		if (e.cantidad>0)
		{
		resultado.innerHTML += e.cantidad + " Billetes de $" + e.valor + "<br />";
	}
	}

}

}