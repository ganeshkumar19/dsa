/*function removechar(str, chartoremove){

    if(!str.includes(chartoremove)){
        return `mentioned char is not in the string`
    }
    let removedString = ''

    for(let i=0; i < str.length; i++){
        if(str[i] !== chartoremove){
            removedString+= str[i]
        }
    }

 

    return removedString
}*/

function removechar(str, chartoremove){

    if(!str.includes(chartoremove)){
        return `the char is not in str`
    }

    let removedStr = ''

    for(let i =0; i < str.length; i++){
        if(str[i]!== chartoremove){
            removedStr+= str[i]
        }
    }

    return removedStr
}

console.log(removechar('hello world', 'w'))