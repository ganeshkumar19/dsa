function plaindrom(str){
    let reverseStr= ''

    for (let i = str.length-1; i >=0; i--){
        reverseStr+= str[i]

        console.log(reverseStr)
    }

    if(str === reverseStr){
        return `given string ${str} is a palindrome`
    }else{
        return `given string ${str} is not a palindrome`
    }
}

console.log(plaindrom('malayalam'))