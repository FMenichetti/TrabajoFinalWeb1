
// function crearLista(){
//     if ( clientes = undefined ) {
//     let clientes = [];
// }
// }

let botonAceptar = document.getElementById('btnAceptar');
let txtNombre = document.getElementById('txtNombre')
let txtApellido = document.getElementById('txtApellido');
let txtFechaNacimiento = document.getElementById('calendario');
let txtEdad = document.getElementById('txtEdad');
let txtDni = document.getElementById('txtDni');
let txtGenero = document.getElementById('rbGenero');
let txtEmail = document.getElementById('txtEmail');
let txtTelefono = document.getElementById('txtTelefono');
let txtMensaje = document.getElementById('txtMensaje');
let listaValidaciones = document.getElementById("lstValidaciones");


function validar(){
    listaValidaciones.innerHTML=''; //Limpio la lista de fallas
    //Remuevo class error de todos los campos
    txtNombre.classList.remove('error');
    txtApellido.classList.remove('error');
    txtFechaNacimiento.classList.remove('error');
    txtDni.classList.remove('error');
    txtGenero.classList.remove('error');
    txtEmail.classList.remove('error');
    txtTelefono.classList.remove('error');
    txtMensaje.classList.remove('error');
    //Creo array de errores 
    let errores = [];
    //Verificacion de campos
    

}

botonAceptar.addEventListener('submit', function (event) {
    
    event.preventDefault();
    

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
    alert("Sus datos se registraron correctamente");
    //Guardamos los datos para que no se pierdan al redirigir
    sessionStorage.setItem('clientes', JSON.stringify(clientes));
    // Redirigimos a pagina ppal
    window.location.href = './paginaPrincipal.html';

})



// function verClientes(){

//     let storedClientes = sessionStorage.getItem('clientes');
// if (storedClientes) {
//     let clientesArray = JSON.parse(storedClientes);
//     console.log(clientesArray);
// }
//     console.log({clientes});

// }


