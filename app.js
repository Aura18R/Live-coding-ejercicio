// Escribe tu código aquí.

/* 1.- Construye una función que reciba por parámetros un string y un array de strings. La función debe retornar un arreglo de strings con los strings que sean de mayor longitud que el string recibido por parámetros.

Escribe una función que reciba 2 parámetros
Parámetro 1 - Un string
Parámetro 2 - Un array de strings
La función debe devolver todas las palabras del array de entrada (parámetro 2) que sean más largas que el string de entrada (parámetro 1)
Ejemplo:
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
bigWords('bocina', myArray);
Output - ['insecto', 'bootcamp', 'escritorio'] */

function bigWords(str, arr){
    const listaPalabras = [];

    for(i=0; i<arr.length; i++ ){
        if (arr[i].length > str.length){
            listaPalabras.push(arr[i]);
        }
    }

    return listaPalabras;
}

const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
console.log(bigWords('bocina', myArray));


/* 2.- Construye una función que reciba por parámetros un array de strings y lo imprima dentro de la lista (

) en el index.html. La función debe mostrar la lista en el HTML manipulando el DOM, cada string del arreglo debe imprimirse en un elemento
. El array que se recibe por parámetros debe ser un array resultante de utilizar la función anterior.
Escribe una función que reciba 1 parámetro
Parámetro 1 - Un array de strings
La función debe mostrar la lista en el HTML, cada string del arreglo debe imprimirse en un elemento
.
Ejemplo:
const myArray = ['insecto', 'bootcamp', 'escritorio'];
printArray(myArray);
Output - <li>insecto</li> <li>bootcamp</li> <li>escritorio</li>  3.- Conecta tu archivo JS con el index.html. Comprueba el funcionamiento del código con diferentes inputs. */

function printArray(arr){
    const ul = document.createElement('ul');

    arr.forEach(str => {
        const li = document.createElement('li'); 
        li.textContent = str;
        ul.appendChild(li);
    });
    console.log(ul);
}

const myArray2 = ['insecto', 'bootcamp', 'escritorio'];
printArray(myArray2);

/*  crear la variable de ul

crear una variable de li  */

