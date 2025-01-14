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

/* -----------*/

/* Le solicitamos al usuario que ingrese el numero del superheroese deceado */

let super_escogido = prompt("De que superheroe te gustaria ver informacion? (INGRESA SOLO EL NUMERO) 1. IronMan / 2. Spiderman / 3. Deadpool / 4. BatMan / 5. Flash",
);

/* Para permitir q el numero ingresado por el usuario sea usado, es necesario pasarlo a Int ya que antes se encontraba en string*/
let numero_super_escogido = parseInt(super_escogido);

/* Creamos una funcion encargada de mostrar la info del heroe dependiendo de la seleccion del usuario*/
function buscarSuperheroePor(numero_super_escogido) {
    /* Esto nos permitira extraer la informacion con la "llave" usando el numero del heroe escogido*/
    let heroe = superheroes.get(numero_super_escogido);
    if (heroe) {
        /* Se esta mostrando uno a una la informacion */
        console.log(`ID: ${heroe.id}`);
        console.log(`Nombre: ${heroe.nombre}`);
        console.log(`Universo: ${heroe.universo}`);
        console.log(`Poder: ${heroe.poder}`);
        console.log(`Fuerza: ${heroe.fuerza}`);
        /* Si lo ingresado no coincide con las "llaves" establecidas, mostrara el siguiente mensaje*/
          } else {
            console.log("La marcacion fue incorrecta");
          }
        }

/* Para que se ejecute la funcion */
buscarSuperheroePor(numero_super_escogido);

/* -----------*/

/* Le pedimos al usuario que ingrese el universo de su preferencia*/
let universo_escogido = prompt("De que UNIVERSO te gustaria ver sus personajes? 1. Marvel 2. DC");

/* Para permitir q el numero ingresado por el usuario sea usado, es necesario pasarlo a Int ya que antes se encontraba en string */
let numero_universo_escogido = parseInt(universo_escogido);

/* Creamos una funcion que nos permitira mostrar la informacion de los heroes depenediendo del universo escogido por el usuario */
function personajesDeUniverso(numero_universo_escogido){
    /* Si la opcion fue 1, se mostraran los heroes de marvel*/
    if (numero_universo_escogido == 1) {
        /* El forEach nos permite iterar dentro de cada llave */
        superheroes.forEach((heroe) => {
            /* preguntamos cuales tienen la palabra "Marvel" */
            if (heroe.universo === 'Marvel') {
                /* Se muestran las "llaves" que contengan la palabra 'Marvel' */
              console.log(`Nombre: ${heroe.nombre}, Poder: ${heroe.poder}, Fuerza: ${heroe.fuerza}`);
            }
          });

        } 
        /* Si la opcion fue 2, se mostraran los heroes de marvel */
        else if (numero_universo_escogido == 2) {
          /* El forEach nos permite iterar dentro de cada llave */
          superheroes.forEach((heroe) => {
            /* preguntamos cuales tienen la palabra "DC" */
            if (heroe.universo === 'DC') {
                /* Se muestran las "llaves" que contengan la palabra 'DC' */
              console.log(`Nombre: ${heroe.nombre}, Poder: ${heroe.poder}, Fuerza: ${heroe.fuerza}`);
            }
          });

        } 
        /* Si se realiza una marcacion diferente */
        else {
          console.log("La marcacion fue incorrecta");
        }
      }
      
/* Para que se ejecute la funcion */
personajesDeUniverso(numero_universo_escogido);