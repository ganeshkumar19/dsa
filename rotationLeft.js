function rotationLeft(str, n){
    let rotateString = ''

    for (let i=n; i< str.length++; i++){
        rotateString+= str[i]
    }

    for(let i=0; i< n; i++){
        rotateString+= str[i]
    }

    return rotateString
}

console.log(rotationLeft('abcedef', 2))