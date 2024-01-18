function initial(array) {
  let newarr = [];
  let length = array.length;
  for (let index = 0; index < length - 1; index++) {
    newarr.push(array[index]);
  }
  return newarr;
}
