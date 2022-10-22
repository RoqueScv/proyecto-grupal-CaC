{
    valorNombre = document.getElementById("nombre").value;
    valorTelefono = document.getElementById("telefono").value;
    valorEmail = document.getElementById("email").value;
    valorContraseña = document.getElementById("Contraseña").value;
    valorConfirma = document.getElementById("confirma contraseña").value;

    if(valorNombre == null || valorNombre.length < 3) {
        document.getElementById('mensaje-nombre').innerHTML = "Tenes que completar el Nombre!";
        elemento = document.getElementById('nombre');
        elemento.focus();
        return false;
    }   
    document.getElementById('mensaje-nombre').innerHTML = "";
    if(isNaN(valorTelefono) || valorTelefono.length > 12 || valorTelefono.length < 8 ) {
        document.getElementById('mensaje-telefono').innerHTML = "El telefono debe ser un numero de 8-12 cifras!";
        elemento = document.getElementById('telefono');
        elemento.focus();
        
        return false;
    }
    document.getElementById('mensaje-telefono').innerHTML = "";
    if(!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(valorEmail))) {
        document.getElementById('mensaje-email').innerHTML = "No es una direccion de email correcta" ;
                
        elemento = document.getElementById('email');
        elemento.focus();
            
        return false;
    }
    document.getElementById('mensaje-email').innerHTML = ""
    if(valorAsunto == null || valorAsunto.length < 3) {
        document.getElementById('mensaje-asunto').innerHTML = "Tenes que completar el Asunto!";
        elemento = document.getElementById('asunto');
        elemento.focus();

        return false;
    }
    document.getElementById('mensaje-asunto').innerHTML = "";
    if(valorMensaje == null || valorMensaje.length < 3) {
        document.getElementById('mensaje-mensaje').innerHTML = "Tenes que completar el Mensaje!";
        elemento = document.getElementById('message');
        elemento.focus();

        return false;
    }
    document.getElementById('mensaje-mensaje').innerHTML = "";
return true;
}

