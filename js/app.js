/* Creamos el mapa que almacenera nuestros superheroes*/
const superheroes = new Map ([
    [
    1, 
    {
        id: 1,
        nombre: "Iron Man",
        universo: "Marvel",
        poder: "Millonario, Play Boy, Filantropo",
        fuerza: 85
      }], 
    [
    2, {
        id: 2,
        nombre: "Spiderman",
        universo: "Marvel",
        poder: "La araña  humana",
        fuerza: 90
      }],
    [

    3, {
        id: 3,
        nombre: "Deadpool",
        universo: "Marvel",
        poder: "Regeneracion",
        fuerza: 100
      }],
    
    [
    4, {
        id: 4,
        nombre: "BatMan",
        universo: "DC",
        poder: "Millonario",
        fuerza: 85
      }],
    [
    5, {
        id: 5,
        nombre: "Flash",
        universo: "DC",
        poder: "Super velocidad",
        fuerza: 80
      }],
])

/* Le solicitamos al usuario que ingrese el numero del superheroese deceado */

let super_escogido = prompt("De que superheroe te gustaria ver informacion? (INGRESA SOLO EL NUMERO) 1. IronMan / 2. Spiderman / 3. Deadpool / 4. BatMan / 5. Flash",
);

/* Para permitir q el numero ingresado por el usuario sea usado, es necesario pasarlo a Int ya que antes se encontraba en string*/
let numero_super_escogido = parseInt(numeroString);

/* Creamos una funcion encargada de mostrar la info del heroe dependiendo de la seleccion del usuario*/
function buscarSuperheroePor(numero_super_escogido) {
    /* Esto nos permitira extraer la informacion con la "llave" usando el numero del heroe escogido*/
    let heroe = superheroes.get(numero_super_escogido);
    if (heroe) {
        console.log(`ID: ${heroe.id}`);
        console.log(`Nombre: ${heroe.nombre}`);
        console.log(`Universo: ${heroe.universo}`);
        console.log(`Poder: ${heroe.poder}`);
        console.log(`Fuerza: ${heroe.fuerza}`);
          } else {
            console.log("El superhéroe con ese número no existe.");
          }
        }

buscarSuperheroePor(numero_super_escogido);