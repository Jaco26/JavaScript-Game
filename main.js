
//randomly select an <input> element inside <form name="gameBoard">
function randomSquare(){
		var formLength = document.gameBoard.length;
		var x = document.gameBoard.elements[Math.floor(Math.random()*formLength)];
		return x.id;
}
document.write(randomSquare());


