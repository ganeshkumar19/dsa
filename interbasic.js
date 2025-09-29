// function reverseString(str){
//    return str.split('').reverse().join('')
// }

// console.log(reverseString('ganeshkumar'))for l

// function palindrome(str){
//     let reversestr = ''

//     for(let i =str.length-1; i >=0; i--){
//         reversestr+=str[i]
//     }

//     console.log(reversestr)

//     if(reversestr.toLowerCase()===str.toLowerCase()){
//         return `the given string ${str} is a palindrome`
//     }else{
//         return `the given string ${str} is not a palindrome`
//     }
// }

// console.log(palindrome('Malayalam'))

// function charcount(str){

//     let charcount = {}

//     for(let char of str){
//         charcount[char] = (charcount[char]|| 0)+ 1
//     }

//     return charcount
// }

// console.log(charcount('banana'))

// function findmax(arr){
//     let max = arr[0]

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]> max){
//             max = arr[i]
//         }
//     }

//     return max
// }

// console.log(findmax([1,6,9,14]))

// function findmin(arr){
//     let min = arr[0]

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//     }

//     return min
// }

// console.log(findmin([9,14, 12, 2, 4]))

// function removeduparr(arr){
//     let uniquearr = []

//     for (let word of arr){
//         if(!uniquearr.includes(word)){
//             uniquearr.push(word)
//         }
//     }

//     return uniquearr
// }

// console.log(removeduparr([1,4, 9,9,7, 4, 2]))

// function removedupstr(str){
//    let seen = new Set()
//    let result = ''

//    for(let char of str){
//     if(!seen.has(char)){
//         seen.add(char)
//         result+=char
//     }
//    }

//    return result
// }

// console.log(removedupstr('aaabbcaadd'))

// function factorial(n){
//     if(n===0) return 1

//     return n * factorial(n-1)
// }

// console.log(factorial(5))

// function fact(n){
//     if(n===0) return 1

//     let fact =1

//     for(let i=1; i <=n; i++){
//         fact*= i
//     }

//     return fact
// }
// console.log(fact(5))

// function fizzbizz(n){

   

//     for(let i = 0; i <=n; i++){
//         let output = ''
//          if(i%3 ===0) output+= 'fizz'
//          if(i%5 ===0) output+= 'bizz'
//          console.log(output || i)
//     } 
// }

// console.log(fizzbizz(15))

// // function flattenarray(arr){
// //     return arr.flat(Infinity)
// // }

// // console.log(flattenarray([1, [2, [3, [4]]]]))

// function debounce(func, delay){
//     let timer;

//     return function(...args){
//         clearTimeout(timer)
//         timer = setTimeout(()=> func.apply(this, args), delay)
//     }
// }

// const log = debounce(()=> console.log('debounced'), 2000)

// log()
// log()
// log()

//infinite currying is a variation of currying where a function keep returning an another function that accepts next argument without a fixed number of parameters. the chain
// will continue indifinitely and final value is return only when the chain is explicity ended

// function infinitecurr(a){
//     return function(b){
//         if(b!== undefined){
//             return infinitecurr(a+ b)
//         }
//         return a
//     }
    
// }

// function infinitecur(a){
//     return function(b){
//         if(b!== undefined){
//             return infinitecur(a+b)
//         }
//         return a
//     }
// }

// console.log(infinitecurr(1)(2)(3)(4)()); // 10

// function isPrime(n){
//     if(n<=1) return `it is not a prime number`

//     for(let i=2; i<n; i++){
//         if(n%i ===0) return `it is not a prime number`
//     }

//     return `it is a prime number`
// }

// console.log(isPrime(12))

function fib(n){
    let series = [0,1]

    for(let i=2;i<=n;i++){
        series.push(series[i-1] + series[i-2])
    }

    return series
}

console.log(fib(20))

function secondLargest(arr){
    let firstlargest = arr[0]
    let secondlargest = arr[0]

    for(let i=0; i < arr.length; i++){
        if(arr[i] > firstlargest){
            secondlargest = firstlargest
            firstlargest = arr[i]
        } else if(arr[i] > secondlargest &&  arr[i] < firstlargest){
            secondlargest = arr[i]
        }
    }

    return secondlargest
}

console.log(secondLargest([1,5,7,9, 11]))

// function secondsmallest(arr){
//     let firstsmallest = arr[0]
//     let secondsmallest = arr[0]

//     for(let i=0; i< arr.length; i++){
//         if(arr[i] < firstsmallest){
//             secondsmallest = firstsmallest
//             firstsmallest = arr[i]
//         }else if(arr[i] < secondsmallest && arr[i] > firstsmallest){
//             secondsmallest = arr[i]
//         }
//     }

//     return secondsmallest
// }

// console.log(secondsmallest([1,7,9,10,12,13]))

//remove duplicates from the array

// function removedup(str){
//     let charset = {}

//     let uniqueChar = []

//     for(let char of str){
//         charset[char] = (charset[char] || 0) + 1
//     }

//     for(let char of str){
//         if(charset[char] ===1){
//             uniqueChar.push(char)
//         }
//     }

//     return uniqueChar
// }

// console.log(removedup('aaabbccd'))

//remove duplicates from string

// function removedupstring(str){

//     let uniqueArr = []

//     for(let char of str){
//         if(uniqueArr.indexOf(char) === -1){
//             uniqueArr.push(char)
//         }
//     }

//     return uniqueArr.join("")
// }

// console.log(removedupstring('aaabbccefwwd'))

// function firstnonrepeatingchar(str){

//     let charset = {}

//     for(let char of str){
//         charset[char] = (charset[char] || 0)+ 1
//     }

//     for (let char of str){
//         if(charset[char]===1){
//             return char
//         }
//     }

//     return `no first non-repeating char`
// }

// console.log(firstnonrepeatingchar("swiss")); // Output: "w"
// console.log(firstnonrepeatingchar("aabbcc")); // Output: null

// function countOccurence(str){
//     let charset = {}

//     for(let char of str){
//         charset[char] = (charset[char]||0)+1
//     }

//     return charset
// }

// console.log(countOccurence('aabbbcccddb'))

//Reverse Words in a Sentence 


// function reversewords(sentance){
//     let words = sentance.split(" ")

//     let reverseSentance = ""

//     for(let i = words.length-1; i >= 0; i--){
//         reverseSentance += words[i]
//         if(i> 0) reverseSentance+= ' '
//     }

//     return reverseSentance

// }

// console.log(reversewords('I love Javascript'))

function areAnagrams(str1, str2){

    if(str1.length !== str2.length) return false
    let string1 = str1.toLowerCase()
    let string2 = str2.toLowerCase()

    let count = {}

    for(let char of string1){
        count[char]= (count[char]|| 0) + 1
    }

    for(let char of string2){
        if(!count[char]){
            return false
        }

        count[char]--
    }

    for (let key in count){
        if(count[key] !==0){
            return false
        }
    }

    return true
}

console.log(areAnagrams("listen", "silent"));   // true
console.log(areAnagrams("triangle", "integral")); // true
console.log(areAnagrams("hello", "world"));     // false

// function isIsogram(str){
//     let string = str.toLowerCase()
//     let charCount ={}

//     for(let char of string){
//         charCount[char] = (charCount[char] || 0)+ 1
//     }

//     for(let char of string){
//         if(charCount[char] > 1){
//             return false
//         }
//     }

//     return true
// }

// console.log(isIsogram("machine"));   // true
// console.log(isIsogram("letter"));    // false
// console.log(isIsogram("World"));     // true
// console.log(isIsogram("Programming")); // false

// function longestsubstring(s){
//     let set = new Set()
//     let left = 0
//     let maxLength = 0
//     let startIndex = 0

//     for(let right=0; right < s.length; right++){

//          while(set.has(s[right])){
//         set.delete(s[left])
//         left++
//         }

//         set.add(s[right])
//          if(right-left+ 1 > maxLength){
//             maxLength = right-left+ 1
//             startIndex = left
//          }

//     }

//     const longestsub = s.substring(startIndex, startIndex+maxLength)

//     return {maxLength, longestsub}
// }

// console.log(longestsubstring("abcabcbb")); // 3 ("abc")
// console.log(longestsubstring("bbbbb"));    // 1 ("b")
// console.log(longestsubstring("pwwkew"));   // 3 ("wke")

// function compressString(s){
//     let compressed = ''
//     let count = 1

//     for(let i = 1; i <= s.length; i++){
//         if(s[i] === s[i-1]){
//             count++
//         }else{
//             compressed+= s[i-1]+ count
//             count=1
//         }
//     }

//     return compressed.length <= s.length ? compressed: s
// }

// console.log(compressString("aaabbc"));   // "a3b2c1"
// console.log(compressString("abcd"));     // "abcd"
// console.log(compressString("aabccccc")); // "a2b1c5"
// console.log(compressString(""));    // ""


// function decompressstring(s){
//     let result = ''
//     let i = 0

//     while (i < s.length){
//         let char = s[i]
//         i++

//         let numstr = ''

//         while(i < s.length && s[i] >= '0' && s[i] <= '9'){
//             numstr+= s[i]
//             i++
//         }

//         let count = parseInt(numstr, 10)

//         result+= char.repeat(count)
//     }

//     return result
// }

// console.log(decompressstring("a3b2c1"));  // "aaabbc"
// console.log(decompressstring("a2b1c5"));  // "aabccccc"
// console.log(decompressstring("x5y3"));    // "xxxxxyyy"


function compress(s){
    let set = new Set()
    let left = 0
    let maxLength = 0
    let startIndex = 0

    for(let right=0; i <right.length; right++){
        while(set.has(s[right])){
            set.delete(s[left])
            i++
        }

        set.add(s[right])

        if(right-left+1 > maxLength){
            maxLength = right-left+1
            startIndex= left
        }


    }

        let longestsub = s.substring(startIndex, maxLength)

        return {longestsub, maxLength}
}

function findrepeat(s){
    let compress = ''
    let count = 1

    for(let i=1; i <=s.length; i++){
        if(s[i]=== s[i-1]){
            count++
        }else{
            compress+= s[i-1] + count
            count =1
        }
    }

    return compress
}

console.log(findrepeat("aaabbc"));   // "a3b2c1"