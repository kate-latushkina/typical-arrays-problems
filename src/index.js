exports.min = function min(array) {
  let min = 0;
  for (let i = 0; i < array.length; i++) {
    min = array[0];
    if (array.length != 0) {
      min = Math.min.apply(null, array);
    }
    else {
      min = 0;
    }
  }
  return min;
}

exports.max = function max(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    max = array[0];
    if (array.length != 0) {
      max = Math.max.apply(null, array);
    }
    else {
      max = 0;
    }

  }
  return max;
}

exports.avg = function avg(array) {
  let average = 0;
  let avg = 0
  for (let i = 0; i < array.length; i++) {
    if (array.length != 0) {
      average += array[i] / array.length;
      avg = average.toFixed(1)
    }
    else {
      average = 0; 
    }
  }
  return avg;
}