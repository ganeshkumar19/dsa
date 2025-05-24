function charArray(str){
    return str.split('')
}

function arrayToString(arr){
    return arr.join('')
}

let str= 'hello'

let array = charArray(str)

console.log(arrayToString(array))