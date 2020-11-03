//Function declarations

function resetGame(message){
    window.answer = Math.floor((Math.random() * 100) + 1);
    window.tries = 0;
    window.answers = [];
    document.getElementById("submit").style.display = "inline-block";
    message();
	console.log(window.answer);
 }

 function getMessage(){
    document.getElementById("output").innerHTML = "New number generated! (Tries left: 6)";
 }
 
 function checkNum(callback1, callback2){
    let number;
    
    number = document.getElementById("target").value;
    if(number < 1 || number > 100){
        document.getElementById("output").innerHTML = "Your guess is not valid! (Number is between 1 and 100)";
    }else if(window.tries > 6) {
        document.getElementById("output").innerHTML = "You're out of tries! Generate a new number to try again.";
        document.getElementById("submit").style.display = "none";
    } else{
        let counter = 0;
        let repeat = false;
        do{
            if (number === window.answers[counter]){
                repeat = true;
            }
            counter++;
            
        } while(counter < window.answers.length);

        if (repeat){
            document.getElementById("output").innerHTML = "You already guessed " + number +"!";
        } else{
            callback1();
            callback2();
        }      
    }
}

function compareNum(){
    let number;
    number = document.getElementById("target").value;
    window.tries++;
    
   if (number == window.answer){
    document.getElementById("output").innerHTML = "You are correct, my number is " + window.answer + "! You had " + (6 - window.tries) + " try/tries left to spare.";
    document.getElementById("submit").style.display = "none";
   } else if (number < window.answer && window.tries < 6){
  	document.getElementById("output").innerHTML =  number + " is too low, try again! (Tries left: " + (6 - window.tries) + ")";
   } else if(number > window.answer && window.tries < 6){
  	document.getElementById("output").innerHTML =  number + " is too high, try again! (Tries left: " + (6 - window.tries) + ")";
   } else if(window.tries == 6){
    document.getElementById("output").innerHTML = "You're all out of tries! My number was " + window.answer+ ". Generate a new number to try again.";
   }
   
}


function listPrevious(){
    let number;
    number = document.getElementById("target").value;
    window.answers.push(number);
    document.getElementById("previous").innerHTML = ": ";
    for (let i = 0 ; i < window.answers.length ; i++ ){
        document.getElementById("previous").innerHTML += window.answers[i] + " : ";
    }
    
}

function resetList(){
    document.getElementById("previous").innerHTML = ": ";
}


    //main

let answer;
let tries;
let answers;

resetGame(function (){
        document.getElementById("output").innerHTML = "Initial number generated. (Tries left: 6)"

    });

