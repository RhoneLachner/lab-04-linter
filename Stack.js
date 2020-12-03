class Stack {
    #stack;
  
    constructor() {
      this.#stack = [];
    }
  
    // put item on top of stack
    push(item) {
            this.#stack.push(item)
    }
    
    // take item off the top of stack and return that item
    pop() {
            this.#stack.push()
    }
  
    // look at item on top of stack
    peek() {
        const topItem = this.stack[this.stack.length - 1];
        return topItem;
    }
  };
  
  module.exports = Stack;
  