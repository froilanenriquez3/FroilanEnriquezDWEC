//Function declarations

function getNumber(message){
    window.answer = Math.floor((Math.random() * 101) + 1);
    window.tries = 0;
    message();
	console.log(window.answer);
 }

 function getMessage(){
    document.getElementById("output").innerHTML = "New number generated! (Tries: 0)";
 }
 
function compareNum(){
    let number;
    number = document.getElementById("target").value;
    window.tries++;
    
   if (number == window.answer){
    document.getElementById("output").innerHTML = "You are correct! My number is " + window.answer;
   } else if (number < window.answer){
  	document.getElementById("output").innerHTML =  number + " is too low, try again! ";
   } else{
  	document.getElementById("output").innerHTML =  number + " is too high, try again! ";
   }
 
   document.getElementById("output").innerHTML += " (Tries : " + window.tries + ")";
}

function checkNum(compare){
    let number;
    number = document.getElementById("target").value;
    if(number < 1 || number > 100){
        document.getElementById("output").innerHTML = "Your guess is not valid! (Number is between 1 and 100)";
    } else{
        compare();
    }
}

//main

let answer;
let tries;

getNumber(function (){
        document.getElementById("output").innerHTML = "Initial number generated. (Tries: 0)"

    });

