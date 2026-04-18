let current = null
let prev = null
let op = null
let justEvaluated = false

const operate = (a, b, op) => {
    if (op === "/" && b === 0) return "Nice try. No dividing by 0."
    switch (op) {
        case "+": return a + b
        case "-": return a - b
        case "*": return a * b
        case "/": return a / b
    }
}

const round = (num) => {
    if (typeof num !== "number") return num
    return Math.round(num * 1e6) / 1e6
}

const currentScreen = document.querySelector(".currentScreen")
const btns = document.querySelectorAll("button")

btns.forEach(btn => {
    btn.addEventListener("click", () => {

        // DIGITS
        if (btn.classList.contains("digit")) {
            if (justEvaluated) {
                current = null
                prev = null
                op = null
                justEvaluated = false
            }

            current = (current ?? "") + btn.textContent
            currentScreen.textContent = current
        }

        // DECIMAL
        if (btn.classList.contains("decimal")) {
            if (current?.includes(".")) return
            current = (current ?? "0") + "."
            currentScreen.textContent = current
        }

        // OPERATORS (+ - * /)
        if (btn.classList.contains("op") && btn.textContent !== "=") {
            if (current === null && prev !== null) {
                op = btn.textContent
                return
            }
            if (current === null) return

            if (prev === null) {
                prev = Number(current)
            } else {
                prev = operate(prev, Number(current), op)
                prev = round(prev)
            }

            op = btn.textContent
            current = null
            currentScreen.textContent = prev
        }

        // EQUALS
        if (btn.textContent === "=") {
            if (prev === null || current === null || op === null) return

            let result = operate(prev, Number(current), op)
            result = round(result)

            currentScreen.textContent = result

            current = result.toString()
            prev = null
            op = null
            justEvaluated = true
        }

        // CLEAR (AC)
        if (btn.classList.contains("clear")) {
            current = null
            prev = null
            op = null
            justEvaluated = false
            currentScreen.textContent = ""
        }

        // BACKSPACE (optional button)
        if (btn.classList.contains("backspace")) {
            if (!current) return
            current = current.slice(0, -1) || null
            currentScreen.textContent = current ?? ""
        }

    })
})


// KEYBOARD SUPPORT
document.addEventListener("keydown", (e) => {
    const key = e.key

    // DIGITS
    if (!isNaN(key)) {
        btns.forEach(btn => {
            if (btn.classList.contains("digit") && btn.textContent === key) {
                btn.click()
            }
        })
    }

    // OPERATORS
    if (["+", "-", "*", "/"].includes(key)) {
        btns.forEach(btn => {
            if (btn.classList.contains("op") && btn.textContent === key) {
                btn.click()
            }
        })
    }

    // EQUALS
    if (key === "Enter" || key === "=") {
        btns.forEach(btn => {
            if (btn.textContent === "=") btn.click()
        })
    }

    // DECIMAL
    if (key === ".") {
        document.querySelector(".decimal")?.click()
    }

    // CLEAR
    if (key.toLowerCase() === "c") {
        document.querySelector(".clear")?.click()
    }

    // BACKSPACE
    if (key === "Backspace") {
        document.querySelector(".backspace")?.click()
    }
})