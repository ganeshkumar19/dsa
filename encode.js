function encode(s){
    let encodedStr = ''
    let count = 1

    for(let i = 0; i < s.length; i++){
        if(s[i]=== s[i+1]){
            count++
        }else{
            encodedStr+= s[i]+ count
            count=1
        }
    }
    return encodedStr
}

const input = "aaaabbbcc";
console.log(encode(input)); // Output: "a4b3c2"