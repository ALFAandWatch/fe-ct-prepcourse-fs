// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function numeroRandom() {
  // La función numeroRandom debe generar un número al azar entre 0 y 1 y retornarlo.
  // Tu código:
  let numeroRandom = Math.random();
  numeroRandom = numeroRandom.toFixed(1);

  return Math.random();
}

numeroRandom();

module.exports = numeroRandom;
