function punc(str){

    return str.split('').filter(char=> char.match(/\w|\s/)).join('')
}

console.log(punc("Hello, World!"));