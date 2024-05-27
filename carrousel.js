

//Fotos de carrousel
let carrousel = ['./Imagenes/Carrusel/photo1.gif',
'./Imagenes/Carrusel/photo2.gif',
'./Imagenes/Carrusel/photo3.gif',
'./Imagenes/Carrusel/photo4.gif',
'./Imagenes/Carrusel/photo5.gif'];

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
