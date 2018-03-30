// ********** IMPORTANT **********
// Paste the following into the source code <head>
// <script type="text/javascript" src="makeBank.js"></script>


// identifiers in Canvas DOM
// class = question_name => question number
// name = question_text => question text
// class = answer_text => answer text



var Qbank = [];
var Abank = [];

var bank = {};


window.onload=function() {	

	populateBank();

}

module.exports = {




populate: function populateBank() {

	// var i = 0

	//question = document.getElementsByName("question_text")[i].value;
	// answer = document.getElementsByClassName("answer_text")[i].value;

	// while (i < 20) {
	// 	bank[document.getElementsByName("question_text")[i].value] = document.getElementsByClassName("answer_text")[i].innerHTML;

	// 	i++;
	// }
	
	for (var i = 0; i < 20; i++) {
		// bank[document.getElementsByName("question_text")[i].value] = document.getElementsByClassName("answer_text")[i].innerHTML;
		Qbank[i] = document.getElementsByName("question_text")[i].value;
		Abank[i] = document.getElementsByClassName("answer_text")[i].innerHTML;
	}

	console.log("Question bank");
	console.log(Qbank);

	console.log("Answer bank");
	console.log(Abank);

	// change the array if there are 2 answers to a question
	Abank.splice(8, 1);
	Abank.push("la impresora");
	console.log("Revised answer bank");
	console.log(Abank);


	for (var i = 0; i < 20; i++) {
		bank[Qbank[i]] = Abank[i];
	}

	console.log("Final bank");
	console.log(bank);


	//console.log(bank["web site"]);


	

	


	// console.log(JSON.stringify(bank));

	// alert(bank);


}
};