// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearHaciaArriba(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes redondear "num" hacia arriba y retórnalo.
  // Por ejemplo: 
  // 2.5 ---> 3
  // 0.1 ---> 1
  // Tu código:
  let aproximacion = Math.ceil(num);

   return aproximacion;
}

redondearHaciaArriba(2); //2
redondearHaciaArriba(5); //5
redondearHaciaArriba(2.5); //3
redondearHaciaArriba(3.7); //4
redondearHaciaArriba(12.43); //13

module.exports = redondearHaciaArriba;