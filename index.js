

// const repetir = (str, num) => {
//   const array = []
//   for (let i = 0; i < num; i++) {
//     array.push(str) 
//   }
//   return array
// }

// console.log(repetir('lovelace', 3)) // ['lovelace', 'lovelace', 'lovelace']
// console.log(array)
// console.log(repetir('a', 5)) // ['a', 'a', 'a', 'a', 'a']
// console.log(repetir('html', 0)) // []


// // sumarImparesHasta(numero)
// // Crear una función sumarImparesHasta 
// // que tome como argumento un número numero y 
// // que devuelva la suma de todos los impares empezando 
// // desde 0 hasta dicho numero inclusive.

const sumarImparesHasta = (num) => {
  // encontrar todos los numeros impares
  // sumarlos a todos entre si
  let acumuladora = 0 
  for (let i = 1; i <= num; i += 2) {
      acumuladora += i
  }
  return acumuladora

}

// console.log(sumarImparesHasta(5)) // 9 (1 + 3 + 5 = 9)
// console.log(sumarImparesHasta(13)) // 49
// console.log(sumarImparesHasta(47)) // 576

// crearCuentaRegresiva(numeroInicial)
// Crear una función crearCuentaRegresiva 
// que tome como argumento un número entero numeroInicial y 
// que devuelva un array con cuyo primer ítem sea numeroInicial
//  y los demás ítems sean números enteros sucesivos descendientes, 
//  hasta llegar a 0.

// const crearCuentaRegresiva = (num) => {
//   let array = []
//   for (let i = num; i >= 0; i--) {
//     array.push(i)
//   }
//   return array
// }

// console.log(crearCuentaRegresiva(3)) // [3, 2, 1, 0]
// console.log(crearCuentaRegresiva(5)) // [5, 4, 3, 2, 1, 0]




// que es la i 
// donde va el return 
// for y arrays, for y repeticion de codigo 

// let i = 0 
// console.log(i)
// i = 1 
// console.log(i)
// i = 2 
// console.log(i)
// i = 3 
// console.log(i)
// i = 4 
// controlar cuando termina 
// controlar de cuanto en cuanto suma la i

// i es el numero que lleva la cuenta 

// for (let i = 0; i < 4; i++) { 
//   console.log(i)
// }


// const nombres = ["Ana", "Maca", "Angie", "Caro", "Pepo"]
// //                    0         1         2         3       4

// for (let i = 0; i < nombres.length; i++) {
  
  
// }
// nombres[0] // Ana
// nombres[1] // Maca
// nombres[2] // Angie
// nombres[3] // Caro 


// for (let i = 0; i < array.length; i++) {
//   console.log(i)
//   console.log(nombres[i])
// }

// return y for 

// const contarHasta10 = () => {

//   console.log("estoy antes del for")

  

//   for (let i = 0; i < 10; i++) {
//     console.log("adentro del for")
//     console.log(i)
//     console.log("adentro del for")

//     if ( i === 100 ) {
//       return "ESTO ES EL RETORNO" 
//     }
//   }


//   console.log("estoy despues del for")
//   return "NUNCA SE RETORNO NADA ADENTRO DEL FOR POR LO TANTO ESTO SI SE PUEDE RETORNAR"
  
// }

// console.log(contarHasta10())



// const numeros = [5, 7, 2, 7, 9, 2, 99, 6, 4, 2, 6, 8, 90]
// const masNumeros = [4, 7, 6, 3, 9]

// const hayAlgunNumeroMayorA10 = (array) => {

  
//   for (let i = 0; i < array.length; i++) {
//       console.log("estoy en la vuelta", i)
//       if (array[i] > 10) {
//           return true
//       } 
//   }

//   console.log("LLEGAMOS AL FINAL DEL FOR")
//   console.log(`SI LLEGAMOS AL FINAL DEL FOR ES PORQUE NUNCA 
//   HUBO UN NUMERO MAYOR A DIEZ EN EL ARRAY`)
//   return false 

// }

// console.log(hayAlgunNumeroMayorA10(numeros)) // true
// console.log(hayAlgunNumeroMayorA10(masNumeros)) // false





// 1. Dado el array 

const nombres = ["Ana", "Maca", "Angie", "Caro", "Pepo"]

// Mostrar en consola los nombres empezando por el ultimo y terminando en el primero. 



// 🏃‍♀️ Carrera
// Crear un programa para controlar las vueltas de una 
// deportista. Debe pedir al usuario la cantidad de vueltas que 
// va a realizar e ir preguntando el tiempo en segundos de cada vuelta. 
// Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta 
// y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas).
//  Ejemplo:

// Cantidad de vueltas: 3
// Vuelta 1: 133s
// Vuelta 2: 145s
// Vuelta 3: 166s
// ⏱ Promedio: 144.45s

 // 🔐 Múltiples intentos
// Crear un programa que pida ingresar usuario y contraseña. 
// El programa debe permitir hasta 3 intentos, cuando el usuario y/o 
// la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 
// 3 intentos erróneos, debe mostrar un mensaje de bienvenida. 
// Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y 
// terminar el programa. El usuario y la contraseña ya deben estar guardadas 
// en variables.

// ⚖️ Mayor o menor
// Crear un programa que elija un número al azar entre 1 y 10. 
// El programa debe luego pedir al usuario que intente adivinar el número. 
// Por cada intento, debe avisar si el número a adivinar es mayor o menor 
// que el número ingresado. El programa debe terminar cuando se adivina el número.
// prompt
