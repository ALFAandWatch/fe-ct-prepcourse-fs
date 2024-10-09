function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   if (a > 0 && a < 10) {
      return true;
   } else {
      return false;
   }
}

esPositivoOInferiorA10(0); //false
esPositivoOInferiorA10(1); //true
esPositivoOInferiorA10(5); //true
esPositivoOInferiorA10(9); //true
esPositivoOInferiorA10(10); //false
esPositivoOInferiorA10(23); //false

module.exports = esPositivoOInferiorA10;
