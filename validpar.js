function validpar(str){
 let obj = {
    '(': ')',
    '[': ']',
    '{': '}'
 }

 let arr = []

 for(let i =0; i<str.length; i++){

    if(obj[str[i]]){
        arr.push(str[i])
    } else{
        const poppedEl = arr.pop()
        if(poppedEl !== str[i]){
            return false
        } 
    }
 }

 return arr.length === 0 ? true: false
}

console.log(validpar('())'))