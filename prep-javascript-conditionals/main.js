const age = 24

function isAdult(age){
  let answer;
  if (age < 18) {
  answer = false;
  } else {
  answer = true;
  }
  return answer;
}
console.log(isAdult(age))

const student1Score = 77

function didStudentPass(score){
  let outcome;
  if (student1Score >= 70){
    outcome = true;
  } else {
    outcome = false;
  }
  return outcome;
}
console.log(didStudentPass(student1Score))

const student2Score = 24

function gradeCalculator(score){
  let grade;
  if (student2Score < 60){
    grade = 'F';
  } else if (student2Score < 70){
    grade = 'D';
  } else if (student2Score < 80){
    grade ='C';
  } else if (student2Score < 90){
    grade = 'B';
  } else if (student2Score < 100){
    grade = 'A';
  } else {
    grade = 'A++';
  }
  return grade;
}
console.log(gradeCalculator(student2Score))

const season = 'autumn'

function seasonMessenger(season){
  let timeofYear;
  if (season === 'summer'){
    timeofYear = "it's hot today";
  } else if (season === 'spring'){
    timeofYear = "the flowers are blooming";
  } else if (season === "autumn"){
    timeofYear = "the leaves are changing color";
  } else if (season === 'winter'){
    timeofYear = "it's cold today";
  } else {
    timeofYear = "please enter a valid season";
  }
  return timeofYear;
}
console.log(seasonMessenger(season))

const dayOfTheWeek = 'sunday'

function dayDetector(dayOfTheWeek){
  let day;
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday'){
    day = 'have a good weekend!';
  } else {
    day = "It's a weekday!";
  }
  return day;
}
console.log(dayDetector(dayOfTheWeek))
