
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

// formulario.addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita el envío del formulario y el refresco de la página
//     validar();
// });


function validar(  ){
    console.log('ejecutando validar');
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
    let nombre = txtNombre.value.trim(); //por js
    let apellido = txtApellido.value.trim(); // por js
    // txtFechaNacimiento.value.trim(); //por html
    let dni = txtDni.value.trim(); //ER
    //let genero = txtGenero.value.trim(); //por html
    let email = txtEmail.value.trim(); //ER
    let telefono = txtTelefono.value.trim(); //ER
    //let mensaje = txtMensaje.value.trim(); por html
    //Expresiones regulares
    let soloNumeros = '^\d+$';
     let campoEmail = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';

    //Validaciones por medio de JS
    if(nombre.length == 0) {
        errores.push("Falta el nombre");
        txtNombre.classList.add("error");
       } else if(txtNombre.length > 9) {
        errores.push("Nombre muy largo (9 caracteres)");
        txtNombre.classList.add("error");
       }

       if(apellido.length == 0) {
        errores.push("Falta el apellido");
        txtApellido.classList.add("error");
       } else if(txtApellido.length > 9) {
        errores.push("Apellido muy largo (9 caracteres)");
        txtApellido.classList.add("error");
       }

       if(!isNaN(dni)) {
        errores.push("El Dni deben ser campos numericos");
        txtDni.classList.add("error");
       } 

    //    if ( !campoEmail.test(email) ) {
    //     errores.push("El campo Email debe contener un Email valido");
    //     txtEmail.classList.add("error");
    //    }
    
    //    if ( !soloNumeros.test( telefono ) ) {
    //     errores.push("El campo telefono debe contener solo numeros");
    //     txtTelefono.classList.add("error");
    //    }

       //Mostrar errores en lista
       for(let err of errores) {
        let li = document.createElement("li");
        li.innerHTML = err;
        listaValidaciones.appendChild(li);
       }
return false;

}

// botonAceptar.addEventListener('submit', function (event) {
    
//     event.preventDefault();
    

//     let cliente = {
//         nombre: nombre,
//         apellido: apellido,
//         fechaNacimiento: fechaNacimiento,
//         dni: dni,
//         genero: genero,
//         email: email,
//         telefono: telefono,
//         mensaje: mensaje

//     }
//     clientes.push( cliente );
//     alert("Sus datos se registraron correctamente");
//     //Guardamos los datos para que no se pierdan al redirigir
//     sessionStorage.setItem('clientes', JSON.stringify(clientes));
//     // Redirigimos a pagina ppal
//     window.location.href = './paginaPrincipal.html';

// })



// function verClientes(){

//     let storedClientes = sessionStorage.getItem('clientes');
// if (storedClientes) {
//     let clientesArray = JSON.parse(storedClientes);
//     console.log(clientesArray);
// }
//     console.log({clientes});

// }


