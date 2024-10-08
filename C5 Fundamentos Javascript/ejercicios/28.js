function retornarPerimetro(lado) {
   // La función recibe un argumento llamado lado el cual es un numero.
   // Retornar el perimetro de un cuadrado.
   // Por ejemplo: 
   // 2 ---> 8
   // 0 ---> 0
   // Tu código:
   let perimetro = lado * 4;
   let mensaje = 'El perimetro de un cuadrado cuyos lados miden ' + lado + 'cms de largo es de ' + perimetro + 'cms.';
   return mensaje;
}

retornarPerimetro(4); //El perimetro de un cuadrado cuyos lados miden 4cms de largo es de 16cms.

retornarPerimetro(10); //El perimetro de un cuadrado cuyos lados miden 10cms de largo es de 40cms.

module.exports = retornarPerimetro;
