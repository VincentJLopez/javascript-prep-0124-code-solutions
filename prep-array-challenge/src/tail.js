function tail(array) {
  let newarr = [];
  let length = array.length;
  for (let index = 1; index < length; index++) {
    newarr.push(array[index]);
  }
  return newarr;
}
