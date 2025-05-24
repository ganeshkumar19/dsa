function findUniqueCharacters(str){
    let chatCount = {}

    for(let i =0; i < str.length; i++){
        chatCount[str[i]] = (chatCount[str[i]] || 0) + 1
    }

    let uniquechars = []

    for(let i =0; i < str.length; i++){
        if(chatCount[str[i]] === 1){
            uniquechars.push(str[i])
        }
    }

    return uniquechars
}

console.log(findUniqueCharacters("abcabcde")); 