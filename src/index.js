module.exports = function check(str, bracketsConfig) {
  // your solution
let openBrackets = []
    bracketsConfig.forEach(el => openBrackets.push(el[0]))
let library ={}
    bracketsConfig.forEach(el => library[el[1]] = el[0])

let stack = []
let top = null
for (let i=0; i < str.length; i++) {
    let current = str[i]  
    
    if (openBrackets.includes(current)) {
        if(library[current] === current && current === top) {
            stack.pop()
            top = stack[stack.length-1]
        }
        else {
        stack.push(current)
        top = stack[stack.length-1]  
        } 
        }
    else {
            if (stack.length === 0) {return false}
                if (library[current] === top) {
                stack.pop()
                top = stack[stack.length-1]
                }
                else {return false}
        }
  }

return stack.length === 0
}
