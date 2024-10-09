function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:

   //CREO UN ARRAY VACIO Y LE VOY SUMANDO TODOS LOS NUMEROS DESDE 1 HASTA n
   const todosLosNumeros = [];
   for (let i = 1; i <= n; i++) {
      todosLosNumeros.push(i); 
   }
   //CREO UNA VARIABLE VALOR CERO, Y LE VOY SUAMNDO CADA NUMERO INCLUIDO EN EL ARRAY
   let suma = 0;
   for (let i = 0; i <= todosLosNumeros.length; i++) {
      suma += i;
      if (suma > 100) { break;}
   }
   
   return suma;
}

sumarHastaNConBreak(5); //15
sumarHastaNConBreak(10); //55
sumarHastaNConBreak(25); //105
sumarHastaNConBreak(238); //105
sumarHastaNConBreak(2457); //105

module.exports = sumarHastaNConBreak;
