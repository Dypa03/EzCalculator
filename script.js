// 
const textbox = document.getElementById("text-box");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const point = document.getElementById("point");

const equals = document.getElementById("equals");
const ceButton = document.getElementById("ce-button");

function addInput(event) {
    const clickedButton = event.target;
    const inputValue = clickedButton.value;
    
    if (inputValue !== "=" && inputValue !== "CE") {
        textbox.value += inputValue;
    }
}

function clearBox() {
    textbox.value="";
}

function calculate() {
    const result = eval(textbox.value);
    textbox.value = result;
}

// Add event listeners
numbers.forEach(number => {
    number.addEventListener("click", addInput);
});

operators.forEach(operator => {
    operator.addEventListener("click", addInput);
});

point.addEventListener("click", addInput);
// ceButton.addEventListener("click", clearBox());
