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
const currentScreen = document.querySelector(".currentScreen")
const btns = document.querySelectorAll("button")
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        currentScreen.textContent += btn.textContent
        })
    })



