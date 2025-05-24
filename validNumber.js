function validNumber(str){
    return !isNaN(str) && str.trim !==''
}
console.log(validNumber('123.4'))