

function solution(){
    var initialUnit = document.getElementById("convertFrom").value;
    var finalUnit = document.getElementById("convertTo").value;
    var val = parseFloat(document.getElementById("input").value);
    var convertedValue = 0;

    if (initialUnit === "fahrenheit" && finalUnit === "celsius"){
        convertedValue = (val - 32)/1.8;
    } else if (initialUnit === "fahrenheit" && finalUnit === "kelvin"){
        convertedValue = (val - 32)/1.8 + 273.15;
    } else if (initialUnit === "celsius" && finalUnit === "kelvin"){
        convertedValue = val + 273.15;
    } else if (initialUnit === "celsius" && finalUnit === "fahrenheit"){
        convertedValue = (val * 1.8) + 32;
    } else if (initialUnit === "kelvin" && finalUnit === "celsius"){
        convertedValue = val - 273.15;
    } else if (initialUnit === "kelvin" && finalUnit === "fahrenheit"){
        convertedValue = ((val - 273.15) * 1.8) + 32;
    } else {
        alert("Please Enter a valid Conversion.");
    }

    document.getElementById("ans").value = convertedValue;
}
