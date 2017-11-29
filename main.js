
//randomly select all <input> elements from inside <form name="gameBoard">
//Also, create a new array which holds the original 

//Create empty array "ranArray[]"
//Use for loop to run a code block the same number of times as the number of elements in 
//   the built-in "forms[]" array (16 times because there are 16 elements in the <form name"gameBoard">)
//In the code block, I 1: declared a variable "nOfInputs" equal to the number of elements inside the <form name"gameBoard">
//  then 2: declared a variable random 

var ranArray = [];

function ranButton(){
	for(i = 0; i < document.gameBoard.length; i++){
		var nOfInputs = document.gameBoard.length;
		var randomButton = document.gameBoard.elements[Math.floor(Math.random()*nOfInputs)];
		var newItems = ranArray.push(randomButton.value);
		alert(randomButton.id);
	}
}





