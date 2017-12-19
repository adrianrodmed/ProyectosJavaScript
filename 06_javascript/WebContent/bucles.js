function buclefor(){
	for(i=0; i<10; i++){
		//window.alert(i);} //Con esto salen 9 ventanas emergentes.
		console.log(i);}
}
function comprobar(){
	console.log("Comprobando"); //Sirve para comprobar que funciona.
}
function texto(){
	var txt = document.getElementById("nombre");
	window.alert("El nombre introducido es: " + txt.value);
}