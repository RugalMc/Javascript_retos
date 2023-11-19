let usuario = 'Edison'
let message = '¡Hola mundo!'
let array = [1, 2, 3, 4, 5]
array.push(6)
let texto = 'La lluvia en Sevilla es una maravilla'
let find_word = texto.match('lluvia')
let word = find_word[0]


console.log(`${message} Soy ${usuario}`)
console.log(`Mi nombre en mayúsculas es: ${usuario.toUpperCase()}`)
console.log(`Mi nombre en minúsculas es: ${usuario.toLowerCase()}`)
console.log(`El mensaje de ${message} tiene ${message.length} caracteres`)
console.log(`El tercer número del array con los valores ${array} es: ${array[2]}`)
console.log(`Se añade el número que sigue en orden a final del arreglo y es: ${array[array.length - 1]}`)
console.log(`Se encontró el patron '${word}' en el texto ${texto}, por lo que el resultado es: ${word}`)