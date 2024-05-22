

function Persona( nombre, edad){

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log( `Nombre: ${this.nombre}, Edad: ${this.edad}`  );
    }
}

const maria = new Persona( 'Maria', 35);
const jose = new Persona( 'Jose', 25);
const franco = new Persona( 'Franco', 35);


franco.imprimir();