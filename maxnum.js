// function maxNum(arr){
//     let max = arr[0]

//     for(let num of arr){
//         if(num > max){
//             max= num
//         }
//     }

//     return max
// }

// console.log(maxNum([1,6,9,6,5]))

function maxNum(arr){
    let max = arr[0]

    for(let i =0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }

    return max
}

console.log(maxNum([1,6,9,6,5]))