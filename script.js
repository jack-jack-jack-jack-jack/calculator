const btns = document.querySelectorAll("button")
btns.forEach(btn => btn.addEventListener("click", e =>{
    alert("button clicked")
}))


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

