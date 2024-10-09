function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 3 == 0 && num % 5 == 0) {
    return 'FizzBuzz';
  } else if (num % 3 == 0) {
    return 'Fizz';
  } else if (num % 5 == 0) {
    return 'Buzz';
  } else {
    return false;
  }
}

fizzBuzz(2); //false
fizzBuzz(3); //Fizz
fizzBuzz(5); //Buzz
fizzBuzz(15); //FizzBuzz
fizzBuzz(20); //Buzz
fizzBuzz(25); //Buzz

module.exports = fizzBuzz;
