// function removeDup(arr){

//     let uniqueArr = []

//     for(let i =0; i < arr.length; i++){
//         if(uniqueArr.indexOf(arr[i]) === -1){
//             uniqueArr.push(arr[i])
//         }
//     }

//     return uniqueArr
// }

// console.log(removeDup([1,1,2,2,3,4,5]))

function removedup(arr){
    let uniqueArr = []

    for(let i =0; i < arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i])
        }
    }

    return uniqueArr
}

console.log(removedup([1,1,2,2,3,4,5]))