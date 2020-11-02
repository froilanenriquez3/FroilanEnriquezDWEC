//Function declarations

function resetGame(message){
    window.answer = Math.floor((Math.random() * 100) + 1);
    window.tries = 0;
    document.getElementById("submit").style.display = "inline-block";
    message();
	console.log(window.answer);
 }

 function getMessage(){
    document.getElementById("output").innerHTML = "New number generated! (Tries left: 5)";
 }
 
 function checkNum(callback1, callback2){
    let number;
    
    number = document.getElementById("target").value;
    if(number < 1 || number > 100){
        document.getElementById("output").innerHTML = "Your guess is not valid! (Number is between 1 and 100)";
    }else if(window.tries > 5) {
        document.getElementById("output").innerHTML = "You're out of tries! Generate a new number to try again.";
    } else{
        callback1();
        callback2();
    }
}

function compareNum(){
    let number;
    number = document.getElementById("target").value;
    window.tries++;
    
   if (number == window.answer){
    document.getElementById("output").innerHTML = "You are correct, my number is " + window.answer + "! You had " + (5 - window.tries) + " tries left to spare.";
    document.getElementById("submit").style.display = "none";
   } else if (number < window.answer && window.tries < 5){
  	document.getElementById("output").innerHTML =  number + " is too low, try again! (Tries left: " + (5 - window.tries) + ")";
   } else if(number > window.answer && window.tries < 5){
  	document.getElementById("output").innerHTML =  number + " is too high, try again! (Tries left: " + (5 - window.tries) + ")";
   } else if(window.tries == 5){
    document.getElementById("output").innerHTML = "You're all out of tries! My number was " + window.answer+ ". Generate a new number to try again.";
   }
   
}


function listPrevious(){
    let number;
    number = document.getElementById("target").value;
    document.getElementById("previous").innerHTML += number + " : ";
}

function resetList(){
    document.getElementById("previous").innerHTML = ": ";
}


    //main

let answer;
let tries;

resetGame(function (){
        document.getElementById("output").innerHTML = "Initial number generated. (Tries left: 5)"

    });

