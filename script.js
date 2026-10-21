const operate = (num1, num2, op) => {
    switch(op){
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "/":
            return num1 / num2
        case "*":
            return num1 * num2
    }
}

console.log(operate(1,2,"-") )
