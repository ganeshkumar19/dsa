function greaterCandy(candies, extraCandy){

  let booleanArr = []

  let maxCandy = Math.max(...candies)

  for (let i =0; i < candies.length; i++){
    if(candies[i] + extraCandy >= maxCandy){
        booleanArr.push(true)
    }else{
        booleanArr.push(false)
    }
  }

  return booleanArr    

}

console.log(greaterCandy([4,3,1,1,2], 1))