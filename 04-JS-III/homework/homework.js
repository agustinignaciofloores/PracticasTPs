// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]; 
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
 return array[array.length - 1];  
}  

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  if (array.length === 0) {
    return 0;
  } else {
   return array.length;   
}

}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  if (array.length === 0) {
    return [];
  } else {
    return array.map(num => num + 1);
  }
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  if (array.length === 0) { // Si el array está vacío, devuelve un nuevo array con el elemento agregado 
    return [elemento];
  } else {
    array.push(elemento); // Agrega el elemento al final del array
    return array;
  }
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  if (array.length === 0) { // Si el array está vacío, devuelve un nuevo array con el elemento agregado 
    return [elemento];
  } else {
    array.unshift(elemento); // Agrega el elemento al comienzo del array
    return array;
  }
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  //return palabras.join(' ')
  var frase = '';
  for (var i = 0; i < palabras.length; i++) {
    frase += palabras[i]; // Agrega la palabra actual a la frase
    if (i < palabras.length - 1) { // Si no es la última palabra, agrega un espacio
      frase += ' ';
    }
  }
  return frase; // Devuelve la frase concatenada
 
}                       


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
 var encontrado = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === elemento) { // Si el elemento se encuentra en el array, establece encontrado en true
      encontrado = true;
      break; // Sale del bucle una vez que se encuentra el elemento
    }
  }
  return encontrado; // Devuelve true si se encontró el elemento, o false si no se encontró 
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  //var suma = numeros.reduce((a,b)=>a+b,0);
  //return suma;
  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
    suma += numeros[i]; // Suma el número actual a la variable suma
  }
  return suma; // Devuelve la suma total de los números 
 
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0; // Variable para almacenar la suma de los puntajes
  for (var i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i]; // Suma el puntaje actual a la variable suma
  }
  var promedio = suma / resultadosTest.length; // Calcula el promedio dividiendo la suma por la cantidad de puntajes
  return promedio; // Devuelve el promedio de los puntajes
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max = numeros[0]; // Inicializa max con el primer número del array 
  for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) { // Si el número actual es mayor que max, actualiza max
      max = numeros[i];
    }
  }
  return max; // Devuelve el número más grande encontrado en el array
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0) { // Si no se pasan argumentos, devuelve 0
    return 0;
  } else if (arguments.length === 1) { // Si se pasa un argumento, devuélvelo
    return arguments[0];
  } else {
    var producto = 1; // Variable para almacenar el producto de los argumentos
    for (var i = 0; i < arguments.length; i++) {
      producto *= arguments[i]; // Multiplica el argumento actual al producto
    }
    return producto; // Devuelve el producto de todos los argumentos
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0; // Variable para contar los elementos mayores a 18
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) { // Si el elemento actual es mayor a 18, incrementa el contador
      contador++;
    }
  }
  return contador; // Devuelve la cantidad de elementos mayores a 18   
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) { // Si el número de día es 1 (Domingo) o 7 (Sábado), es fin de semana
    return "Es fin de semana";
  } else { // En caso contrario, es día laboral
    return "Es dia Laboral";
  } 
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var str = n.toString(); // Convierte el número a una cadena de texto
  if (str[0] === '9') { // Verifica si el primer carácter de la cadena es '9'
    return true; // Si inicia con 9, retorna true
  } else {
    return false; // En otro caso, retorna false
  } 
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i = 1; i < arreglo.length; i++) { // Compara cada elemento con el primero del arreglo
    if (arreglo[i] !== arreglo[0]) { // Si encuentra un elemento diferente, retorna false
      return false;
    }
  }
  return true; // Si todos los elementos son iguales, retorna true 
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var mesesPedidos = ["Enero", "Marzo", "Noviembre"]; // Array con los meses que se deben buscar
  var mesesEncontrados = []; // Array para almacenar los meses encontrados
  for (var i = 0; i < array.length; i++) { // Recorre el array de meses desordenados
    if (mesesPedidos.includes(array[i])) { // Si el mes actual está en la lista de meses pedidos, lo agrega a mesesEncontrados
      mesesEncontrados.push(array[i]);
    }
  }
  if (mesesEncontrados.length === mesesPedidos.length) { // Si se encontraron todos los meses pedidos, retorna el array de meses encontrados
    return mesesEncontrados;
  } else { // Si no se encontraron todos los meses pedidos, retorna el mensaje indicado
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var mayoresACien = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      mayoresACien.push(array[i]);
    }
  }
  return mayoresACien; 
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var resultados = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    suma += 2; // Aumenta el número recibido en 2
    resultados.push(suma); // Guarda el nuevo valor en el array resultados
    if (suma === i) { // Si el valor de la suma y la cantidad de iteraciones coinciden, interrumpe la ejecución
      return "Se interrumpió la ejecución";
    }
  }
  return resultados; // Devuelve el array con los nuevos valores
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var resultados = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    if (i === 5) { // Cuando el número de iteraciones alcance el valor 5, no se suma y se continúa con la siguiente iteración
      continue;
    }
    suma += 2; // Aumenta el número recibido en 2
    resultados.push(suma); // Guarda el nuevo valor en el array resultados
  }
  return resultados; // Devuelve el array con los nuevos valores
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
