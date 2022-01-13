const cuenta = 10;

/*
Por seguridad es mejor utilizar ternarios y constantes para no tener variables mutables y que cualquiera pueda modificar.
*/

//Condicion ? RespuesaTrue : RespuestaFalse
const mensaje = cuenta < 0 ? "No tienes Saldo!!!" : "Tienes Saldo!!!";

// let mensaje;
// if (cuenta < 0) mensaje = "No tienes saldo";
// else mensaje = "tienes saldo";

document.write(mensaje);
