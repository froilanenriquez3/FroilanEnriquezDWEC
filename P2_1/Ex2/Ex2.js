let person = {
	name: "Froilan",
  age: 18,
  canVote: true, 
 	votingEligible : function (){
  	if (this.age >= 18){
	document.getElementById("answer").innerHTML = this.name +" is old enough to vote.";
} else {
		document.getElementById("answer").innerHTML = this.name + " is not old enough to vote.";
    this.canVote = false;
}
  }
}

person.votingEligible();
console.log(person.canVote);
