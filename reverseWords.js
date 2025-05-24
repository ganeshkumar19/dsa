/*function reverseWords(sentence){
    return sentence.split(' ').reverse().join(' ')
}

console.log(reverseWords('You are in Amazon'))*/

function reverseWords(sentence){
    const words = sentence.split(" ")

    let reversedsentence = ''

    for(let i= words.length-1; i >= 0; i--){
        reversedsentence+= words[i]

        if(i!==0){
            reversedsentence+= ' '
        }
    }

 

    return reversedsentence
}

console.log(reverseWords('You are in Amazon'))