function countOccurrences(mainStr, subStr){
    let count =0
    let pos = mainStr.indexOf(subStr)

    while(pos!==-1){
        count++
        pos = mainStr.indexOf(subStr, pos +subStr.length)
    }

    return count
}

console.log(countOccurrences("hello hello world", "hello")); // Output: 2
console.log(countOccurrences("ababab", "ab")); // Output: 3
console.log(countOccurrences("aaaa", "aa")); // Output: 3
console.log(countOccurrences("abcdef", "z")); // Output: 0