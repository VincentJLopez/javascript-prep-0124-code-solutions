function compact(array) {
  let newarr = [];
  let length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i]) {
      newarr.push(array[i]);
    }
  }
  return newarr;
}
