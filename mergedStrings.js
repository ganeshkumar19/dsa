function mergeAlternately(s1, s2){
    let mergedString = ''
    let i =0; let j =0

    while(i < s1.length || j < s2.length){

        if (i < s1.length){
            mergedString+= s1[i]
            i++
        }
    
        if (j < s2.length){
            mergedString+= s2[j]
            j++
        }

    }

    return mergedString

}

console.log(mergeAlternately("abc", "12345"));