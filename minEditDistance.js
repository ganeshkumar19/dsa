function areStringsEqual(str1, str2){
    if(str1.length !== str2.length) return false

    for(let i =0; i < str1.length; i++){
        if(str1[i] !== str2[i]){
            return false
        }
    }

    return true
}

console.log(areStringsEqual("hello", "hell"));