function frequency(str){
    let frequencies = new Map()

    for(let char of str){
        frequencies.set(char, (frequencies.get(char)|| 0) + 1)
    }

    return Object.fromEntries(frequencies)
}

console.log(frequency('hello'))