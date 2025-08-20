// function LongestWord(sentence){

//     let words = sentence.split(" ")
//     let longestWord = ""

//     let maxWord = words[0].length

//     for(let i=0; i <= words.length-1; i++){
//         if(words[i].length> maxWord){
//             longestWord = words[i]
//         }
//     }

//     return longestWord
// }

// console.log(LongestWord("i love javascript"))

function LongestWord(sentance){
    let longestword = ''
    let words = sentance.split(' ')

    let maxWord = words[0].length

    for(let word of words){
        if(word.length > maxWord){
            longestword = word
        }
    }

    return  longestword
}


console.log(LongestWord("i love javascript"))
