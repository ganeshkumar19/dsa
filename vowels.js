function vowels(str) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();

        if (vowel.includes(char)) {
            vowelCount++;
        } else if (char >= 'a' && char <= 'z') {
            consonantCount++;
        }
    }

    return `The number of vowels: ${vowelCount}, and the number of consonants: ${consonantCount}`;
}

console.log(vowels("my name is ganesh")); 
