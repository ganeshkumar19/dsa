const fruits = ["apple", "banana", "kiwi"]

console.log(fruits)

// accessing elements

console.log(fruits[1])

//updating elemets

fruits[1] = 'orange'
console.log(fruits)

//adding elements to the list
fruits.push('strawberry')
console.log(fruits) // adding element to the end

fruits.unshift('pine')

console.log(fruits) // adding element to the start

//deleting elements to the list

fruits.pop('strawberry')
console.log(fruits) // deleting element to the end

fruits.shift('pine')

console.log(fruits) // deleting element to the start

//algorithms
//traversing

for (let i=0; i < fruits.length; i++){
    console.log(fruits[i])
}

// inserting an element at a specific location
 fruits.splice(1, 0, "red fruit")
 console.log(fruits)

 // deleting an element at a specific location

 fruits.splice(1, 1)
 console.log(fruits)

 // linked list 

 // create node
 
 class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
 }

 class LinkedList{
    constructor(){
        this.head = null
    }

    append(data){
        const newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            return
        }

        let current = this.head
 
        while(current.next){
           current = current.next
        }

        current.next = newNode
    }

     printList(){
        let current = this.head

        while(current){
            console.log(current.data)
            current = current.next
        }
    }
 }

 const list = new LinkedList()

 list.append('ganesh')
 list.append("dinesh")
 list.append("ravi")
 list.printList()