let candidate1 = {
	name: "Biden",
  states: []
}

let candidate2 = {
	name: "Trump",
  states: []
}

let states = ["Alabama", "Alaska","Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Minor Outlying Islands", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "U.S. Virgin Islands", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

function displayStates(item){
	document.getElementById("states").innerHTML += "<p>" + item + "</p>" ;
}

function displayCandidate(candidate, display){
	document.getElementById(display).innerHTML = candidate.name;
  document.getElementById(display).innerHTML += candidate.states.forEach(displayStates);
}

states.forEach(displayStates);
displayCandidate(candidate1, "candidate1");
displayCandidate(candidate2, "candidate2");
