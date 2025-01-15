/* Creamos el mapa que almacenera nuestros superheroes*/
const superheroes = new Map ([
    [
    1, 
    {
        id: 1,
        nombre: "Iron Man",
        universo: "Marvel",
        poder: "Millonario, Play Boy, Filantropo",
        fuerza: 85,
        habilidades: []
      }], 
    [
    2, {
        id: 2,
        nombre: "Spiderman",
        universo: "Marvel",
        poder: "La araña  humana",
        fuerza: 90,
        habilidades: []
      }],
    [

    3, {
        id: 3,
        nombre: "Deadpool",
        universo: "Marvel",
        poder: "Regeneracion",
        fuerza: 100,
        habilidades: []
      }],
    
    [
    4, {
        id: 4,
        nombre: "BatMan",
        universo: "DC",
        poder: "Millonario",
        fuerza: 85,
        habilidades: []
      }],
    [
    5, {
        id: 5,
        nombre: "Flash",
        universo: "DC",
        poder: "Super velocidad",
        fuerza: 80,
        habilidades: []
      }],
])

/* Creamos una lista que mostrara los nombres */
let nombresHeroes = "";

/* Creamos una funcion para ver los heroes disponibles y asi poder mostrarlos al usuario */
function mostrarSuperheroes() {
  /* Usamos un for para iterar los elementos de cada "conjunto" */
  superheroes.forEach((heroe1, key) => {
    /* El proceso se repetira dependiendo de cada nombre que se enceuntre */
    nombresHeroes += `${key}. ${heroe1.nombre}\n`;
});
}

mostrarSuperheroes();

/* ---------------------------------------------------------- */


/* Le solicitamos al usuario que ingrese el numero del superheroese deceado */

let super_escogido = prompt(`De que superheroe te gustaria ver informacion? (INGRESA SOLO EL NUMERO)\n${nombresHeroes}`);

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
            console.log("Tu marcacion fue incorrecta");
          }
        }

/* Para que se ejecute la funcion */
buscarSuperheroePor(numero_super_escogido);

/* ---------------------------------------------------------- */

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

/* ---------------------------------------------------------- */

/* Le solicitamos al usuario que ingrese el numero del superheroese deceado */

let super_escogido2 = prompt(`De que superheroe te gustaria cambiar su poder? (INGRESA SOLO EL NUMERO) (INGRESA SOLO EL NUMERO)\n${nombresHeroes}`);

/* Para permitir q el numero ingresado por el usuario sea usado, es necesario pasarlo a Int ya que antes se encontraba en string*/
let numero_super_escogido2 = parseInt(super_escogido2);

function actualizarFuerza(numero_super_escogido2) {
  /* Esto permitira sacar el poder de la llave seleccionada */
    let heroe2 = superheroes.get(numero_super_escogido2);
    if (heroe2) {
        /* Le muestro al usuario la fuerza original*/
        console.log(`La fuerza original de ${heroe2.nombre} es de: ${heroe2.fuerza}`);
        /* Se le pregunta al usuario que quiere hacer con el poder */
        let suma_o_resta = prompt("Que deceas realizar 1. SUMAR o 2. RESTAR a la fuerza?");
        /* Cuanto se modificara el poder */
        let valor = parseInt(prompt("Cuanto te gustaria modificar el poder?"));
        /* Confirmar si escogio un numero valido */
        if (isNaN(valor) || valor <= 0) {
            console.log("Tu marcacion fue incorrecta");
            return;
        }
        
        /* Escogio suma */
        if (suma_o_resta == 1) {
            /* Se operan los 2 valores*/
            heroe2.fuerza += valor;
            /* Se muestra la nueva fuerza*/
            console.log(`La nueva fuerza de ${heroe2.nombre} es de: ${heroe2.fuerza}`);
        }
        /* Si no es suma es resta */
        else if (suma_o_resta == 2){
            /* Se operan los 2 valores*/
            heroe2.fuerza -= valor
            /* Se muestra la nueva fuerza*/
            console.log(`La nueva fuerza de ${heroe2.nombre} es de: ${heroe2.fuerza}`);
        }
        /* Si no es ninguna de las opciones se marcara como incorrecta */
        else {
            console.log("La marcacion fue incorrecta");
        }
        

    }

}
actualizarFuerza(numero_super_escogido2)

/* ---------------------------------------------------------- */

/* Le solicitamos al usuario que ingrese el numero del superheroese deceado */

let super_escogido3 = prompt(`De que superheroe te gustaria eliminar?\n${nombresHeroes}`);

/* Para permitir q el numero ingresado por el usuario sea usado, es necesario pasarlo a Int ya que antes se encontraba en string*/
let numero_super_escogido3 = parseInt(super_escogido3);

/* Creamos una funcion encargada de mostrar la info del heroe dependiendo de la seleccion del usuario*/
function eliminarSuperheroe(numero_super_escogido3) {
  /* Esto nos permitira extraer la informacion con la "llave" usando el numero del heroe escogido*/
  let heroe3_1 = superheroes.get(numero_super_escogido3);
  if (heroe3_1) {
    /* Mostramos el nombre del heroe antes de eliminarlo, de no hacerlo, no se mostraria*/
    console.log(`La informacion del superheroe ${heroe3_1.nombre} AH SIDO ELIMINADA!!`)
    /* Se elimina la informacion del heroe*/
    superheroes.delete(numero_super_escogido3);
  }
  else {
    /* Si el usuario ingresa una opcion que no esta dentro de las llaves*/
    console.log("Tu marcacion fue incorrecta")
  }
}

eliminarSuperheroe(numero_super_escogido3)

/* ---------------------------------------------------------- */

/* Buscar el superheroe mas fuerte */

/* Almacenara la fuerza mas alta*/
let fuerza = 0;

/* Encargado de retornar el nombre del  */
let heroeMasFuerte = null;

/* Creamos la funcion */
function superheroeMasFuerte() {
  /* Iteramos sobre el MAP para representar cada elemento del mapa en cada iteracion */
  superheroes.forEach((heroe) => {
    /* Se muestra la fuerza y el nombre de cada superheroe */
    console.log(`Fuerza de ${heroe.nombre}: ${heroe.fuerza}`);
    /* Comparamos las fuerza de cada uno con la fuerza mayor mas registrada */
    if (heroe.fuerza > fuerza) {
      /* Si se cumple la condicion, la variable que almacenaba la fuerza mas alta hasta la fecha, ahora sera remplazada por la nueva fuerza del superheroe */
      fuerza = heroe.fuerza;
      /* Para el nombre del heroe segun su fuerza*/
      heroeMasFuerte = heroe
    }
  });
  
  console.log(`El superheroe mas fuerte es ${heroeMasFuerte.nombre} con una fuerza de ${fuerza}`);
}

superheroeMasFuerte();

/* ---------------------------------------------------------- */

/* Se le pregnta al usuario, que Superheroes le gustaria enfrentar entre si, el primero */
let primer_heroe = parseInt(prompt(`Que heroes te gustaria enfrentar? \n${nombresHeroes} \n Selecciona el primer heroe: `));
/* El segundo */
let segundo_heroe = parseInt(prompt(`${nombresHeroes} \n Selecciona el segundo heroe: `));

/* Se crea una funcion para permitir enfrentar a los 2 heroes */
function combate(primer_heroe, segundo_heroe) {
  /* Con ayuda de estas 2 variables podremos adquirir la fuerza de cada uno*/
let primer_heroe2 = superheroes.get(primer_heroe);
let segundo_heroe2 = superheroes.get(segundo_heroe);
      if (primer_heroe2 && segundo_heroe2) {
        /* Se esta mostrando la informacion del combate */
        console.log(` --- ENFRENTAMIENTO --- \n ${primer_heroe2.nombre} V.R ${segundo_heroe2.nombre}`);
        /* Le otorgamos variables a los puntos de fuerza de cada heroe*/
        let poder_primer_heroe = primer_heroe2.fuerza;
        let poder_segundo_heroe = segundo_heroe2.fuerza;
        /* El GANADOR sera aquel superheroe con mayor fuerza */
        if (poder_primer_heroe > poder_segundo_heroe) {
          console.log(`El heroe ${primer_heroe2.nombre} fue el GANADOR con ${primer_heroe2.fuerza}`)
        } else if (poder_primer_heroe === poder_segundo_heroe) {
          console.log('Fue un EMPATE')
        } else {
          console.log(`El heroe ${segundo_heroe2.nombre} fue el GANADOR con ${segundo_heroe2.fuerza}`)
        }
          } else {
            console.log("Tu marcacion fue incorrecta");
          }
    }

/* ---------------------------------------------------------- */

function agregarHabilidad() {
  let new_habilidad = parseInt(prompt(`A que heroe te gustaria agregarle habilidades especiales (INGRESA SOLO EL NUMERO): \n${nombresHeroes}`));
  let hero_hability = superheroes.get(new_habilidad);
  if (hero_hability) {
    let habilidad = prompt(`¿Qué habilidad quieres agregar a ${hero_hability.nombre}?`);
    hero_hability.habilidades.push(habilidad); 
    console.log(`${hero_hability.nombre} ahora tiene la habilidad: ${habilidad}`);
  } else {
    console.log("Tu marcacion fue incorrecta");
  }
}

agregarHabilidad()

/* ---------------------------------------------------------- */


function mostrarHabilidades() {
  let super_escogido = parseInt(prompt(`De que superheroe quieres ver sus habilidades? \n${nombresHeroes}`));

  let heroe = superheroes.get(super_escogido);
  if (heroe) {
    if (heroe.habilidades.length === 0) {
      console.log(`${heroe.nombre} no tiene habilidades agregadas.`);
    } else {
      console.log(`Habilidades de ${heroe.nombre}:`);
      heroe.habilidades.forEach((habilidad, index) => {
        console.log(`${index + 1}. ${habilidad}`);
      });
    }
  } else {
    console.log("Tu marcación fue incorrecta");
  }
}