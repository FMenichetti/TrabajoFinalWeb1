
let clientes = [];
let botonAceptar = document.getElementById('idFormulario')

botonAceptar.addEventListener('submit', function (event) {
    
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    let dni = document.getElementById("dni").value;
    let genero = document.getElementById("genero").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;

    let cliente = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento,
        dni: dni,
        genero: genero,
        email: email,
        telefono: telefono,
        mensaje: mensaje

    }
    clientes.push( cliente );

})

console.log({clientes});
