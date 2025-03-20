/*JUEGO PIEDRA PAPEL Y TIJERA EN JAVASCRIPT


let piedra = "piedra";
let papel = "papel";
let tijera = "tijera";

function jugadaAleatoria() {
    let opciones = [piedra, papel, tijera];
    let numeroAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[numeroAleatorio];
}

function determinarGanador(jugador, computadora) {
    if (jugador === computadora) {
        return "empate";
    } else if (
        (jugador === piedra && computadora === tijera) ||
        (jugador === papel && computadora === piedra) ||
        (jugador === tijera && computadora === papel)
    ) {
        return "¡Ganaste el juego! 🎉";
    } else {
        return "Perdiste perdiste el juego😢";
    }
}

function jugar() {
    let jugador = prompt("Elige: piedra, papel o tijera").toLowerCase();

    if (![piedra, papel, tijera].includes(jugador)) {
        alert("Opción no válida. Intenta de nuevo.");
        return jugar(); // Vuelve a ejecutar la función si la entrada no es válida
    }

    let computadora = jugadaAleatoria();
    alert(`Tú elegiste: ${jugador}`);
    alert(`La computadora eligió: ${computadora}`);

    let resultado = determinarGanador(jugador, computadora);

    if (resultado === "empate") {
        alert("¡Empate! Vamos a jugar de nuevo.");
        return jugar(); // Si hay empate, se repite el juego.
    }

    alert(resultado);
}

jugar();*/

//FUNCIONES

/*Las funciones son uno de los bloques de construcción fundamentales en JavaScript.
 Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones
que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función,
debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.
Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.

Definir funciones
Declaración de función
Una definición de función (también denominada declaración de función o expresión de función ) consta de la palabra clave function, seguida de:

El nombre de la función.
Una lista de parámetros de la función, entre paréntesis y separados por comas.
Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }.
Por ejemplo, el siguiente código define una función simple llamada square("cuadrado"):

square "cuadrado"
function square(number) {      
  return number * number;
}


PARAMETROS : 

En JavaScript, los parámetros de una función son valores que se le pasan a la función cuando se invoca. Estos parámetros se definen 
entre paréntesis en la declaración de la función y se utilizan dentro del cuerpo de la función para realizar operaciones o cálculos.
 JavaScript es flexible con los parámetros; puedes definir un número específico de parámetros y luego pasar menos o más argumentos al llamar a la función. 
 Los parámetros restantes se tratan como undefined. También es posible usar parámetros por defecto y el operador rest (...) para mayor flexibilidad y versatilidad.
 como se muestra en el siguiente ejemplo:

 HOSTING
El hoisting es un término que se usa para describir cómo JavaScript parece que mueve las declaraciones funciones al principio del código, de forma que las puedes usar incluso antes de declararlas. Por ejemplo:

sum(1, 2) // 3

function sum(a, b) {
  return a + b
}

// Definimos la función `miFuncion` que recibe un objeto como argumento  
// Función para cambiar la propiedad 'make' del objeto  
function myFunc(theObject) {  
    theObject.make = 'Toyota'; // Cambia el valor de la propiedad 'make'  
  }  
  
  // Crea un objeto con propiedades  
  var mycar = { make: 'Honda', model: 'Accord', year: 1998 };  
  
  // Muestra el valor actual de 'make'  
  alert('Valor inicial de make: ' + mycar.make); // Muestra "Honda"  
  
  // Solicita al usuario que escriba un nuevo valor para 'make'  
  var nuevoMake = prompt('Escribe un nuevo valor para make:');  
  
  // Cambia la propiedad 'make' del objeto según la entrada del usuario  
  if (nuevoMake) { // Solo cambia si el usuario proporcionó un valor  
    mycar.make = nuevoMake;  
  }  
  
  // Muestra el nuevo valor de 'make'  
  alert('Nuevo valor de make: ' + mycar.make); // Muestra el nuevo valor  

//Function Expression 

En JavaScript, una expresión de función es una forma de definir una función como parte 
de una expresión. A diferencia de las declaraciones de función, las expresiones de función 
no necesitan tener un nombre (funciones anónimas) y pueden ser asignadas a variables, pasadas
 como argumentos a otras funciones o usadas en otras expresiones. Esto proporciona flexibilidad 
 en la forma en que se define y se utiliza la funcionalidad dentro del código.
 Son especialmente útiles para funciones de orden superior y closures.


  EJEMPLO:

const resta = function restaDos(a, b) {  
    return a - b;  
};  

const resultadoResta = resta(10, 4);  
console.log(resultadoResta); // Salida: 6 


FUNCIONES FLECHAS

Las funciones flecha en JavaScript son una forma de definir funciones de manera concisa. 
Son útiles para acciones simples, especialmente las de una sola línea. 

Caracteristicas : 

-Permiten definir funciones anónimas de forma más simple, clara y concisa.
-Son ideales para simplificar el código.
-Mantienen el contexto de "this" de forma predecible.
-Permiten reducir el código, incluso utilizando parámetros.

Sintaxis

*Hay dos variantes: sin llaves y con llaves. 
*Si la función tiene solamente una sentencia que devuelve un valor, se pueden eliminar las llaves y la palabra return. 
*Se pueden omitir los paréntesis si solo hay un argumento. 
*El símbolo => se utiliza para definir la función, mientras que su cuerpo se encierra entre llaves. 

EJEMPLO: 

const saludar = () => { console.log('Hola'); }
const multiplicar1 = (param) => { const resultado = param * 2; console.log(resultado) }
const multiplicar = (x, y) => { const resultado = x * y; console.log(resultado); }

RECURSIVIDAD 

Es el acto de una función llamándose a sí misma. La recursión es utilizada para resolver 
problemas que contienen subproblemas más pequeños. Una función recursiva puede recibir 2 entradas: 
un caso base (finaliza la recursión) o un un caso recursivo (continúa la recursión).

-Sirve
*La recursividad se usa en diversas aplicaciones, tales como:
*Estructuras de datos (árboles, listas enlazadas).
*Algoritmos matemáticos (factorial, Fibonacci).
*Búsqueda y recorrido de estructuras complejas.
*Implementación de algoritmos de backtracking (como el problema de las torres de Hanoi).

CARACTERISTICAS : 

-Caso base: Es la condición que detiene la recursión.
-Caso recursivo: Es la llamada a la función con un problema reducido.
-Pila de llamadas (Stack): Cada llamada recursiva se almacena en la pila hasta que se resuelven todas.
-Puede generar desbordamiento de pila (Stack Overflow) si no se maneja bien la condición de salida.

INTERFAZ

JavaScript no tiene una interfaz específica para la recursividad,
 pero se pueden usar funciones con parámetros para gestionar estados en cada llamada. 
 Además, se pueden utilizar estructuras como Array.prototype.reduce() y Array.prototype.map() 
 para aplicar recursividad funcional.

 EJEMPLO

 function factorial(n) {
    // Caso base: cuando n es 0 o 1, el factorial es 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Caso recursivo: n * factorial(n - 1)
    return n * factorial(n - 1);
}

// Probamos la función
console.log(factorial(5)); // Salida: 120


ARREGLOS

Los arreglos (arrays) en JavaScript son estructuras de datos que permiten 
almacenar una colección ordenada de elementos. 
Cada elemento tiene un índice numérico, comenzando desde 0.

SIRVEN PARA : 

Los arreglos se usan para almacenar y manipular conjuntos de datos de manera eficiente. Algunas de sus aplicaciones incluyen:
Almacenar listas de valores (números, cadenas, objetos, etc.).
 Recorrer datos de forma dinámica con bucles (for, forEach, map, etc.).
 Ordenar y filtrar información.
 Implementar estructuras de datos como pilas (stack) y colas (queue).

CARACTERISTICAS 

*Indexados: Los elementos se acceden mediante índices numéricos, comenzando desde 0.
*Dinámicos: Pueden cambiar de tamaño automáticamente al agregar o eliminar elementos.
*Heterogéneos: Pueden contener diferentes tipos de datos en un mismo array.
*Basados en objetos: Aunque se comportan como listas, en realidad son objetos (typeof [] → 'object').
*Métodos nativos: Incluyen métodos para manipular datos (push(), pop(), map(), filter(), etc.).

INTERFAZ 

Los arreglos en JavaScript están basados en la interfaz Array.prototype, que proporciona métodos y propiedades para su manipulación. Algunos métodos clave incluyen:

✔ Mutables (modifican el array original):

push(elemento): Agrega un elemento al final.
pop(): Elimina el último elemento.
shift(): Elimina el primer elemento.
unshift(elemento): Agrega un elemento al inicio.
splice(indice, cantidad): Elimina o reemplaza elementos.
sort():	Ordena el array (modifica el original)	arr.sort((a, b) => a - b);
reverse():	Invierte el orden del array	arr.reverse();

✔ Inmutables (devuelven un nuevo array sin modificar el original):

map(callback): Aplica una función a cada elemento y devuelve un nuevo array.
filter(callback): Filtra los elementos según una condición.
reduce(callback, valorInicial): Reduce el array a un solo valor.
concat():	Une dos o más arrays sin modificar los originales	arr.concat(otroArr);
slice():	Extrae una parte del array en un nuevo array	arr.slice(1, 3);

✔ Búsqueda:

indexOf(valor): Devuelve la posición del valor o -1 si no existe.
find(callback): Devuelve el primer elemento que cumple una condición.
includes(valor): Verifica si un valor está en el array (true o false).
lastIndexOf():	Devuelve la última posición de un elemento	arr.lastIndexOf(3);
findIndex():	Retorna el índice del primer elemento que cumple una condición	arr.findIndex(x => x > 5);
some():	Devuelve true si al menos un elemento cumple una condición	arr.some(x => x > 5);
every():	Devuelve true si todos los elementos cumplen una condición	arr.every(x => x > 5);


EJEMPLO:

Tienda de productos
Supongamos que tenemos un array de objetos con productos de una tienda. Queremos:
✅ Filtrar los productos que cuestan más de $20.
✅ Transformar los nombres a mayúsculas.
✅ Calcular el precio total de los productos filtrados.

javascript
// Lista de productos con nombre y precio
const productos = [
    { nombre: "Camiseta", precio: 25 },
    { nombre: "Pantalón", precio: 40 },
    { nombre: "Gorra", precio: 15 },
    { nombre: "Zapatos", precio: 60 }
];

// 1️⃣ Filtrar productos con precio mayor a 20
const productosFiltrados = productos.filter(producto => producto.precio > 20);
console.log("Productos filtrados:", productosFiltrados);

Salida:
[
    { nombre: "Camiseta", precio: 25 },
    { nombre: "Pantalón", precio: 40 },
    { nombre: "Zapatos", precio: 60 }
]


// 2️⃣ Transformar el nombre de los productos a mayúsculas
const nombresMayusculas = productosFiltrados.map(producto => producto.nombre.toUpperCase());
console.log("Nombres en mayúsculas:", nombresMayusculas); 
// Salida: ["CAMISETA", "PANTALÓN", "ZAPATOS"]

// 3️⃣ Calcular el precio total de los productos filtrados
const precioTotal = productosFiltrados.reduce((total, producto) => total + producto.precio, 0);
console.log("Precio total de productos filtrados:", precioTotal); 
// Salida: 125




//PROGRAMACIÓN ORIENTADO A OBJETOS.

Los objetos en JavaScript son una colección de propiedades y métodos que definen un elemento a través de una clave y un valor.
 Por ejemplo, si pensamos en una persona, podemos definir sus propiedades como su nombre, su edad, su altura, su peso, etc.
Y sus métodos como caminar, correr, saltar, etc.

  SIRVE PARA: 

  *Modularidad: Divide el código en objetos reutilizables.
  *Encapsulación: Protege los datos dentro de los objetos.
  *Herencia: Permite que los objetos hereden propiedades y métodos de otros objetos.
  *Polimorfismo: Facilita la modificación de métodos en objetos derivados.
  *Reutilización: Facilita la reutilización del código en diferentes partes de la aplicación.


 CARACTERISTICAS:


  -Clases: Son plantillas para crear objetos.
  -Objetos: Instancias de una clase con sus propios datos y métodos.
  -Encapsulación: Propiedades y métodos privados o públicos.
  -Herencia: Permite que una clase herede de otra.
  -Polimorfismo: Métodos con el mismo nombre pueden comportarse diferente en distintas clases.
  -Prototipos: JavaScript usa prototipos en lugar de clases tradicionales.


  INTERFAZ 

  JavaScript no tiene un sistema de interfaces como en Java o C#, pero se pueden simular usando clases abstractas o estructuras de objetos que actúan como contratos.
  
  Ejemplo de una "interfaz" en JavaScript:
  
  
  class Figura {
    constructor() {
      if (this.constructor === Figura) {
        throw new Error("No se puede instanciar una clase abstracta.");
      }
    }
    
    calcularArea() {
      throw new Error("El método calcularArea() debe ser implementado.");
    }
  }
  Cualquier clase que herede de Figura debe implementar el método calcularArea().


EJEMPLO:

// Definimos una clase base (superclase)
class Figura {
  constructor(color) {
    this.color = color;
  }

  describir() {
    return `Esta es una figura de color ${this.color}.`;
  }
}

// Clase derivada (hereda de Figura)
class Circulo extends Figura {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio ** 2;
  }

  describir() {
    return `Soy un círculo de color ${this.color} y mi área es ${this.calcularArea().toFixed(2)}.`;
  }
}

// Crear instancia de la clase Circulo
const miCirculo = new Circulo("rojo", 10);

console.log(miCirculo.describir()); // "Soy un círculo de color rojo y mi área es 314.16."



MANEJO DE EVENTO Y EL DOM (Document Object Model).

El DOM (Document Object Model) es una representación estructurada del documento HTML 
que permite a JavaScript acceder y manipular los elementos de una página web.
El manejo de eventos en JavaScript permite capturar y responder a acciones del usuario, 
como clics, teclas presionadas o desplazamientos.


PARA QUE SIRVE : 

*Interactividad: Permite que la página web reaccione a acciones del usuario.
*Dinamismo: Modifica contenido, estilos y comportamientos de los elementos en tiempo real.
*Automatización: Ejecuta funciones en respuesta a eventos sin intervención manual.
*Validaciones: Verifica la entrada de datos en formularios.

CARACTERISTICAS:

*Captura y propagación: Eventos pueden capturarse en distintas fases del DOM.
*Delegación de eventos: Permite asignar un evento a un elemento padre y que sus hijos lo hereden.
*Remoción de eventos: Se pueden agregar y eliminar eventos dinámicamente.
*Eventos predeterminados: Algunos eventos como submit en formularios tienen comportamientos por defecto que se pueden prevenir.
*Eventos personalizados: Se pueden crear eventos propios con CustomEvent.

INTERFAZ

La interfaz Event es la base de todos los eventos en JavaScript. Algunas de sus propiedades y métodos más importantes son:

📌 Propiedades principales de Event


*type:	Devuelve el tipo de evento (ej. "click", "keydown", etc.).
*target:	Elemento que disparó el evento.
*currentTarget:	Elemento al que está asociado el evento (puede ser diferente de target).
*timeStamp:	Momento en que ocurrió el evento.
*bubbles:	Indica si el evento burbujea en el DOM (true o false).
*cancelable:	Indica si el evento se puede cancelar con preventDefault().
*defaultPrevented:	Devuelve true si se ha llamado a preventDefault().

📌 Métodos principales de Event


-preventDefault(): Cancela la acción predeterminada del evento (ej. evitar envío de formulario).
-stopPropagation(): 	Detiene la propagación del evento en el DOM.
-stopImmediatePropagation()	Detiene la propagación y evita que otros event listeners en el mismo elemento se ejecuten.
-composedPath(): 	Devuelve un array con la ruta de propagación del evento en el DOM.

EJEMPLO:


        // Seleccionar el botón del DOM
        const boton = document.getElementById("miBoton");

        // Agregar un evento de clic al botón
        boton.addEventListener("click", function() {
            // Cambiar el color de fondo del botón
            boton.style.backgroundColor = boton.style.backgroundColor === "blue" ? "red" : "blue";
            boton.textContent = "¡Me cambiaste de color!";
        });
   


        //MODULOS 

Los módulos en JavaScript son archivos de código independientes que permiten organizar y 
reutilizar código de manera más eficiente. Estos módulos pueden exportar e importar funciones,
 objetos o clases entre diferentes archivos, evitando la contaminación del espacio global y 
 mejorando la mantenibilidad del código.

 SIRVE PARA : 

*Permiten dividir el código en archivos más pequeños y organizados.
*Facilitan la reutilización del código en diferentes partes de la aplicación.
*Evitan la contaminación del espacio global, ya que cada módulo tiene su propio ámbito.
*Mejoran la legibilidad y mantenibilidad del código.
*Hacen posible la carga diferida (lazy loading), lo que puede mejorar el rendimiento de la aplicación.

CARACTERISTICAS : 

-Uso de import y export: permiten la importación y exportación de funciones, variables o clases.
-Cada módulo tiene su propio ámbito: evita la sobrescritura de variables en el ámbito global.
-Compatibilidad con ES6+: los módulos fueron introducidos en ECMAScript 2015 (ES6).
-Deben ser ejecutados en entornos que los soporten: por ejemplo, navegadores modernos o Node.js.
-Se deben incluir con el atributo type="module" al usarlos en HTML.

INTERFAZ

Los módulos utilizan las siguientes interfaces principales:

export: permite exportar funciones, variables u objetos desde un módulo.
import: permite importar elementos de otros módulos.

EJEMPLO : 

Archivo operaciones.js (Módulo que exporta funciones)

// Definimos dos funciones y las exportamos
export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}
Archivo app.js (Módulo que importa y usa las funciones)


// Importamos las funciones desde el módulo 'operaciones.js'
import { sumar, restar } from './operaciones.js';

console.log(sumar(5, 3));  // Salida: 8
console.log(restar(10, 4)); // Salida: 6
Archivo index.html (Ejecución en el navegador)


PROGRAMACION ASINCRONA 

La programación asíncrona en JavaScript permite ejecutar tareas sin bloquear 
el flujo principal del programa. Esto significa que el código puede continuar ejecutándose
mientras espera una respuesta de una operación, como una solicitud a una API o la lectura de un archivo.

PARA QUE SIRVE :

*Permite ejecutar tareas de larga duración sin detener la ejecución del código.
*Mejora la experiencia del usuario al evitar bloqueos en la interfaz.
*Es esencial para manejar operaciones como llamadas a bases de datos, solicitudes HTTP, lectura/escritura de archivos y temporizadores.
*Facilita la ejecución de múltiples tareas en paralelo.

CARACTERISTICAS : 

-No bloqueante: El código sigue ejecutándose mientras espera el resultado de una operación asíncrona.
-Uso de promesas y async/await: Para manejar tareas asíncronas de forma más sencilla y legible.
-Eventos y Callbacks: JavaScript usa eventos y funciones de callback para manejar acciones asíncronas.
-Ejecución en el Event Loop: La programación asíncrona se basa en el Event Loop, que gestiona las tareas pendientes en segundo plano.
-Optimiza el rendimiento: Reduce los tiempos de espera y mejora la eficiencia en el manejo de múltiples operaciones.

INTERFAZ 

JavaScript ofrece varias herramientas para manejar la programación asíncrona:

-Callbacks: Funciones que se ejecutan después de que una tarea se complete.
-Promises (Promise): Objetos que representan el resultado eventual de una operación asíncrona.
-async/await: Sintaxis moderna que simplifica el uso de promesas y hace que el código sea más fácil de leer.
-setTimeout y setInterval: Métodos para ejecutar código después de un tiempo determinado.
-fetch API: Para realizar solicitudes HTTP asíncronas.


EJEMPLO

// Función asíncrona para obtener datos de una API
async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await respuesta.json();
        console.log("Lista de usuarios:", usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
    }
}

// Llamar a la función
obtenerUsuarios();



*/
