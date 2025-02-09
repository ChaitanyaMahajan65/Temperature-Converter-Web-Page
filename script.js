// Conversion function
function convertTemperature() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let result = document.getElementById('result');

    // Check if the input is a valid number
    if (isNaN(temperature)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    let convertedTemperature;
    let unitName;

    // Conversion logic
    if (unit === "Celsius") {
        convertedTemperature = {
            Fahrenheit: (temperature * 9/5) + 32,
            Kelvin: temperature + 273.15
        };
        unitName = "Celsius";
    } else if (unit === "Fahrenheit") {
        convertedTemperature = {
            Celsius: (temperature - 32) * 5/9,
            Kelvin: ((temperature - 32) * 5/9) + 273.15
        };
        unitName = "Fahrenheit";
    } else if (unit === "Kelvin") {
        convertedTemperature = {
            Celsius: temperature - 273.15,
            Fahrenheit: ((temperature - 273.15) * 9/5) + 32
        };
        unitName = "Kelvin";
    }

    // Display the converted temperatures
    result.innerHTML = `
        <p>${temperature} ${unitName} is equivalent to:</p>
        <p>${convertedTemperature.Celsius.toFixed(2)} Celsius</p>
        <p>${convertedTemperature.Fahrenheit.toFixed(2)} Fahrenheit</p>
        <p>${convertedTemperature.Kelvin.toFixed(2)} Kelvin</p>
    `;
}
