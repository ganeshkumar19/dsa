function toCamelCase(str){
    return str.split(/[-_\s]/).map((word, index)=> index ===0 ? word.toLowerCase():word.charAt(0).toUpperCase()+
    word.slice(1).toLowerCase()).join('')
}

console.log(toCamelCase("hello world"));

