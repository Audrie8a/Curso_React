//setInterval : Permite ejecutar cosas cada cierto tiempo

const saludo = () => {
  document.write("<li>Hola mundo</li>");
};

document.write("<ol>");
setInterval(saludo, 2000);
document.write("</ol>");
