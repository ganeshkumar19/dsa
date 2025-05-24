function replacesubstr(str, oldSub, newSub){
    return str.split(oldSub).join(newSub)
}

console.log(replacesubstr("hello world, world!", "world", "everyone"))