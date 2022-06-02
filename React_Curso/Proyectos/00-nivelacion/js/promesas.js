const sumar = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("Esto no es valido");
    } else {
      resolve(a + b);
    }
  });
};

var result = sumar(3, 5)
  .then((res) => {
    document.write(res);
  })
  .catch((error) => {
    document.write(error);
  });

//document.write(result);
