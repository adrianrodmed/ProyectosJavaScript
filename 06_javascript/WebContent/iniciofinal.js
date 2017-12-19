function mostrar(){
	var inicio = document.getElementById("inicio");
	var final = document.getElementById("final");
	if(parseInt(inicio.value)<parseInt(final.value)){
		for(i=parseInt(inicio.value); i<=parseInt(final.value); i++){
		window.alert(i);}
		//console.log(i);}
		}
	else{
		window.alert("Introduzca un inicio menor que el final");}
		//console.log("Introduzca un inicio menor que el final");}
}