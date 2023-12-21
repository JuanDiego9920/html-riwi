var allPersons = [];

function guardarPersona(){
    let formNombre = document.getElementById('nombres').value;
    let formApellido = document.getElementById('apellidos').value;
    let formCorreo = document.getElementById('correo').value;

    let persona = {
        nombre : formNombre,
        apellido : formApellido,
        correo :formCorreo
    }
    
    allPersons.push(persona)
    console.log(allPersons);

}





