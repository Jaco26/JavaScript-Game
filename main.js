
//randomly select two <input> elements from inside <form name="gameBoard">
function ranButton(){
	for(i = 0; i < 2; i++){
		var nOfInputs = document.gameBoard.length;
		var randomButton = document.gameBoard.elements[Math.floor(Math.random()*nOfInputs)];
		alert(randomButton.id);
	}
}






