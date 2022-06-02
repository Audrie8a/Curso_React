// const saludo = async () => {
//   return "Hola mundo";
// };

// saludo().then((response) => console.log(response));

const peticion = async () => {
  setTimeout(() => {
    const datos = {
      id: 3,
      name: "Audrie",
      username: "Audrie8a",
      email: "ann8a@gmail.com",
    };
    console.log(datos);
  }),
    1000;
};

peticion().then(console.log);
