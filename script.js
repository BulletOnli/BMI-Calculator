const calculateBtn = document.getElementById('calculateBtn')

calculateBtn.addEventListener('click', () => {
    calculate()
    inputHeight.value = '';
    inputWeight.value = '';
})

function calculate() {
    const inputHeight = document.getElementById('inputHeight').value
    const inputWeight = document.getElementById('inputWeight').value
    const bmi = document.querySelector('.bmi')
    const classification = document.querySelector('.classification')
    
    let cmToM = inputHeight * 0.01
    let formulaOne = cmToM * cmToM
    let formulaTwo = inputWeight / formulaOne
    formulaTwo = formulaTwo.toFixed(2)

    if (inputHeight === '' && inputWeight === '') {
        bmi.textContent = `Your BMI: ${''}`
        classification.textContent = `Classification: ${''}`
    } else if (formulaTwo < "39.9") {
        bmi.textContent = `Your BMI: ${formulaTwo}`
        classification.textContent = `Classification: Underweight`
    } else if (formulaTwo < "24.9") {
        bmi.textContent = `Your BMI: ${formulaTwo}`
        classification.textContent = `Classification: Normal`
    } else if (formulaTwo < "29.9") {
        bmi.textContent = `Your BMI: ${formulaTwo}`
        classification.textContent = `Classification: OverWeight`
    } else if (formulaTwo < "39.9") {
        bmi.textContent = `Your BMI: ${formulaTwo}`
        classification.textContent = `Classification: Obesity`
    } else {
        bmi.textContent = `Your BMI: ${formulaTwo}`
        classification.textContent = `Classification: Extreme Obesity`
    }
}