function countWords(str){
    let words = str.match(/\b\w+\b/g)
    return words ? words.length : 0
}

console.log(countWords("Hello, world! How are you?")); 