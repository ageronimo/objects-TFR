/*
	OOP (Object Oriented Programming)
	Angela Geronimo
	12/30/16
*/


var team = {
	teamCaptainName: "Josh",
	teamMember1: "Ian",
	teamMember2: "Angela",
	escapes: function escape() {
		console.log(this.teamCaptainName + ", " + this.teamMember1 + ", and " + this.teamMember2 + " have escaped!");
		return this.teamCaptainName + ", " + this.teamMember1 + ", and " + this.teamMember2 + " have escaped!"; 

	}
};

team.escapes();


//using OOP
function Team(teamCaptainName, teamMember1, teamMember2) {
	this.teamCaptainName = teamCaptainName;
	this.teamMember1 = teamMember1;
	this.teamMember2 = teamMember2;
}

var team = new Team("Josh", "Angela", "Ian");

//create escape() method within team to say all members escaped

// Goal:
// The method escape() being stored in a variable weHaveEscaped and printed out with console.log to show that every team member has escaped!