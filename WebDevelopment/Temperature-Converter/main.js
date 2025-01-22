function CelciusToFahrenheit(celcius) {
    return celcius * 9 / 5 + 32;
}

function CelciusToKelvin(celcius) {
    return celcius + 273.15;
}

function FahrenheitToCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function FahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9 + 273.15;
}

function KelvinToCelcius(kelvin) {
    return kelvin - 273.15;
}

function KelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
}

document.addEventListener("DOMContentLoaded", function(event) { 
    const temperatureInput = document.getElementById("Temperature");
    const fromUnit = document.getElementById("FromUnit");
    const toUnit = document.getElementById("ToUnit");
    const result = document.getElementById("Result");
    const convertButton = document.getElementById("Convert");

    function convertTemperature() {
        var temperature = parseFloat(temperatureInput.value);
        console.log(temperature);
        var from = fromUnit.value;
        var to = toUnit.value;
        var convertedTemperature = 0;
        if (from === "Celcius" && to === "Fahrenheit") {
            convertedTemperature = `The temperature is ${CelciusToFahrenheit(temperature)} Fahrenheit.`;
            result.style.color = null;
        } else if (from === "Celcius" && to === "Kelvin") {
            convertedTemperature = `The temperature is ${CelciusToKelvin(temperature)} Kelvin.`;
            result.style.color = null;
        } else if (from === "Fahrenheit" && to === "Celcius") {
            convertedTemperature = `The temperature is ${FahrenheitToCelcius(temperature)} Celcius.`;
            result.style.color = null;
        } else if (from === "Fahrenheit" && to === "Kelvin") {
            convertedTemperature = `The temperature is ${FahrenheitToKelvin(temperature)} Kelvin.`;
            result.style.color = null;
        } else if (from === "Kelvin" && to === "Celcius") {
            convertedTemperature = `The temperature is ${KelvinToCelcius(temperature)} Celcius.`;
            result.style.color = null;
        } else if (from === "Kelvin" && to === "Fahrenheit") {
            convertedTemperature = `The temperature is ${KelvinToFahrenheit(temperature)} Fahrenheit.`;
            result.style.color = null;
        } else {
            convertedTemperature = "Invalid conversion, please try again.";
            result.style.color = "red";
        }
        result.innerHTML = convertedTemperature;
    }

    function enableConvertButton() {
        if (fromUnit.value !== "" && toUnit.value !== "" && temperatureInput.value !== "") {
            convertButton.disabled = false;
        }
    }

    convertButton.addEventListener("click", convertTemperature);
    fromUnit.addEventListener("input", enableConvertButton);
    toUnit.addEventListener("input", enableConvertButton);
});