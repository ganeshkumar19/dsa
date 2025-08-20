
function gapstring(str){
    let formattedstring = ''

    for(let i =0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase() && /[A-Z]/.test(str[i]) && i!==0){
            formattedstring += ' ' + str[i]
        } else{
            formattedstring+= str[i]
        }
    }

    return formattedstring
}

let a = "GaneshKumar'sIntervew";
console.log(gapstring(a));
