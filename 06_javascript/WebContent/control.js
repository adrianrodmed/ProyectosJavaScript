function comprobar(){
	var primo = window.prompt("Dime número primo del 1 al 10 jefazo");
	if(primo == 0){
		window.alert("¿No sabes leer? del 1 al 10 bocachancla");}
	if(primo == 1||primo==2||primo==3||primo==5||primo==7){
		window.alert("Lo has conseguido máquina");}
	else{
		window.alert("Eres un cojo");}
}

function viajar(){
	var lugar = window.prompt("Dime dónde quieres viajar:");
	switch(lugar){
	case "Roma":
	case "roma":
		window.alert("Roma cuesta 500€ por persona");
		break;
	case "Paris":
	case "paris":
	case "París":
	case "parís":
		window.alert("París cuesta 450€ por persona");
		break;
	case "Berlin":
	case "berlin":
		window.alert("Berlin cuesta 387.56€ por persona");
		break;
	default:
		window.alert("Pide presupuesto de " + lugar + " en nuestra Web.");}
}//Esto también se podría hacer con if y else. Es para ver el ejemplo de que también funciona.