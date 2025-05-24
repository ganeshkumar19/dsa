
/*function reversebuilt(str) {
    const reverseStr = str.split('').reverse().join('')

    return `the reversed string is ${reverseStr}`
}

console.log(reversebuilt('hello'))*/

function reverseNoBuilt(str){
    let reverseStr = ''

    for(let i = str.length-1; i >=0; i--){
        reverseStr+= str[i]
    }

    return `the reversed string is ${reverseStr}`
}

console.log(reverseNoBuilt('hello'))
