let grades = [-1];

let number = 0;

function addGrades() {
	let grade = document.getElementById("target").value;
  
  if(grades[0] == -1) {
  	grades[0] = grade;
  } else{
  	grades.push(grade); //1
  }
}

function removeGrades(){
	grades.pop(); //2
}

function nextStudent() {
	number ++;
	document.getElementById("plea").innerHTML = "Enter the grade of student " + (number + 1);
}

function lastStudent() {
	if (number > 0){
	number --;
  
	document.getElementById("plea").innerHTML = "Enter the grade of student " + (number + 1);
  }
  
}

function highGrade(){
let max = 0;
let counter = 0;
let index = 0;

 do {
 	if(grades[counter] >= max){
  	max = grades[counter];
    index = counter;
  }
 	counter ++;
 } while(counter < grades.length);
 
 document.getElementById("high").innerHTML = "The smartest student is student number " + (index + 1);
}

function sortGrades(){
	grades.sort(function(a, b){return b-a}); //4
  document.getElementById("list").innerHTML = "";
  
  grades.forEach(function (item){document.getElementById("list").innerHTML += item + "<br>";}) //3
}

function displayGrades(){
	document.getElementById("output").innerHTML = "";
	grades.forEach(function (item){document.getElementById("output").innerHTML += item + "<br>";}) //3
}

function averageGrades(){
let average;
let sum = 0;
grades.forEach(function (item){
sum = sum + Number(item);
}); //3
console.log(sum);
average = sum/grades.length;
	
	document.getElementById("average").innerHTML = "The average grade of the students is: " + average;
}

function addingFunction(){
let grade = document.getElementById("target").value;

	if(grade < 0 || grade > 10){
  	document.getElementById("feedback").innerHTML = "The grade must be between 0 and 10";
  } else{
  document.getElementById("feedback").innerHTML = "";
addGrades();
nextStudent();
displayGrades();
averageGrades();
}

}