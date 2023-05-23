const convertToCelsius = function(temp) {
  let cTemp = ((temp - 32) * 5/9).toFixed(1);

  let val = cTemp.split('.');
  cTemp = Number(cTemp)
  val = val.map(function(str) {
    return parseInt(str);
  });

  if (val[1] === 0) {
    return val[0];
  } else {
    return cTemp;
  }
};

const convertToFahrenheit = function(temp) {
  let fTemp = ((temp * 9/5) + 32).toFixed(1);

  let val = fTemp.split('.');
  fTemp = Number(fTemp)
  val = val.map(function(str) {
    return parseInt(str);
  });

  if (val[1] === 0) {
    return val[0];
  } else {
    return fTemp;
  }
};

/*
  Spec
  - Take two functions
  - First converts to celsius
  - Second converts to Fahrenheit
  - To work, both need to work with negatives
  - Round to 1 decimal place
  - Work with null values aas 0
  - Formulas for F to C -> (F -32) * 9/5
  - C to F -> (C * 9/5) + 32

*/


//testing

const cTemp = convertToCelsius(32);

console.log(cTemp);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
