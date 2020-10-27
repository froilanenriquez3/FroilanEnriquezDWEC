let age = 18;
let name = "Froilan";
let canVote = true;

if (age >= 18){
	document.getElementById("answer").innerHTML = name +" is old enough to vote.";
} else {
		document.getElementById("answer").innerHTML = name + " is not old enough to vote.";
    canVote = false;
}

console.log(canVote);
