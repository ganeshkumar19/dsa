function onlydigits(str){
    return !isNaN(str) && str.trim !== ''
}

console.log(onlydigits('12a45'))