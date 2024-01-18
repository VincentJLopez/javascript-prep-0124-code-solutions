function reverse(array) {
  let newarr = [];
  let length = array.length;
  for (let index = length - 1; index > -1; index--) {
    newarr.push(array[index]);
  }
  return newarr;
}
