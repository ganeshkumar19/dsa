function mergedstring(str1, str2){
    let alternatestring = ''
    let i = 0; let j =0;

    while( i < str1.length || j < str2.length){

        if(i <str1.length){
            alternatestring+= str1[i]
            i++
        }

        if(j <str2.length){
            alternatestring+= str2[j]
            j++
        }
    }

    return alternatestring
}

console.log(mergedstring('abc', 'def'))