let num1 = null;
let num2 = null;
let op = null;

const current = document.querySelector(".screen-btm");
const previous = document.querySelector(".screen-top");

const operate = (num1, num2, op) => {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num2;
        case "%":
            return num1 % num2;
    }
};

const btns = document.querySelectorAll("button");
btns.forEach(btn => btn.addEventListener("click", () => {
    switch (btn.dataset.type) {
        case "number":
            if (previous.textContent.includes("=")) {
                current.textContent = btn.textContent;
                num1 = null;
                num2 = null;
                op = null;
            } else {
                current.textContent = current.textContent === "0"
                    ? btn.textContent
                    : current.textContent + btn.textContent;
            }
            break;

        case "operator":
            if (num1 === null) {
                num1 = Number(current.textContent);
            } else {
                num2 = Number(current.textContent);
                num1 = operate(num1, num2, op);
            }
            
            op = btn.textContent;
            previous.textContent = `${num1} ${op}`;
            current.textContent = "0";
            break;

        case "clear-all":
            current.textContent = "0";
            previous.textContent = "";
            num1 = null;
            num2 = null;
            op = null;
            break;

        case "clear":
            current.textContent = "0";
            break;

        case "equals":
            if (num1 !== null && op !== null) {
                num2 = Number(current.textContent);
                const result = operate(num1, num2, op);
                previous.textContent = `${num1} ${op} ${num2} =`;
                current.textContent = String(result);
                num1 = null;
                num2 = null;
                op = null;
            }
            break;

        case "decimal":
            if (previous.textContent.includes("=")) {
                current.textContent = "0";
                previous.textContent = "";
                num1 = null;
                num2 = null;
                op = null;
            }

            if (!current.textContent.includes(".")) {
                current.textContent += ".";
            }
            break;
}}));