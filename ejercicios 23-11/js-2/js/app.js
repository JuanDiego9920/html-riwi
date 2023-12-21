/*var allPersons = [];

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

}*/
var allPersons = [];

function guardarPersona() {
    let formNombre = document.getElementById('nombres').value;
    let formApellido = document.getElementById('apellidos').value;
    let formCorreo = document.getElementById('correo').value;

    let persona = {
        nombre: formNombre,
        apellido: formApellido,
        correo: formCorreo
    }

    allPersons.push(persona);
    console.log(allPersons);

    // Llamar a la función para actualizar la tabla
    actualizarTabla();
}

function actualizarTabla() {
    // Obtener el cuerpo de la tabla
    let tablaCuerpo = document.getElementById('tabla-personas');

    // Limpiar el contenido actual de la tabla
    tablaCuerpo.innerHTML = '';

    // Iterar sobre la lista de personas y agregarlas a la tabla
    allPersons.forEach(persona => {
        let fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${persona.nombre}</td>
            <td>${persona.apellido}</td>
            <td>${persona.correo}</td>
            <td><a href="" class="btn btn-danger btn-sm">Eliminar</a></td>
        `;
        tablaCuerpo.appendChild(fila);
        document.getElementById('nombres').value="";
        document.getElementById('apellidos').value="";
        document.getElementById('correo').value="";
    });
}





