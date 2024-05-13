

//Fotos de carrousel
let carrousel = ['./Imagenes/Carrusel/carrusel_001.jpg',
'./Imagenes/Carrusel/carrusel_002.jpg',
'./Imagenes/Carrusel/carrusel_003.jpg',
'./Imagenes/Carrusel/carrusel_004.jpg',
'./Imagenes/Carrusel/carrusel_005.jpg'];

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
