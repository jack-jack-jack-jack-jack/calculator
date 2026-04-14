let num1= 1
let num2 = 1 
let op = "+"

const calculate = (a,b,op) => {
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


