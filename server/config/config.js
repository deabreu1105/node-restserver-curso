/**
 * 
 * TODO: Aqui vamos a declarar ya sean variables, constantes etc. De forma global
 * * process: Es un objeto global que esta corriendo a lo largo de toda la aplicacion de node
 * * process: tambien es actualizado dependiendo del entorno o environment donde esta corriendo
 * 
 */


// =======================================
// Puerto
// =======================================
// ? Aqui preguntamos en el entorno que estemos si nos tiene un puerto y si no asignaremos el 3000
process.env.PORT = process.env.PORT || 3000;