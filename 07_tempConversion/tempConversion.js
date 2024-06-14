const convertToCelsius = function(degc) {
  let f = (degc-32)*5/9;
  return Math.round(f*10)/10;
};
const convertToFahrenheit = function(degf) {
  let f = degf*9/5+32;
  return Math.round(f*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
