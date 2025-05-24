function mergedstring(word1, word2){
    let mergedStr = ''
    let i=0; let j=0;

    while(i < word1.length ||  j < word2.length){

        if(i < word1.length){
            mergedStr+= word1[i]
            i++
        }

        if(j < word2.length){
            mergedStr+= word2[j]
            j++
        }
    }

    return mergedStr
}

console.log(mergedstring("abc", "pqr"));