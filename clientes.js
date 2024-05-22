
//Elementos HTML
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

//Expresiones regulares
let soloNumeros = /^[1-9]\d{9}$/; //no empieza con 0 y tiene 10 digitos
let campoEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //campo email




function validar(  ){
    //Remuevo class error de todos los campos
   removerError();
    //Creo array de errores 
    let errores = [];
    //Verificacion de campos
    let nombre = txtNombre.value.trim(); //por js
    let apellido = txtApellido.value.trim(); // por js
    let dni = txtDni.value.trim(); //ER
    let email = txtEmail.value.trim(); //ER
    let telefono = txtTelefono.value.trim(); //ER
    let mensaje = txtMensaje.value.trim(); //por html
    

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
    
       if(mensaje.length == 0) {
        errores.push("Falta el mensaje");
        txtMensaje.classList.add("error");
       } else if(txtMensaje.length > 400) {
        errores.push("Mensaje muy largo (400 caracteres)");
        txtMensaje.classList.add("error");
       } 

       if(isNaN(dni) || dni.length >6) {
        errores.push("El Dni deben ser campos numericos y mas de 6 digitos");
        txtDni.classList.add("error");
       } 

       //Validaciones por medio de ER
       if ( !campoEmail.test(email) ) {
        errores.push("El campo Email debe contener un Email valido");
        txtEmail.classList.add("error");
       }
    
       if ( !soloNumeros.test(telefono) )  {
        errores.push("El campo telefono debe contener 10 digitos y no comenzar con 0");
        txtTelefono.classList.add("error");
       }

       //Mostrar errores en lista
       if ( hayErrores( errores ) ) {
        //Muestro mensajes de error
        console.log("f");
       }else{
        //Oculto form y muestro datos
        console.log("v");
       }
       

return false; //Devuelvo false xq no envio datos a DB

}

function removerError(){ //Remueve errores de los campos HTML
    
    listaValidaciones.innerHTML=''; //Limpio la lista de fallas
    //Remuevo class error de todos los campos
    txtNombre.classList.remove('error');
    txtApellido.classList.remove('error');
    txtDni.classList.remove('error');
    txtEmail.classList.remove('error');
     txtTelefono.classList.remove('error');
     txtMensaje.classList.remove('error');
}

function hayErrores( errores ){
    if (errores.length === 0) {
        return false;
    }else{
        for(let err of errores) {
            let li = document.createElement("li");
            li.innerHTML = err;
            listaValidaciones.appendChild(li);
           }
           return true;
    }
}

document.addEventListener('DOMContentLoaded', function() {//Primera carga sin .error
    let errorFields = document.querySelectorAll('.error');
    errorFields.forEach(function(field) {
        field.classList.remove('error')
    })
    });

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