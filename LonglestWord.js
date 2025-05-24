function LongestWord(sentence){

    let words = sentence.split(" ")
    let longestWord = ""

    let maxWord = words[0].length

    for(let i=0; i <= words.length-1; i++){
        if(words[i].length> maxWord){
            longestWord = words[i]
        }
    }

    return longestWord
}

console.log(LongestWord("i love javascript"))