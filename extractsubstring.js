function extractSubstring(str){
  /*  let startIndex = str.indexOf(startchar)
    let endIndex = str.indexOf(endchar, startIndex+1)

    if(startIndex!==-1 && endIndex!==-1){
        return str.substring(startIndex+1, endIndex)
    }

    return null*/

    //without defining char

    let startIndex = -1
    let endIndex = -1

    for(let i=0; i< str.length; i++){
        if(!str[i].match(/[a-zA-Z0-9\s]/)){
            startIndex = i
            break;
        }
    }

    if(startIndex===-1) return null;

    for(let i=startIndex+1; i< str.length; i++){
        if(!str[i].match(/[a-zA-Z0-9\s]/)){
            endIndex = i
            break;
        }
    }

    if (endIndex === -1) return null;

    return str.substring(startIndex+1, endIndex)

}

console.log(extractSubstring("hello [world]!"));