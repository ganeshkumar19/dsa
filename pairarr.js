function pairarr(arr, target){
    for (let i=0; i < arr.length; i++){
       for(let j=i+1; j < arr.length; j++){
        if(arr[i] +arr[j] === target){
            return true
        }
       }
    }
    return false
}

console.log(pairarr([0, -1, 2, -3, 1], -2))