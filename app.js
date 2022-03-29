const firstNumberInput = document.getElementById("firstNumber");
const firstfeedbackTag = document.getElementById("firstfeedback");
const secondNumberInput = document.getElementById("secondNumber");
const secondFeedbackTag = document.getElementById("secondFeedback");
const selectOperator = document.getElementById("select");
const seclectBoxFeedbackTag = document.getElementById("seclectBoxFeedback");
const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("clear");
const resultTag = document.getElementById("result");

// Remove d-none class
const displayNone = (tagName) => {
    tagName.classList.remove("d-none");
};
// Add d-none class
const addDisplayNone = (tagName) => {
    tagName.classList.add("d-none");
};
// Add is-invalid class
const isInvalid = (tagName) => {
    tagName.classList.add("is-invalid");
};
// Remove is-invalid class
const removeIsInvalid = (tagName) => {
    tagName.classList.remove("is-invalid");
};
// Claculate Button
calculateButton.addEventListener("click", () => {
    if (firstNumberInput.value === "" || null) {
        isInvalid(firstNumberInput);
        displayNone(firstfeedbackTag);
    }
    if (secondNumberInput.value === "" || null) {
        isInvalid(secondNumberInput);
        displayNone(secondFeedbackTag);
    }
    if (selectOperator.value === "empty" || null) {
        isInvalid(selectOperator);
        displayNone(seclectBoxFeedbackTag);
    }
    // Calculate two number according to operator
    let num1 = parseInt(firstNumberInput.value);
    let num2 = parseInt(secondNumberInput.value);
    let result = null;
    switch (selectOperator.value) {
        case "plus":
            result = num1 + num2;
            break;
        case "minus":
            result = num1 - num2;
            break;
        case "multiplication":
            result = num1 * num2;
            break;
        case "divisionn":
            result = num1 / num2;
            break;
        default:
            break;
    }
    resultTag.innerHTML = result;
});
// Clear Button
clearButton.addEventListener("click", () => {
    removeIsInvalid(firstNumberInput);
    removeIsInvalid(secondNumberInput);
    removeIsInvalid(selectOperator);
    resultTag.innerHTML = "";
});
// Wainting keyup
firstNumberInput.addEventListener("keyup", () => {
    if (firstNumberInput.value !== "" || null) {
        removeIsInvalid(firstNumberInput);
    }
});
secondNumberInput.addEventListener("keyup", () => {
    if (secondNumberInput.value !== "" || null) {
        removeIsInvalid(secondNumberInput);
    }
});

selectOperator.addEventListener("change", () => {
    if (selectOperator.value !== "empty" || null) {
        removeIsInvalid(selectOperator);
    }
});