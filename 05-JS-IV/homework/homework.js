// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
   return{
    nombre: nombre, // o simplemente nombre,
    edad: edad, // o simplemente edad,
    meow: function() { // o meow() {
      return "Meow!"; // o simplemente return "Meow!";
    }
  };  
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null; // Agrega una propiedad al objeto con el nombre definido en el argumento "property" y le asigna el valor null
  return objeto; // Devuelve el objeto actualizado con la nueva propiedad agregada
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código
  objeto[metodo](); // Invoca el método del objeto utilizando la notación de corchetes, pasando el nombre del método como argumento
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  return objetoMisterioso.numeroMisterioso * 5; // Accede a la propiedad numeroMisterioso del objetoMisterioso, la multiplica por 5 y devuelve el resultado

}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad]; // Elimina la propiedad del objeto utilizando la notación de corchetes, pasando el nombre de la propiedad a eliminar como argumento
  return objeto; // Devuelve el objeto actualizado después de eliminar la propiedad especificada
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  return {
    nombre: nombre, // o simplemente nombre,
    email: email, // o simplemente email,
    password: password // o simplemente password
  };  
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  return !!usuario.email; // El doble signo de admiración convierte el valor en un booleano
}



function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  return !!objeto[propiedad]; // El doble signo de admiración convierte el valor en un booleano, devolviendo true si la propiedad existe y tiene un valor definido, o false si no existe o su valor es undefined
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  return !!usuario.password && usuario.password === password; // Verifica que la propiedad password exista y que su valor coincida con el argumento password, devolviendo true o false según corresponda
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword; // Actualiza la propiedad password del objeto usuario con el nuevo valor de nuevaPassword
  return usuario; // Devuelve el objeto usuario actualizado con la nueva contraseña
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  usuario.amigos.push(nuevoAmigo); // Agrega nuevoAmigo al final del array de amigos del usuario
  return usuario;  // Devuelve el objeto usuario actualizado con el nuevo amigo agregado al array de amigos
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (let i = 0; i < usuarios.length; i++) { // Iteramos sobre cada usuario en el array de usuarios
    usuarios[i].esPremium = true; // Establecemos la propiedad esPremium de cada usuario a true
  }
  return usuarios; // Devolvemos el array de usuarios actualizado
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  let sumaLikes = 0; // Inicializamos la variable para acumular la suma de likes
  for (let i = 0; i < usuario.posts.length; i++) { // Iteramos sobre cada post en el array de posts del usuario 
    sumaLikes += usuario.posts[i].likes; // Sumamos los likes de cada post al total acumulado
  }
  return sumaLikes; // Devolvemos la suma total de likes
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  producto.calcularPrecioDescuento = function() { // Agregamos el método calcularPrecioDescuento al objeto producto
    const descuento = this.precio * this.porcentajeDeDescuento; // Calculamos el descuento multiplicando el precio por el porcentaje de descuento
    return this.precio - descuento; // Restamos el descuento del precio y devolvemos el resultado
  };
  return producto; // Devolvemos el objeto producto actualizado con el nuevo método
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
