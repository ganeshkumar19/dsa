function pali(str){

    let reversedStr = ''

    for(let i = str.length-1; i >=0;i--){
        reversedStr+= str[i]
    }
    
    if(str.toLowerCase()=== reversedStr.toLowerCase()){
        return "given string is palindrome"
    }else{
        return "sorry"
    }
}

console.log(pali("malayalam"))