function Isogram(str){
    let charSet= {}

    for(let char of str){
        charSet[char] = (charSet[char]|| 0)+ 1
    }

    for(let char of str){
        if(charSet[char] > 1){
            return `the given string ${str} is not an isogram`
        }
    }

    return `the given string ${str} is an isogram`
}

console.log(Isogram('abdcd'))