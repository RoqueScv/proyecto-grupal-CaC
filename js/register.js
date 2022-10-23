function validacion()

                        {
                            valorNombre = document.getElementById("nombre").value;
                            valorApellido = document.getElementById("apellido").value;
                            valorEmail = document.getElementById("email").value;
                            valorContraseña = document.getElementById("Contraseña").value;
                            valorConfirma = document.getElementById("confirma contraseña").value;
                            valorTelefono = document.getElementById("telefono").value;


                            if(valorNombre == null || valorNombre.length < 3) {
                                document.getElementById('mensaje-nombre').innerHTML = "Tenes que completar el Nombre!";
                                elemento = document.getElementById('nombre');
                                elemento.focus();
                                return false;
                            }   
                            if(valorApellido == null || valorApellido.length < 3) {
                                document.getElementById('mensaje-apellido').innerHTML = "Tenes que completar el Apellido!";
                                elemento = document.getElementById('apellido');
                                elemento.focus();
                                return false;
                            }   
                          
                            }
                            document.getElementById('mensaje-email').innerHTML = "";
                            if(!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(valorEmail))) {
                                document.getElementById('mensaje-email').innerHTML = "No es una direccion de email correcta" ;
                                        
                                elemento = document.getElementById('email');
                                elemento.focus();
                                    
                                return false;
                            }
                            document.getElementById('mensaje-contraseña').innerHTML = ""
                            if(valorAsunto == null || valorAsunto.length < 3) {
                                document.getElementById('mensaje-contraseña').innerHTML = "Tenes que ingresar una contraseña!";
                                elemento = document.getElementById('contraseña');
                                elemento.focus();

                                return false;
                            }

                            document.getElementById('mensaje-confirma').innerHTML = "";
                            if(valorMensaje == null || valorMensaje.length < 3) {
                                document.getElementById('mensaje-confirma').innerHTML = "Tenes que confirmar la contraseña!";
                                elemento = document.getElementById('confirma');
                                elemento.focus();

                                return false;
                            }

                            document.getElementById('mensaje-telefono').innerHTML = "";
                            if(isNaN(valorTelefono) || valorTelefono.length > 12 || valorTelefono.length < 8 ) {
                                document.getElementById('mensaje-telefono').innerHTML = "El telefono debe ser un numero de 8-12 cifras!";
                                elemento = document.getElementById('telefono');
                                elemento.focus();
                                
                                return false;
                            }

                            document.getElementById('mensaje-mensaje').innerHTML = "";
                                return true;
                        

