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

¡Hola mundo! Soy Edison
Mi nombre en mayúsculas es: EDISON
Mi nombre en minúsculas es: edison
El mensaje de ¡Hola mundo! tiene 12 caracteres
El tercer número del array con los valores 1,2,3,4,5,6 es: 3
Se añade el número que sigue en orden a final del arreglo y es: 6
Se encontró el patron 'lluvia' en el texto La lluvia en Sevilla es una maravilla, por lo que el resultado es: lluvia
