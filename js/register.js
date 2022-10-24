function validacion2()
{
    valorNombre2 = document.getElementById("nombre2").value;
    valorApellido2 = document.getElementById("apellido2").value;
    valorEmail2 = document.getElementById("email2").value;
    valorUser = document.getElementById("user").value;
    valorContraseña2 = document.getElementById("password2").value;
    valorConfirma2 = document.getElementById("confirm-password").value;

    if(valorNombre2 == null || valorNombre2.length < 3) {
        document.getElementById('mensaje-nombre2').innerHTML = "Tenes que completar el Nombre!";
        elemento = document.getElementById('nombre2');
        elemento.focus();
        return false;
    }
    document.getElementById('mensaje-email2').innerHTML = "";

    if(valorApellido2 == null || valorApellido2.length < 3) {
        document.getElementById('mensaje-apellido2').innerHTML = "Tenes que completar el Apellido!";
        elemento = document.getElementById('apellido2');
        elemento.focus();
        return false;
    }
    document.getElementById('mensaje-apellido2').innerHTML = "";
  
    if(!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(valorEmail2))) {
        document.getElementById('mensaje-email2').innerHTML = "No es una direccion de email correcta" ;
        elemento = document.getElementById('email2');
        elemento.focus();
            
        return false;
    }
    document.getElementById('mensaje-email2').innerHTML = "";

    if(valorUser == null || valorUser.length < 3) {
        document.getElementById('mensaje-usuario').innerHTML = "Tenes que completar el Usuario!";
        elemento = document.getElementById('user');
        elemento.focus();
        return false;
    }   
    document.getElementById('mensaje-usuario').innerHTML = "";

    if(valorContraseña2 == null || valorContraseña2.length < 3) {
        document.getElementById('mensaje-contraseña2').innerHTML = "Tenes que ingresar una contraseña!";
        elemento = document.getElementById('password2');
        elemento.focus();
        return false;
    }
    document.getElementById('mensaje-contraseña2').innerHTML = ""
    
    if(valorConfirma2 == null || valorConfirma2.length < 3) {
        document.getElementById('mensaje-confirma-contraseña2').innerHTML = "Tenes que confirmar la contraseña!";
        elemento = document.getElementById('confirm-password');
        elemento.focus();
        return false;
    }
    document.getElementById('mensaje-confirma2').innerHTML = "";

    return true;
}
