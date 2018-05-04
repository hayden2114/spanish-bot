// ********** IMPORTANT **********
// Paste the following into the source code <head>
// <script type="text/javascript" src="buildBank.js"></script>


// identifiers in Canvas DOM
// class = question_name => question number
// name = question_text => question text
// class = answer_text => answer text



var Qbank = [];
var Abank = [];

var bank = {};  // *****************


window.onload=function() {	

	populateBank();

}



function populateBank() {

	// var i = 0

	//question = document.getElementsByName("question_text")[i].value;
	// answer = document.getElementsByClassName("answer_text")[i].value;

	// while (i < 20) {
	// 	bank[document.getElementsByName("question_text")[i].value] = document.getElementsByClassName("answer_text")[i].innerHTML;

	// 	i++;
	// }

	var length = document.getElementsByName("question_text").length;
	
	for (var i = 0; i < length; i++) {
		// bank[document.getElementsByName("question_text")[i].value] = document.getElementsByClassName("answer_text")[i].innerHTML;
		Qbank[i] = document.getElementsByName("question_text")[i].value;
		Abank[i] = document.getElementsByClassName("answer_text")[i].innerHTML;
	}

	console.log("Question bank");
	console.log(Qbank);

	console.log("Answer bank");
	console.log(Abank);

	// change the array if there are 2 answers to a question
	// Abank.splice(7, 1); // (index number, length of splice)
	// Abank.splice(12,1);
	// Abank.push("el director");
	// Abank.push("el clarinete");
	// console.log("Revised answer bank");
	// console.log(Abank);


	for (var i = 0; i < 20; i++) {
		bank[Qbank[i]] = Abank[i]; // *****************
	}


	console.log("Final bank");
	console.log(bank);  // ***************** 

	updateCookie();

	// var cookieBank = getCookie("bank"); // *****************
	// console.log(cookieBank);


};


function getCookie(name)
  {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }




function updateCookie() {

	bank = JSON.stringify(bank); // *****************
	console.log("stringified bank:");
	console.log(bank); // *****************

	
	document.cookie = 
	'bank=' + bank + // *****************
	'; max-age=2592000' + 
	'; path=/';


	// bank = JSON.parse(bank);

	// console.log(bank);
};




