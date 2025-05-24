function gcd(a,b){
   return b===0 ? a: gcd(b, a%b)
}

function greatestComman(str1, str2){
    if(str1+str2 !== str2+str1){
        return ''
    }

    let gcdLength = gcd(str1.length, str2.length)

    return str1.substring(0, gcdLength)
}

console.log(greatestComman("ABCABC", "ABC")); // Output: "ABC"
console.log(greatestComman("ABABAB", "ABAB")); // Output: "AB"