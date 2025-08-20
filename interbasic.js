// function reverseString(str){
//    return str.split('').reverse().join('')
// }

// console.log(reverseString('ganeshkumar'))for l

// function palaindrome(str){
//     let reverseStr = ''

//     for(let i = str.length-1; i >=0; i--){
//         reverseStr+= str[i]
//     }

//     if(str.toLowerCase()===reverseStr.toLowerCase()){
//         return `the given string ${str} is palindrome`
//     }else{
//         return `the given string ${str} is not a palindrome`
//     }
// }

// console.log(palaindrome('Malayalam'))

// function charocuur(str){

//     let charCount = {}

//     for(let char of str){
//         charCount[char] = (charCount[char] || 0) + 1
//     }

//     return charCount
// }

// console.log(charocuur('banana'))

// function findMax(arr){
//     let maxnum = arr[0]

//     for(let num of arr){
//         if(num > maxnum){
//             maxnum= num
//         }
//     }

//     return maxnum
// }

// console.log(findMax([1, 2,5,6,10]))

// function findMin(arr){
//     let minnum = arr[0]

//     for(let num of arr){
//         if(num < minnum){
//             minnum = num
//         }
//     }

//     return minnum

// }

// console.log(findMin([1, 2,5,6,10]))

// function removedup(arr){
//     let uniqueArr = []

//     for (let word of arr){
//         if(!uniqueArr.includes(word)){
//             uniqueArr.push(word)
//         }
//     }

//     return uniqueArr
// }

// console.log(removedup([1,3,3,4,2,1,7,9]))

// function factorial(n){
//     if(n===0) return 1
//     return n * factorial(n-1)
// }

// console.log(factorial(5))

// function fact(n){
//     if(n===0) return 1

//     let fact = 1

//     for(let i=1; i <=n; i++){
//         fact*= i
//     }

//     return fact
// }

// console.log(fact(5))

// function fizzbizz(n){
   
//     for (let i =0; i <=n; i++){
//          let output = ''
//         if(i % 3===0) output += 'fizz'
//         if(i% 5===0) output+= 'bizz'
//         console.log(output || i)
//     }
// }
// (fizzbizz(15))

// function flattenarray(arr){
//     return arr.flat(Infinity)
// }

// console.log(flattenarray([1, [2, [3, [4]]]]))

// function debounce(func, delay){
//     let timer;

//     return function(...args){
//         clearTimeout(timer)
//         timer = setTimeout(()=> func.apply(this, args), delay)
//     }
// }

// const log = debounce(() => console.log("Debounced!"), 1000);

// log();
// log();
// log(); // Only this will trigger after 1s

// function infinitecur(a){
//     return function(b){
//         if(b!== undefined){
//             return infinitecur(a+b)
//         }
//         return a
//     }
// }

// console.log(infinitecur(1)(2)(3)(4)()); // 10

// function isPrime(n){

//     if( n<=1) return `it is not a prime number`

//     for(let i =2; i < n; i++){
//         if(n%i === 0){
//             return `it is not a prime number`
//         } 
//     }

//     return `it is a prime number`
// }

// console.log(isPrime(13))

// function fib(n){
//     let series = [0,1]

//     for(let i=2; i <=n; i++){
//         series.push(series[i-1] + series[i-2])
//     }

//     return series
// }

// console.log(fib(10))

function secondlargest(arr){

    let firstlargestnum = arr[0]
    let secondlaregestnum = arr[0]

    for(let i=0; i < arr.length; i++){
        if(arr[i] > firstlargestnum){
            secondlaregestnum = firstlargestnum
            firstlargestnum = arr[i]
        } else if(arr[i] > secondlaregestnum){
            secondlaregestnum = arr[i]
        }
    }

    return secondlaregestnum
}

console.log(secondlargest([1,7,9,10,13]))