function rotationstring(s1, s2){
    let combined = s1+s1

    return combined.includes(s2)
}

console.log(rotationstring("abcd", "cdab"));