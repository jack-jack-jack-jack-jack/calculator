let num1= null
let num2 = null
let op = null

const operate = (a,b,op) => {
    switch(op) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            return a / b
    }
}


