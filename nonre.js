function nonre(str){
    let charSet = {}

    for (let char of str){
        charSet[char] = (charSet[char] || 0)+1
    }

    for(let char of str){
        if(charSet[char] ===1){
            return char
        }
    }

    return null
}

console.log(nonre('abcabd'))