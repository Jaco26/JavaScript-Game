var button1 = document.querySelector('#btn-1').style.backgroundColor = "red";
var button2 = document.querySelector('#btn-2').style.backgroundColor = "deepskyblue";
var button3 = document.querySelector('#btn-3').style.backgroundColor = "darkorange";

var myButtons = [button1, button2, button3]





//Random Color Generator




//ChangeColorToRed METHOD
function changeColorToRed(){
	var myElement = document.querySelector(".btn");
	myElement.style.backgroundColor = "#D93600";
	return myElement;
}

function changeColorToBlue(){
	var myColor = document.querySelector(".btn");
	myColor.style.backgroundColor = "#1d36be";
	return myColor;
}

var myColors = [changeColorToBlue(), changeColorToRed()]

myColors[0];
