// variables for original message, encrypted and encryption key
let input, output, key;
// service variables for the cipher
let inp, k;

// random number generator in the given range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// request text to be encrypted
input = prompt('Введите исходный текст', '');
document.getElementById('message').innerHTML = input;

// request the encryption key
key = prompt('Введите ключ', '');
document.getElementById('key').innerHTML = key;

// if the key length is less than the message length, we tell the user and generate our own key
if ((key.length) < (input.length)) {
  alert('Ключ короче сообщения, это не безопасно. Скопируйте новый сгенерированнный ключ из консоли брузера.')

  // at the very beginning the key will be empty
  key = '';
  document.getElementById('key').innerHTML = key;

  // generate a new key of the same length as the message
  for (let i = 0; i < input.length; i++) {
    key += String.fromCharCode(getRandomInt(0,66535));
  }

  // output a new encryption key
  console.log('↓↓ Скопируйте новый ключ ↓↓');
  console.log(key);
}
document.getElementById('key').innerHTML = key;

// encrypt the message
output = '';
for (i = 0; i < input.length; i++) {
  // take the digital value of the next character in the message and key
  inp = input.charCodeAt(i);
  k = key.charCodeAt(i);
  // and apply XOR to them
  output += String.fromCharCode(inp ^ k);
}

// display the result of encryption
console.log("↓↓ Результат работы алгоритма ↓↓");
console.log(output);
document.getElementById('output').innerHTML = output;