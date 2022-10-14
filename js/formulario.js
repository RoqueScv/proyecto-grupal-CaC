function validacion() 
{
	valor = document.getElementById("phone").value;
	
	if( isNaN(valor) ) 
	{
		document.getElementById('mensaje').innerHTML = "La edad debe ser un numero!";
		limpiar();
		return false;
	}
	else    
	{
		if( valor < 0 || valor > 130 ) 
		{
			document.getElementById('mensaje').innerHTML = "La edad debe estar entre 0 y 130 años!";
			limpiar();
			return false;
		}
	}
	return true;
}