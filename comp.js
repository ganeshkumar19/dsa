function comp(str1, str2){
    let i = 0;
    let j= 0;

    let compstr = ''

    while(i < str1.length || j < str2.length){
        if(i < str1.length){
            compstr += str1[i]
            i++
        }

        if(j < str2.length){
            compstr += str2[j]
            j++
        }
    }

    return compstr
}

console.log(comp('abc', 'pqr'))