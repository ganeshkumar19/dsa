class Node{
    constructor(data){
        this.data = data;
        this.prev= null;
        this.next= null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
    }

    addFirst(data){
        const newNode = new Node(data)

        newNode.next = this.head

        if(this.head){
            this.head.prev = newNode
        }
        this.head = newNode
    }

  /*  addFirst(data){
        const newNode = new Node(data)

        newNode.next = this.head

        if(this.head){
            this.head.prev = newNode
        }

        this.head = newNode
    }*/

    addLastNew(data){
        const newNode = new Node = data

        if(!this.head){
            this.head = newNode
        }
        let current = this.head

        while(current.next){
            current = current.next
        }

        current.next = newNode
        newNode.prev = current
    }

    addLast(data){
        const newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            return
        }

        let current = newNode

        while(current){
            current = current.next
        }

        newNode.prev = current
        current.next = newNode
    }

    size(){
        let count = 0

        let current = this.head

        while(current){
            count++
            current = current.next
        }

        return count
    }

    addAt(index,data){

        if(index < 0 || index > this.size()){
            console.log("invalid use")
            return
        }

        const newNode = new Node(data)

        if(index===0){
            newNode.next = this.head

            if(this.head){
                this.head.prev = newNode
            }

            this.head = newNode
            return
        }

        let current = this.head

        for(let i=0; i < index-1; i++){
            current = current.next
        }
        newNode.next = current.next
        newNode.prev = current

        if(current.next){
            current.next.prev = newNode
        }

        current.next = newNode
    }

   /* addAt(index,data){

        if(index < 0|| index > this.size()){
            console.error("invalid info")
        }
        const newNode = new Node(data)
        if(index===0){
        newNode.next = this.head

        if(this.head){
            this.head.prev = newNode
        }

        newNode = this.head
        }

        let current = this.head

        for (i=0; i< index; i++){
            current = current.next
        }

        newNode.prev = current
        newNode.next = current.next

        if(current.next){
            current.next.prev = newNode
        }

        current.next = newNode
    }*/

    addFirst(){
       if(!this.head){
        return
       }

       this.head = this.head.next

       if(this.head){
        this.head.prev= null
       }
    }

    removeLast(){
        if(!this.head){
            return
        }

        if(!this.head.next){
            this.head = null
            return
        }

        let current = this.head
        while(current.next.next){
            current= current.next
        } 

        current.next = null
    }

    removeAt(index){
        if(index < 0 | index > this.size()){
            console.error('invalid credentials')
        }

        if(index===0){
            this.head = this.head.next

            if(this.head){
                this.head.prev= null
            }
        }

        let current = this.head
        for (let i=0; i < index-1; i++){
            current = current.next
        }

        if(current.next){
            current.next = current.next.next

            if(current.next){
                 current.next.prev = current
            }
        }
    }

}