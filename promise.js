const MyPromise = new Promise((resolve, reject)=>{
    let resolved = false;

    if(resolved){
        resolve('promise resolved')
    } else{
        reject('promise not resolved')
    }
})

MyPromise.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})

