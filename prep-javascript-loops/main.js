function whileLoop1(){
  const numbers = [];
  let v = 0;
  while (v < 10){
    numbers.push(v);
    v++;
  }
  return numbers;
}
console.log(whileLoop1())

function whileLoop2() {
  const numbers2 = [];
  let l = 0;
  while (l < 19){
    numbers2.push(l);
    l+=2;
  }
  return numbers2;
}
console.log(whileLoop2())

function forLoop1(){
  const numbers3 = [];
  for(let k = 0; k < 10; k++){
    numbers3.push(k);
  }
  return numbers3;
}
console.log(forLoop1())

function forLoop2(){
  let text = '';
  for(let d = 100; d > -1; d--){
    text += " Time till explosion " + d + "!";
  }
  return text
}
console.log(forLoop2())

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
}

function forInLoop1(object){
  const person = [];
  for(let names in object){
  person.push(names);
}
return person
}
console.log(forInLoop1(object))

function forInLoop2(object){
  const person2 = [];
  for(let values in object){
  text = object[values];
    person2.push(text);
  }
  return person2
}
console.log(forInLoop2(object))
