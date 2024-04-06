function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * (5 / 9);
    return celsius.toFixed(2); // Round to 2 decimal places
}

var fahrenheitTemp = 98.6;
var celsiusTemp = fahrenheitToCelsius(fahrenheitTemp);
console.log('Temperature in Celsius:', celsiusTemp);
