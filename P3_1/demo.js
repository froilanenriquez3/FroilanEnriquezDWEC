let answer;

function getNumber(getMessage){
    window.answer = Math.floor((Math.random() * 100) + 1);
    getMessage();
	console.log(window.answer);
    return window.answer;
  
 }

 function getMessage(){
    document.getElementById("display").innerHTML = "New number generated!";
 }
 
function compareNum(answer){
    let number;
    
    number = document.getElementById("target").value;
    
   if (number == answer){
    document.getElementById("output").innerHTML = "You are correct! My number is " + answer;
   } else if (number < answer){
  	document.getElementById("output").innerHTML =  number + " is too low, try again! ";
   } else{
  	document.getElementById("output").innerHTML =  number + " is too high, try again! ";
   }
 
}

getNumber(function (){
    return 0;
});