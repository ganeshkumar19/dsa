const fruits = ['apple', 'orange', 'banana', 'kiwi']
let index = 0

const heading = document.getElementById('title')

heading.addEventListener('click', ()=>{
   heading.textContent = fruits[index]
   index = (index+1) % fruits.length
})