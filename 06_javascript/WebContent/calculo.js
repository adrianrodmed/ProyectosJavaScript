function calcular(){
	var unidad = document.getElementById("unidades");
	var precio = document.getElementById("precio");
	var solucion;
	if(parseFloat(unidad.value)>=0){
		solucion = parseFloat(unidad.value)*parseFloat(precio.value);}
	window.alert(solucion);
}