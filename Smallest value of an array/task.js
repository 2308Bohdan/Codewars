//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  if(toReturn === 'value') {
    let minValue = Math.min.apply(null, arr);
    return minValue;
  } else if(toReturn === 'index') {
    let minValue = Math.min.apply(null, arr);
    let minIndex = arr.indexOf(minValue);
    return minIndex;
  }
}
