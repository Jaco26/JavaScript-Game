
//randomly select an <input> element inside <form name="gameBoard">
function randomSquare(){
		var formLength = document.gameBoard.length;
		var x = document.gameBoard.elements[Math.floor(Math.random()*formLength)];
		return x.id;
}

//pops-up the returned value (x.id) from randomSquare() to make sure it's returning a random value
function button(){
	alert(randomSquare());
}


function randomTwo(){
	for (i=0; i<2; i++){
	alert(randomSquare());
	}
}

