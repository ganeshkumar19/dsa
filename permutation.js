function permutation(str, l=0, r=str.length-1, result=[]){
    if(l===r){
        result.push(str)
    }else{
        for(let i =l; i<=r;i++){
            str = swap(str, l, i)
            permutation(str, l+1, r, result)
            str = swap(str, l, i)
        }
    }

    return result

}

function swap(str, i, j){
    let arr = str.split("");
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr.join('')
}

// corrected Function to swap characters in the stri


console.log(permutation("abc"));
