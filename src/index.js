exports.min = function min(array) {
  let min = 0;
  if (array === null || array === undefined) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    min = array[0];
    if (array.length != 0) {
      min = Math.min.apply(null, array);
    }
  }
  return min;
}

exports.max = function max(array) {
  let max = 0;
  if (array === null || array === undefined) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    max = array[0];
    if (array.length != 0) {
      max = Math.max.apply(null, array);
    }
  }
  return max;
}

exports.avg = function avg(array) {
  let average = 0;
  let avg = 0
  if (array === null || array === undefined) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    if (array.length != 0) {
      average += array[i] / array.length;
      avg = average.toFixed(1)
    }
  }
  return avg;
}