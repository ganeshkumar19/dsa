function extractNumbers(str){
    let numbers = []
    let num = ''

    for(let char of str){
        if(!isNaN(char) && char!==' '){
            num+= char
        }else if(num.length > 0){
            numbers.push(num)
            num = ''
        }
    }

    if(num.length > 0){
        numbers.push(num)
    }

    return numbers
}

console.log(extractNumbers("abc123xyz456"));