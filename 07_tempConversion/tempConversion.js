const convertToCelsius = function(to_convert) {
  return Math.round((to_convert - 32)*(5/9)*10)/10;
};

const convertToFahrenheit = function(to_convert) {
  return Math.round(((to_convert * (9/5)) + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
