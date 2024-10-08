// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearNumero(num) {
   // La función recibe un argumento llamado num el cual es un numero.
   // Debes redondear "num" al entero más próximo y retornarlo.
   // Por ejemplo: 
   // 1.5 ---> 2
   // 0.1 ---> 0
   // Tu código:
   let aproximacion = Math.round(num);

   return aproximacion;
}

redondearNumero(2); //2
redondearNumero(5); //5
redondearNumero(2.5); //3
redondearNumero(3.7); //4
redondearNumero(12.43); //12

module.exports = redondearNumero;
