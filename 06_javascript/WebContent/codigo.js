var nombre= "Juan";
function variables(){
	console.log('Llamada a función variables');
	var numero = 4;
	numero = 6;
	console.log('El número es ' + numero);
	console.log('Te llamas ' + nombre);
	//var solucion;
	if(numero>=3){
		var solucion = "OK";} //Con let solucion ="OK";} no funciona //Para solucionar esto se declara la variable fuera del if
	console.log(solucion);
	var mensaje="En un lugar\nde la \"Mancha\"";
	window.alert(mensaje);
}