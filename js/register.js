function validacion2()
{
    valorNombre = document.getElementById("nombre2").value;
    valorApellido = document.getElementById("apellido2").value;
    valorEmail = document.getElementById("email2").value;
    valorContraseña = document.getElementById("password2").value;
    valorConfirma = document.getElementById("confirma-contraseña2").value;
    valorTelefono = document.getElementById("telefono2").value;


    if(valorNombre == null || valorNombre.length < 3) {
        document.getElementById('mensaje-nombre').innerHTML = "Tenes que completar el Nombre!";
        elemento = document.getElementById('nombre2');
        elemento.focus();
        return false;
    }   

    if(valorApellido == null || valorApellido.length < 3) {
        document.getElementById('mensaje-apellido').innerHTML = "Tenes que completar el Apellido!";
        elemento = document.getElementById('apellido2');
        elemento.focus();
        return false;
    }   
  
    
    
    if(!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(valorEmail))) {
        document.getElementById('mensaje-email').innerHTML = "No es una direccion de email correcta" ;
                
        elemento = document.getElementById('email2');
        elemento.focus();
            
        return false;
    }
    document.getElementById('mensaje-email2').innerHTML = "";
   
    if(valorAsunto == null || valorAsunto.length < 3) {
        document.getElementById('mensaje-contraseña').innerHTML = "Tenes que ingresar una contraseña!";
        elemento = document.getElementById('password2');
        elemento.focus();
        return false;
    }
    document.getElementById('mensaje-contraseña2').innerHTML = ""
    
    if(valorMensaje == null || valorMensaje.length < 3) {
        document.getElementById('mensaje-confirma').innerHTML = "Tenes que confirmar la contraseña!";
        elemento = document.getElementById('confirm-password2');
        elemento.focus();
        return false;
    }
    document.getElementById('mensaje-confirma2').innerHTML = "";

    if(isNaN(valorTelefono) || valorTelefono.length > 12 || valorTelefono.length < 8 ) {
        document.getElementById('mensaje-telefono').innerHTML = "El telefono debe ser un numero de 8-12 cifras!";
        elemento = document.getElementById('telefono2');
        elemento.focus();
        
        return false;
    }
    document.getElementById('mensaje-telefono2').innerHTML = "";
        return true;
                        

}
