function validacion() 
{
	valor = document.getElementById("phone").value;
	
	if( isNaN(valor) ) 
	{
		document.getElementById('mensaje').innerHTML = "El telefono debe ser un numero!";
		limpiar();
		return false;
	}
	else    
	{
		if(this.value.length > 12) 
		{
			document.getElementById('mensaje-phone').innerHTML = "El telefono no debe tener mas de 12 digitos ";
			limpiar();
			return false;
		}
	}
	return true;
}