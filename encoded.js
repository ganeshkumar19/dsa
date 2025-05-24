function endcoded(str){

    let endcodedstr= ''
    let count = 1

    for (let i= 0; i <str.length; i++){
        if(str[i]=== str[i+1]){
            count++
        }else{
            endcodedstr+= str[i]+count
            count=1
        }
    }

    return endcodedstr
}

console.log(endcoded('aaabbcccc'))