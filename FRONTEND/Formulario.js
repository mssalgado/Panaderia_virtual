function validar() {
	var user = document.getElementById("nombre_usiario");
	var email = document.getElementById("email");
	var pass1 = document.getElementById("Password1");
	var pass2 = document.getElementById("Password2");
	var seleccionado = false;
	var Barrio = document.getElementById("Barrio");
	

	if(nombre_usuario.value.length == 0)
	{
      alert("Debe ingresar el Usuario");
    	user.focus();
    	return false;
	}
	if(email.value.length == 0)
	{
		alert("Por favor, ingrese su Email");
		email.focus();
		return false;
	}
	if(pass1.value.length < 6)
	{
		alert("Debe ingresar una contraseña de más de 6 caracteres");
		pass1.focus();
		return false;
	}
	else if(pass1.value != pass2.value)
	{
		alert("Las contraseñas no coinciden");
		pass2.focus();
		return false;
	}
	if(Ciudad == 0 || Ciudad == null)
	{
		alert("Por favor, indique su Ciudad de residencia");
		return false;
	}
	
	if(Barrio == 0 || Barrio == null)
	{
		alert("Por favor, indique su Barrio de residencia");
		return false;
	}
	
  else
  {
    alert("Datos de formulario enviados exitosamente.");
    document.getElementById("myForm").reset();
	  return false;
	}
}