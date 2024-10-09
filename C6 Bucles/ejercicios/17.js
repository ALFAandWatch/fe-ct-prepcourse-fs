function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  let mensaje = 'This is ' + color;

  if (color != 'blue' && color != 'red' && color != 'green' && color != 'orange') {
    mensaje = 'Color not found';
  }
  
  return mensaje;
}

colors('blue'); //This is blue
colors('red'); //This is red 
colors('green'); //This is greem
colors('orange'); //This is orange
colors('brown'); //color not found

module.exports = colors;
