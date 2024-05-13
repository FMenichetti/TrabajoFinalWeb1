


let carrousel= ['./Imagenes/logo.png', './Imagenes/sobreNosotros.jpeg', './Imagenes/web_en_construccion.jpg'];
let indice = 0;

function cambiarImagen( num ){
    indice += num;
    if ( indice < 0 ) { // Si es menor que cero vulvo al final
        indice = carrousel.length -1;
    }else if( indice >= carrousel.length ){ // si es mayor que el largo del array, voy a cero
        indice = 0;
    }
    document.getElementById('actual').src = carrousel[indice]; //Cambia el indice de imagen
}
