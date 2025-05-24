function allPositions(mainStr, subStr){
    let positions = []
    let pos = mainStr.indexOf(subStr)

    while(pos!== -1){
        positions.push(pos)
        pos = mainStr.indexOf(subStr, pos + 1)
    }

    return positions
}

console.log(allPositions("hello world, hello again", "hello"));