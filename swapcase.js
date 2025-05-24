function swapcase(str){
   return str.split('').map(char=> char === char.toLowerCase()? char.toUpperCase(): char.toLowerCase()).join('')
}

console.log(swapcase('Hello, World!'))