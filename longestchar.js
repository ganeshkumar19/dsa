function longestchar(str){
    let charset = new Set()
    let left = 0
    let maxLength =0
    let startIndex = 0

    for (let right=0; right < str.length; right++){
        while(charset.has(str[right])){
            charset.delete(str[left])
            left++
        }

        charset.add(str[right])
        if(right-left+1 > maxLength){
            maxLength= right-left+1
            startIndex = left
        }
    }

    let longestSubstr = str.substring(startIndex, startIndex + maxLength)
    return longestSubstr;
}

// Example test cases
console.log(longestchar("abcabcbb"));  