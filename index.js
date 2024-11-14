// 1-Crea una función que elimine el primer y último caracter de un string recibido por parámetros.

function stringWithoutFirstLast(stringVal = '') {
  const result = stringVal.slice(1, stringVal.length - 1);
  return result;
}

console.dir('Ejercicio 1');
console.dir(stringWithoutFirstLast('PatatA'));

// 2-Escribe una función que reciba una palabra y revise si es un palíndromo.

function isPalindrome(stringVal = '') {
  const stringWhithoutSpaces = stringVal
    .toLocaleLowerCase()
    .normalize('NFD')
    .trim();
  let posEnd = stringVal.length;
  for (let i = 0; i < Math.trunc(stringWhithoutSpaces.length / 2); i++) {
    posEnd--;
    if (stringWhithoutSpaces[i].includes(stringWhithoutSpaces[posEnd])) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.dir('Ejercicio 2');
console.dir(isPalindrome('aná'));
console.dir(isPalindrome('ratar'));
console.dir(isPalindrome('esto no'));

// 3-Crea una función que cuente las vocales que contiene una palabra dada por parámetros.

function counterVowels(stringVal = '') {
  const vowels = 'aeiou';
  const stringNormalice = stringVal.toLocaleLowerCase().normalize('NFD');
  let counter = 0;
  for (let i = 0; i < stringNormalice.length; i++) {
    counter += vowels.includes(stringNormalice[i]);
  }
  return counter;
}

console.dir('Ejercicio 3');
console.log(counterVowels('aeiouáéíóúü'));

// 4-Crea una función que verifique si una cadena de texto recibida por parámetros es un pangrama (contiene todas las letras del abecedario).

function isPangram(stringVal = '') {
  const stringNormalice = stringVal.toLocaleLowerCase().normalize('NFD').trim();
  const alphabet = 'abcdefghijklmnopqrstuvxyz';

  for (let i = 0; i < alphabet.length; i++) {
    if (stringNormalice.includes(alphabet[i])) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.dir('Ejercicio 4');
console.dir(isPangram('abcdefghijklmnopqrstuvxyz'));
console.dir(isPangram('esto no'));

// 5-Escribe una función que compruebe si una cadena de texto contiene todas las vocales.

function hasAllVowels(stringVal = '') {
  const vowels = 'aeiou';
  const stringNormalice = stringVal.toLocaleLowerCase().normalize('NFD');

  for (let i = 0; i < vowels.length; i++) {
    if (stringNormalice.includes(vowels[i])) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.dir('Ejercicio 5');
console.dir(hasAllVowels('murciélago'));
console.dir(hasAllVowels('En un lugar de la mancha'));

// 6-Crea una función que realice una cuenta atrás desde un número recibido por parámetros.

function countDown(num = 0) {
  for (let i = num; i > 0; i--) {
    console.dir(i);
  }
}

console.dir('Ejercicio 6');
console.dir(countDown(10));

// 7-Escribe una función que reciba por parámetros el año de nacimiento, y calcule la edad de la persona.

function yearOfBorn(yearBorn = 0) {
  let yearToday = new Date().getFullYear();
  return yearToday - yearBorn;
}

console.dir('Ejercicio 7');
console.dir(yearOfBorn(1984));

// 8-Crea una función que reciba la edad de una persona por parámetros y verifique si es mayor de edad. Imprime por consola un string con el resultado.

function isAdult(age = 0) {
  return age >= 18;
}
console.dir('Ejercicio 8');
console.dir(isAdult(17));
console.dir(isAdult(18));

// 9-Crea una función que simule el lanzamiento de un dado e imprime por consola el resultado cada vez que se ejecuta.

function rollDice(diceFaces = 0) {
  const dice = Math.trunc(Math.random() * diceFaces + 1);
  console.dir(dice);
  return dice;
}

function checkRollDice() {
  const result = [0, 0, 0, 0, 0, 0, 0];
  for (i = 0; i < 10000; i++) {
    const dice = rollDice(6);
    result[dice]++;
  }
  return result;
}

console.dir('Ejercicio 9');
rollDice(6);
rollDice(10);
console.table(checkRollDice());

// 10-Crea una función que reciba un año por parámetros y compruebe e imprima por consola si el año es bisiesto o no.

function isLeapYear(year = 0) {
  if (year % 4 === 0 && (!year % 100 === 0 || year % 400 === 0)) {
    return true;
  }

  return false;
}

console.dir('Ejercicio 10');
console.dir(isLeapYear(2024));
console.dir(isLeapYear(2025));

// 11-Escribe una función que simula el juego piedra, papel y tijera. Recibirá como parámetro una opción (piedra, papel o tijera) en forma de string. La máquina, elegirá automáticamente una opción aleatoria. Imprime por consola ambas elecciones y en caso de ganar el jugador un mensaje de victoria, y en caso de perder uno de derrota.

console.dir('Ejercicio 11');
// 12-La serie de Fibonacci es un problema matemático que realiza la suma de los dos números anteriores para generar el siguiente. Crea una función que imprima por consola la serie de Fibonacci hasta un número introducido por el usuario. El usuario debe ser preguntado por este número al iniciar la aplicación.

console.dir('Ejercicio 12');
// 13-Escribe una función generadora de nombres de usuario aleatorios, a partir de dos grupos de palabras dadas. Estos grupos de palabras pueden estar agrupados en arrays. (nombres=['Hugo', 'Luis'], apellidos=['Duro', 'Fabiano']). Retorna un nombre de usuario aleatorio con nombre, apellido y un número aleatorio del 1 al 100. (Por ejemplo -> 'Pepe Pérez 87'.)

console.dir('Ejercicio 13');
// 14-Crea una función calculadora de propinas. Debe recibir el total de la cuenta y el porcentaje de propina deseado, con ello deberá calcular e imprimir por consola la cuenta, la propina que corresponde a la cuenta introducida, y el total a pagar. Redondea a dos decimales.

console.dir('Ejercicio 14');
// 15-Escribe una función que calcule el descuento aplicado a un precio. La función recibirá el precio y el descuento del artículo en venta, con ellos deberá calcular e imprimir por consola el precio, el descuento y el total del precio una vez aplicado el descuento. Redondea a dos decimales.

console.dir('Ejercicio 15');

// Prueba de String.normalize()

function prueba() {
  const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
  const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

  console.log(`${name1}, ${name2}`);
  // Expected output: "Amélie, Amélie"
  console.log(name1 === name2);
  // Expected output: false
  console.log(name1.length === name2.length);
  // Expected output: false

  const name1NFC = name1.normalize('NFC');
  const name2NFC = name2.normalize('NFC');

  console.log(`${name1NFC}, ${name2NFC}`);
  // Expected output: "Amélie, Amélie"
  console.log(name1NFC === name2NFC);
  // Expected output: true
  console.log(name1NFC.length === name2NFC.length);
  // Expected output: true
}
