// Function to perform addition
function add() {
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);

    if (isNaN(input1) || isNaN(input2)) {
        document.getElementById("result").textContent = "Error: Please enter valid numbers in both input fields.";
    } else {
        const result = input1 + input2;
        document.getElementById("result").textContent = `Result: ${input1} + ${input2} = ${result}`;
    }
}

// Function to perform subtraction
function subtract() {
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);

    if (isNaN(input1) || isNaN(input2)) {
        document.getElementById("result").textContent = "Error: Please enter valid numbers in both input fields.";
    } else {
        const result = input1 - input2;
        document.getElementById("result").textContent = `Result: ${input1} - ${input2} = ${result}`;
    }
}

// Function to perform multiplication
function multiply() {
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);

    if (isNaN(input1) || isNaN(input2)) {
        document.getElementById("result").textContent = "Error: Please enter valid numbers in both input fields.";
    } else {
        const result = input1 * input2;
        document.getElementById("result").textContent = `Result: ${input1} * ${input2} = ${result}`;
    }
}

// Function to perform division
function divide() {
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);

    if (isNaN(input1) || isNaN(input2)) {
        document.getElementById("result").textContent = "Error: Please enter valid numbers in both input fields.";
    } else if (input2 === 0) {
        document.getElementById("result").textContent = `Input1 = ${input1}, Input2 = 0\nInput1 / Input2 = ${input1} / 0 = Infinity`;
    } else {
        const result = input1 / input2;
        document.getElementById("result").textContent = `Result: ${input1} / ${input2} = ${result}`;
    }
}

// Function to clear the result
function clearResult() {
    document.getElementById("result").textContent = "Result: ";
}

// Attach click event listeners to the buttons
document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);
document.getElementById("clear").addEventListener("click", clearResult);
