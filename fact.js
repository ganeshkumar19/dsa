function factori(num){

    if(num===0){
        return 1
    }

    let factorial = 1

    for(i=1; i <=num; i++){
        factorial*= i
    }

    return factorial
}

console.log(factori(5))